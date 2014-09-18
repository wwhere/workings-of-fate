/* @namespace Namespace para API JSRPG */
var jsrpg = jsrpg || {};

/**
 * Dado de número de caras indicado
 * @param caras
 * @returns {number} Entre 1 y caras
 */
jsrpg.d = function(caras) {
    return Math.floor(Math.random() * caras) + 1;
};

/**
 * Devuelve una cadena con el modificador y el signo +/-
 * @param modificador
 * @returns {string}
 */
jsrpg.modBonito = function(modificador) {
    if (modificador < 0) {
        return String(modificador);
    } else {
        return "+" + String(modificador);
    }
};

/**
 *
 * @param {number} rango Número de caras del dado que se usa para consultar la tabla
 * @param {{v:number,e:*}[]} valores
 * @constructor
 */
jsrpg.Tabla = function(rango, valores) {
    this.rango = rango;

    this.valores = valores;
};

jsrpg.Tabla.REROLL = "REROLL";

jsrpg.Tabla.prototype = {
    constructor : jsrpg.Tabla,

    /**
     *
     * @returns {*}
     */
    tira : function() {
        var tirada = jsrpg.d(this.rango);
        var valor;

        for (var i = 0; i < this.valores.length; i++) {
            if (this.valores[i].v >= tirada) {
                valor = this.valores[i].e;
                break;
            }
        }

        return valor;
    }
};

jsrpg.locale = {};

jsrpg.locale.idiomas = {};
jsrpg.locale.idiomas.eng = "eng";
jsrpg.locale.idiomas.spa = "spa";

jsrpg.locale.idioma_ui = jsrpg.locale.idiomas.eng;

jsrpg.locale.diccionario = {};

/**
 *
 * @param {string} id
 * @param {string} eng
 * @param {string} spa
 * @returns {string}
 * @public
 */
jsrpg.locale.d = function(id, eng, spa) {
    jsrpg.locale.diccionario[id] = {
        eng: eng,
        spa: spa
    };
    return id;
};

/**
 *
 * @param {string} id
 * @returns {string}
 * @public
 */
jsrpg.locale.l = function(id) {
    if (jsrpg.locale.diccionario[id])
        return jsrpg.locale.diccionario[id][jsrpg.locale.idioma_ui];
    else
        return id;
};

/**
 * Ofrece una selección al usuario en una ventana emergente
 * @param {{opciones:{texto:string,valor:string}[],callback:Function}} parametros
 */
jsrpg.userChoice = function(parametros) {
    var ventana = $("<div></div>");

    var botones = [];

    var opciones = parametros.opciones;

    var elecciones = parametros.elecciones;
    var numElecciones = 0;

    var generaBotonSencillo = function(texto, valor, callback) {
        return {
            text: texto,
            click: function() {
                $(ventana).dialog("close");
                callback.call(document,valor);
            }
        };
    };

    var generaBotonMultiple = function(texto, valor, tipo) {
        var boton = $("<button></button>").append(texto);

        boton.addClass("jsrpg-button");
        boton.attr("valor",valor);

        if (tipo) {
            boton.attr("tipo",tipo);
        }

        boton.on("click", function() {
                if ($(this).hasClass("jsrpg-option-selected")) {
                    if (numElecciones > 0) {
                        $(this).removeClass("jsrpg-option-selected");
                        numElecciones--;
                    }
                } else {
                    if (numElecciones < elecciones) {
                        $(this).addClass("jsrpg-option-selected");
                        numElecciones++;
                    }
                }
            }
        );
        return boton;
    };

    if (parametros.multiple) {
        if (parametros.opcionesAgrupadas) {
            botones.push(generaBotonSencillo("OK","",function() {
                if (numElecciones == elecciones) {
                    var opcionesElegidas = [];

                    $(ventana).find(".jsrpg-button.jsrpg-option-selected").each(function(index, element) {
                        opcionesElegidas.push({valor:$(element).attr("valor"),tipo:$(element).attr("tipo")});
                    });
                    $(ventana).dialog("close");
                    $(ventana).empty();
                    parametros.callback(opcionesElegidas);
                }
            }));
            for (i = 0; i < opciones.length; i++) {
                $(ventana).append($("<h3></h3>").append(jsrpg.locale.l(opciones[i].tipo)));
                for (var j = 0; j < opciones[i].opciones.length; j++) {
                    $(ventana).append(generaBotonMultiple(opciones[i].opciones[j].texto,opciones[i].opciones[j].valor,opciones[i].tipo));
                }
            }
        } else {
            botones.push(generaBotonSencillo("OK","",function() {
                if (numElecciones == elecciones) {
                    var opcionesElegidas = [];

                    $(ventana).find(".jsrpg-button.jsrpg-option-selected").each(function(index, element) {
                        opcionesElegidas.push($(element).attr("valor"));

                    });
                    $(ventana).dialog("close");
                    $(ventana).empty();
                    parametros.callback(opcionesElegidas);
                }
            }));
            for (i = 0; i < opciones.length; i++) {
                $(ventana).append(generaBotonMultiple(opciones[i].texto,opciones[i].valor));
            }
        }
    } else {
        for (var i = 0; i < opciones.length; i++) {
            botones.push(generaBotonSencillo(opciones[i].texto,opciones[i].valor,opciones[i].callback || parametros.callback ));
        }
    }

    ventana.dialog({
        title:parametros.titulo,
        autoOpen:true,
        buttons: botones,
        width: 800
    });
};

/**
 *
 * @type {number}
 */
jsrpg.idElecciones = 10;

/**
 *
 * @param {*} modelo
 * @param {Function} aplicar Función para aplicar al modelo la elección hecha
 * @param {Function} cambiar Función para rehacer la elección. Recibe un parametro callback al que debe llamar al terminar.
 * @param {Function} eliminar Función para deshacer la elección hecha sobre el modelo
 * @param {string} descripcion Descripción de la elección
 * @param {{}} opciones
 * @constructor
 */
jsrpg.Eleccion = function(modelo, aplicar, cambiar, eliminar, descripcion, opciones) {

    /**
     *
     * @type {number}
     */
    this.id = jsrpg.idElecciones++;

    /**
     *
     * @type {*}
     */
    this.modelo = modelo;

    /**
     *
     * @type {Function}
     */
    this.aplicar = aplicar;

    /**
     *
     * @type {Function}
     */
    this.cambiar = cambiar;

    /**
     *
     * @type {Function}
     */
    this.eliminar = eliminar;

    /**
     *
     * @type {string}
     */
    this.descripcion = descripcion;

    /**
     *
     * @type {{}}
     */
    this.opciones = opciones;
};

jsrpg.Eleccion.prototype = {
    constructor : jsrpg.Eleccion,

    activar : function() {
        this.aplicar.call(this.model);
    },

    desactivar : function() {
        this.eliminar.call(this.model);
    },

    actualizar : function(callback) {
        this.cambiar.call(this, callback);
    },

    isEliminable : function() {
        return this.opciones.eliminable;
    },

    isCambiable : function() {
        return this.opciones.cambiable;
    }

};

/**
 *
 * @type {jsrpg.Eleccion[]}
 */
jsrpg.elecciones = [];

/**
 *
 * @param {*} modelo
 * @param {Function} aplicar
 * @param {Function} cambiar
 * @param {Function} eliminar
 * @param {string} descripcion
 * @param {{}} opciones
 * @returns {number} El ID de control.
 */
jsrpg.addEleccion = function(modelo, aplicar, cambiar, eliminar, descripcion, opciones) {
    var eleccion = new jsrpg.Eleccion(modelo, aplicar, cambiar, eliminar, descripcion, opciones);
    eleccion.activar();
    jsrpg.elecciones.push(eleccion);
    return eleccion.id;
};

/**
 *
 * @param {number} id
 */
jsrpg.removeEleccion = function(id) {
    var i;
    var eleccion;

    var indiceEliminado = -1;

    for (i = 0; i < jsrpg.elecciones.length; i++) {
        if (jsrpg.elecciones[i].id == id) {
            indiceEliminado = i;
            break;
        }
    }

    if (indiceEliminado != -1) {
        for (i = jsrpg.elecciones.length-1; i >= indiceEliminado; i--) {
            eleccion = jsrpg.elecciones[i];
            eleccion.desactivar();
        }


        if (!eleccion.opciones['EliminarAislado']) {
            jsrpg.elecciones.splice(indiceEliminado,1);
            for (i = indiceEliminado; i < jsrpg.elecciones.length; i++) {
                eleccion = jsrpg.elecciones[i];

                eleccion.activar();
            }
        } else {
            if (indiceEliminado == 0) {
                jsrpg.elecciones = [];
            } else {
                jsrpg.elecciones = jsrpg.elecciones.slice(0,indiceEliminado-1);
            }
        }
    }
};

/**
 *
 * @param {number} id
 */
jsrpg.updateEleccion = function(id) {
    var i;
    var eleccion;

    var indiceCambiado = -1;

    for (i = 0; i < jsrpg.elecciones.length; i++) {
        if (jsrpg.elecciones[i].id == id) {
            indiceCambiado = i;
            break;
        }
    }

    if (indiceCambiado != -1) {
        for (i = jsrpg.elecciones.length-1; i >= indiceCambiado; i--) {
            eleccion = jsrpg.elecciones[i];
            eleccion.desactivar();
        }
        eleccion = jsrpg.elecciones[indiceCambiado];

        eleccion.actualizar(
            function(eleccion,indiceCambiado){
                return function() {
                    if (!eleccion.opciones['CambiarAislado']) {
                        for (i = indiceCambiado; i < jsrpg.elecciones.length; i++) {
                            eleccion = jsrpg.elecciones[i];

                            eleccion.activar();
                        }
                    } else {
                        jsrpg.elecciones = jsrpg.elecciones.slice(0,indiceCambiado);
                    }
                }
            }(eleccion,indiceCambiado)
        );
    }
};


jsrpg.listaElecciones = function() {
    var listado = [];

    for (var i = 0; i < jsrpg.elecciones.length;i++) {
        listado.push(jsrpg.elecciones[i].descripcion);
    }

    return listado;
};


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

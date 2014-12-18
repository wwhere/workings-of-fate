/* @namespace Namespace para API JSRPG */
var jsrpg = jsrpg || {};

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

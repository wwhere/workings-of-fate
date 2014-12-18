/* @namespace Namespace para API JSRPG */
var jsrpg = jsrpg || {};

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

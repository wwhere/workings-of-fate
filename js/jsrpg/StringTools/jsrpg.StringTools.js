/* @namespace Namespace para API JSRPG */
var jsrpg = jsrpg || {};


jsrpg.stringTools = {};

/**
 *
 * @param {string} cadena
 * @returns {string}
 */
jsrpg.stringTools.toUpperFirst = function(cadena) {
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
};
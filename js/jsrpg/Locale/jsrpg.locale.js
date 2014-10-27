/* @namespace Namespace para API JSRPG */
var jsrpg = jsrpg || {};

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


/* @namespace Namespace para KAP Creator */
var wof = wof || {};

var _r = jsrpg;
var _l = jsrpg.locale;

wof.data = {};

wof.d = jsrpg.locale.d;
wof.l = jsrpg.locale.l;

wof.dic = {};

wof.ui = {};

wof.ui.ninguno = _l.d('ui_ninguno','None','Ninguno');

wof.view = {};

wof.view.removeEleccion = function(ev, mod) {
    jsrpg.removeEleccion(mod.eleccion.id);
};

wof.view.updateEleccion = function(ev, mod) {
    jsrpg.updateEleccion(mod.eleccion.id);
};

wof.view.ASPECT_GENERATOR = "aspectGenerator";
wof.view.WORLD_GENERATOR = "worldGenerator";
wof.view.CHARACTER_GENERATOR = "characterGenerator";

wof.view.switchTo = function(id) {
    $(".wofGenerator").hide();
    $("#"+id).show();
    $(".generatorLink").removeClass("currentLink");
    $("#"+id+"Link").addClass("currentLink");

};


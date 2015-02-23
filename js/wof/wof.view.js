wof.view = {};

wof.view.removeEleccion = function(ev, mod) {
    jsrpg.removeEleccion(mod.eleccion.id);
};

wof.view.updateEleccion = function(ev, mod) {
    jsrpg.updateEleccion(mod.eleccion.id);
};

wof.view.cambiaFuente = function() {
    wof.fuente.cambiaFuente();
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
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

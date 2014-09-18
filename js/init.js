wof.init = {};

/**
 * Se enlaza la vista con el modelo y los controladores por Rivets
 */
wof.init.step0 = function() {

    rivets.bind($('#personaje'), {
        per: wof.creacion.personajeActual,
        view : wof.view,
        wof : wof
    });

    rivets.bind($('#creacion'), {
        creacion: jsrpg,
        view : wof.view,
        wof : wof,
        base : wof.creacion
    });

    wof.init.step1();
};

wof.init.step1 = function() {

    wof.init.step2();
};

wof.init.step2 = function() {
    wof.creacion.whatever(wof.init.step3);
};

wof.init.step3 = function() {
};




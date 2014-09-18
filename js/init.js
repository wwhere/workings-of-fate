wof.init = {};

/**
 * Se enlaza la vista con el modelo y los controladores por Rivets
 */
wof.init.step0 = function() {

    //binds de rivets

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




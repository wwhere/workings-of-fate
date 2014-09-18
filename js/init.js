wof.init = {};

/**
 * Se enlaza la vista con el modelo y los controladores por Rivets
 */
wof.init.step0 = function() {

    //binds de rivets

    var salida = $("#aspectList");

    for (var i = 0; i < 50; i++) {
        salida.append($("<div></div>").append(wof.aspects.random.class1()));
    }

};

wof.init.step1 = function() {
};

wof.init.step2 = function() {
};

wof.init.step3 = function() {
};




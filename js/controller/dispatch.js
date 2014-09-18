wof.dispatch = {};

wof.dispatch.listeners = [];

wof.evento                                     = {};

/**
 * Lanza un evento, puede que con subeventos
 * @param {number|{}} evento Uno de los valores en wof.evento
 * @param {Array} parametros Los parametros que pasa el evento
 */
wof.dispatch.lanzaEvento = function(evento, parametros) {
    if (isNaN(evento)) {
        for (var subEvento in evento) {
            if (evento.hasOwnProperty(subEvento)) {
                wof.dispatch.lanzaEvento(evento[subEvento],parametros);
            }
        }
    } else {
        wof.dispatch._evento(evento,parametros);
    }
};

/**
 * Lanza un evento sin subeventos
 * @param {number|{}} evento
 * @param {Array} parametros
 * @private
 */
wof.dispatch._evento = function(evento, parametros) {
    if (wof.dispatch.listeners[evento]) {
        for (var listener in wof.dispatch.listeners[evento]) {
            if (wof.dispatch.listeners[evento].hasOwnProperty(listener)) {
                wof.dispatch.listeners[evento][listener].apply(window,parametros);
            }
        }
    }
};

/**
 *
 * @param {*} evento El evento a escuchar
 * @param {*} callback La función a llamar
 * @param {*} id El id del listener
 */
wof.dispatch.addListener = function(evento, callback, id) {
    if (!wof.dispatch.listeners[evento]) {
        wof.dispatch.listeners[evento] = {};
    }

    wof.dispatch.listeners[evento][id] = callback;
};

/**
 *
 * @param {*} evento El evento que escuchaba el listener
 * @param {*} id El id del listener a eliminar
 */
wof.dispatch.removeListener = function(evento, id) {
    if (wof.dispatch.listeners[evento]) {
        if (wof.dispatch.listeners[evento].hasOwnProperty(id)) {
            delete wof.dispatch.listeners[evento][id];
        }
    }
};
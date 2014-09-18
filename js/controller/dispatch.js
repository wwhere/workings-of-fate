wof.dispatch = {};

wof.dispatch.listeners = [];

wof.evento                                     = {};

wof.evento.datosPersonales                     = {};
wof.evento.datosPersonales.nombre              = 201; //Parametros: nuevoNombre
wof.evento.datosPersonales.homeland            = 202; //Parametros: nuevaHomeland, anteriorHomeland
wof.evento.datosPersonales.culture             = 203; //Parametros: nuevaCulture, anteriorCulture
wof.evento.datosPersonales.religion            = 204; //Parametros: nuevaReligion, anteriorReligion
wof.evento.datosPersonales.fathersName         = 205; //Parametros: nuevoNombre
wof.evento.datosPersonales.fathersClass        = 206; //Parametros: nuevaClase
wof.evento.datosPersonales.hijoNumero          = 207; //Parametros: nuevoNumeroDeHijo
wof.evento.datosPersonales.lord                = 208; //Parametros: nuevoLiegeLord
wof.evento.datosPersonales.currentClass        = 209; //Parametros: nuevaClase
wof.evento.datosPersonales.currentHome         = 210; //Parametros: nuevaManor
wof.evento.datosPersonales.edad                = 211; //Parametros: nuevaEdad

wof.evento.rasgos                              = {};
wof.evento.rasgos.chaste                       = 301; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.lustful                      = 302; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.energetic                    = 303; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.lazy                         = 304; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.forgiving                    = 305; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.vengeful                     = 306; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.generous                     = 307; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.selfish                      = 308; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.honest                       = 309; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.deceitful                    = 310; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.just                         = 311; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.arbitrary                    = 312; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.merciful                     = 313; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.cruel                        = 314; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.modest                       = 315; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.proud                        = 316; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.prudent                      = 317; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.reckless                     = 318; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.spiritual                    = 319; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.worldly                      = 320; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.temperate                    = 321; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.indulgent                    = 322; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.trusting                     = 323; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.suspicious                   = 324; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.valorous                     = 325; //Parametros nuevoValor, antiguoValor
wof.evento.rasgos.cowardly                     = 326; //Parametros nuevoValor, antiguoValor

wof.evento.pasiones                            = {};  //400
wof.evento.numeroPasiones                      = 0;  //Parametros nuevoValor, antiguoValor

wof.evento.atributos                           = {};
wof.evento.atributos.size                      = 501; //Parametros nuevoValor, antiguoValor
wof.evento.atributos.dextery                   = 502; //Parametros nuevoValor, antiguoValor
wof.evento.atributos.constitution              = 503; //Parametros nuevoValor, antiguoValor
wof.evento.atributos.strength                  = 504; //Parametros nuevoValor, antiguoValor
wof.evento.atributos.appearance                = 505; //Parametros nuevoValor, antiguoValor

wof.evento.distinctiveFeatures                 = {};  //Parametros nuevoValor, antiguoValor
wof.evento.numeroDistinctiveFeatures           = 0;   //600




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
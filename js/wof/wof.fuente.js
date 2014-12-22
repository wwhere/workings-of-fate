wof.fuente = {};

wof.fuente.opciones = {
    fontNice : 'fontNice',
    fontReadable : 'fontReadable',
    fontNice2 : 'fontNice2'
};

wof.fuente.actual = wof.fuente.opciones.fontNice;

wof.fuente.cambia = function(nuevaFuente) {
    $(".aspect."+wof.fuente.actual).removeClass(wof.fuente.actual).addClass(nuevaFuente);
    wof.fuente.actual = nuevaFuente;
};

wof.fuente.cambiaFuente = function() {
    if (wof.fuente.actual == wof.fuente.opciones.fontNice) {
        wof.fuente.cambia(wof.fuente.opciones.fontNice2);
    } else if (wof.fuente.actual == wof.fuente.opciones.fontNice2) {
        wof.fuente.cambia(wof.fuente.opciones.fontReadable);
    } else {
        wof.fuente.cambia(wof.fuente.opciones.fontNice);
    }
};

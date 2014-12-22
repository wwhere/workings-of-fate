/* @namespace Namespace para Workings of Fate */
var wof = wof || {};

var _r = jsrpg;
var _l = jsrpg.locale;

wof.d = jsrpg.locale.d;
wof.l = jsrpg.locale.l;


wof.numberToGenerate = 10;
wof.longFactor = 0.5;
wof.chaosLevel = 0.5;

wof.loadAspectsFromButton = function() {
    wof.loadAspects(wof.numberToGenerate, wof.chaosLevel, wof.longFactor);
};

wof.loadAspects = function(numberToLoad, chaosLevel, longFactor) {
    var salida = $("#aspectList");

    for (var i = 0; i < numberToLoad; i++) {
        salida.append($("<div></div>").addClass("aspect").addClass(wof.fuente.actual).append(wof.aspects.random.any(chaosLevel, longFactor)));
    }
};


wof.clearAspects = function() {
    $("#aspectList").empty();
};


wof.changeLongFactor = function(valor) {
    wof.longFactor = valor/100;
};

wof.changeNumberToGenerate = function(valor) {
    valor = Math.floor(valor);
    wof.numberToGenerate = valor;
    if (valor > 1)
        $("#botonGenerar").html("Generate other " + valor + "!")
    else
        $("#botonGenerar").html("Generate just one!")
};

wof.changeChaosLevel = function(valor) {
    wof.chaosLevel = valor/100;
};
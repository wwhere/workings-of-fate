wof.init = {};

wof.init.step0 = function() {
    var dialCaos = $("#dialCaos");

    var dialGeneralRandom = $("<input>").attr("type","text").attr("id","nivelCaos").addClass("dial").attr("value",50);

    dialCaos.append(dialGeneralRandom).append($("<div>Chaos level</div>").addClass("knobLabel"));

    dialGeneralRandom.knob({
        min: 0,
        max: 100,
        displayInput : false,
        angleOffset : -125,
        angleArc : 250,
        fgColor: "#66CC66",
        'change': function(value) {
            wof.changeChaosLevel(value);
        }
    });

    var dialNumero = $("#dialNumero");

    var dialNumeroAGenerar = $("<input>").attr("type","text").attr("id","numeroGenerar").addClass("dial").attr("value",10);

    dialNumero.append(dialNumeroAGenerar).append($("<div>Number to generate</div>").addClass("knobLabel"));

    dialNumeroAGenerar.knob({
        min: 1,
        max: 100,
        displayInput : false,
        angleOffset : -15,
        angleArc : 250,
        'change': function(value) {
            wof.changeNumberToGenerate(value);
        }
    });

    var dialLargo = $("#dialLargo");

    var dialLargoAspectos = $("<input>").attr("type","text").attr("id","largoAspectos").addClass("dial").attr("value",50);

    dialLargo.append(dialLargoAspectos).append($("<div>Long factor</div>").addClass("knobLabel"));

    dialLargoAspectos.knob({
        min: 0,
        max: 100,
        displayInput : false,
        angleOffset : 100,
        angleArc : 250,
        fgColor: "#f6b83f",
        'change': function(value) {
            wof.changeLongFactor(value);
        }
    });

};

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
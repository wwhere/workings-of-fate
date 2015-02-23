wof.init = {};

wof.init.step0 = function() {

    wof.view.switchTo(wof.view.ASPECT_GENERATOR);

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

    var dialCaosMundo = $("#dialCaosMundo");

    var dialWorldRandom = $("<input>").attr("type","text").attr("id","nivelCaosMundo").addClass("dial").attr("value",50);

    dialCaosMundo.append(dialWorldRandom).append($("<div>World chaos</div>").addClass("knobLabel"));

    dialWorldRandom.knob({
        min: 0,
        max: 100,
        displayInput : false,
        angleOffset : -125,
        angleArc : 250,
        fgColor: "#66CC66",
        'change': function(value) {
            wof.changeWorldChaosLevel(value);
        }
    });

    var dialNumeroBigIssues = $("#dialNumeroBigIssues");

    var dialNumeroIssuesGenerar = $("<input>").attr("type","text").attr("id","numeroBigIssues").addClass("dial").attr("value",2);

    dialNumeroBigIssues.append(dialNumeroIssuesGenerar).append($("<div>Number of Big Issues</div>").addClass("knobLabel"));

    dialNumeroIssuesGenerar.knob({
        min: 1,
        max: 5,
        displayInput : false,
        angleOffset : -15,
        angleArc : 250,
        'change': function(value) {
            wof.changeNumberBigIssues(value);
        }
    });

    var dialNumeroElementos = $("#dialNumeroElementos");

    var dialNumeroElementosGenerar = $("<input>").attr("type","text").attr("id","numeroElementos").addClass("dial").attr("value",4);

    dialNumeroElementos.append(dialNumeroElementosGenerar).append($("<div>Faces and places</div>").addClass("knobLabel"));

    dialNumeroElementosGenerar.knob({
        min: 1,
        max: 20,
        displayInput : false,
        angleOffset : -15,
        angleArc : 250,
        'change': function(value) {
            wof.changeNumberFacesPlaces(value);
        }
    });
};

};

wof.changeNumberBigIssues = function(valor) {
    valor = Math.floor(valor);
    wof.numberBigIssues = valor;
};

wof.changeNumberFacesPlaces = function(valor) {
    valor = Math.floor(valor);
    wof.numberFacesPlaces = valor;
};

wof.changeWorldChaosLevel = function(valor) {
    wof.worldChaosLevel = valor/100;
};

wof.generateWorld = function() {
    $("#worldDescription").empty();
};

wof.clearWorld = function() {

};
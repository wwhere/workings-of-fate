wof.World = function() {
    this.name = "";

    this.description = "";

    this.setting = "";

    this.scale = "";
    /*
    "local","small-scale","vast","epic","large-scale","world spanning","civilization level","galaxy level","dimension level","city","town","nation"
     */

    this.numberOfIssues = 2;

    this.bigIssues = ["",""];
    /*
     Current
      Impending

      issues for elements of the setting
     */

    this.faces = [];

    this.places = [];

    this.groups = [];

    this.numberOfAspects = 5;

    this.numberOfPhases = 3;

    this.skillCap = 4;

    this.skillPyramid = true;

    this.numberOfColumns = 0;

    this.refreshRate = 3;

    this.numberOfInitialStunts = 3;

    this.stressTracks = ["Physical", "Mental"];

    this.defaultNumberOfStressBoxes = 2;

    this.defaultConsequenfceSlots = [2,4,6];

    this.skils = [];

    this.stunts = [];

    this.extras = [];


};

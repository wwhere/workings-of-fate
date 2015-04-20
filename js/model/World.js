wof.World = function() {
    this.name = "";

    this.description = "";

    this.setting = "";

    this.scale = "";
    /*
    "local","small-scale","vast","epic","large-scale","world spanning","civilization level","galaxy level","dimension level","city","town","nation"
     */

    this.numberOfIssues = wof.numberBigIssues;

    this.bigIssues = "";
    /*
     Current
      Impending

      issues for elements of the setting
     */

    this.numberOfFacesAndPlaces = wof.numberFacesPlaces;

    this.facesAndPlaces = "";

    this.groups = [];

    this.numberOfAspects = 5;

    this.numberOfPhases = 3;

    this.skillCap = 4;

    this.skillPyramid = true;

    this.numberOfColumns = 0;

    this.refreshRate = 3;

    this.numberOfInitialStunts = 3;

    this.numberOfStressTracks = 2;

    this.stressTracks = "Physical Mental";

    this.defaultNumberOfStressBoxes = 2;

    this.defaultConsequenceSlots = "2,4,6";

    this.skills = [];

    this.stunts = [];

    this.extras = [];

    this.randomScale = function() {
        this.scale = jsrpg.random.randomArray(wof.data.worldScales);
    };

    this.randomBigIssues = function() {
        this.bigIssues = "";

        for (var i = 0; i < this.numberOfIssues; i++) {
            this.bigIssues += wof.worlds.randomBigIssue();
            if (i+1 < this.numberOfIssues)
                this.bigIssues += "\n";
        }
    };

};

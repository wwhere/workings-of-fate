wof.worlds = {};

wof.worlds.randomBigIssue = function() {
    //TODO

    var issue = "";

    issue = "(" + jsrpg.random.randomArray(["Current","Impending"]) + ") " + wof.aspects.random.any(wof.chaosLevel, wof.longFactor);

    return issue;
};
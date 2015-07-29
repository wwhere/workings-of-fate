jsrpg.random.verbTimes = {};
jsrpg.random.verbTimes.PRESENT = "PRESENT";  //I walk
jsrpg.random.verbTimes.PRESENT_CONTINUOUS = "PRESENT_CONTINUOUS";  //I am walking
jsrpg.random.verbTimes.PAST_SIMPLE = "PAST_SIMPLE";  //I walked
jsrpg.random.verbTimes.PAST_CONTINUOUS = "PAST_CONTINUOUS";  //I was walking
jsrpg.random.verbTimes.PRESENT_PERFECT = "PRESENT_PERFECT";  //I have walked
jsrpg.random.verbTimes.PRESENT_PERFECT_CONTINUOUS = "PRESENT_PERFECT_CONTINUOUS";  //I have been walking
jsrpg.random.verbTimes.PAST_PERFECT = "PAST_PERFECT";  //I had walked
jsrpg.random.verbTimes.PAST_PERFECT_CONTINUOUS = "PAST_PERFECT_CONTINUOUS";  //I had been walking
jsrpg.random.verbTimes.FUTURE = "FUTURE";  //I will walk
jsrpg.random.verbTimes.FUTURE_CONTINUOUS = "FUTURE_CONTINUOUS";  //I will be walking
jsrpg.random.verbTimes.FUTURE_PERFECT = "FUTURE_PERFECT";  //I will have walked
jsrpg.random.verbTimes.FUTURE_PERFECT_CONTINUOUS = "FUTURE_PERFECT_CONTINUOUS";  //I will have been walking
jsrpg.random.verbTimes.CONDITIONAL_PRESENT = "CONDITIONAL_PRESENT";  //I would walk
jsrpg.random.verbTimes.CONDITIONAL_PERFECT = "CONDITIONAL_PERFECT";  //I would have walked
jsrpg.random.verbTimes.CONDITIONAL_PRESENT_PROGRESSIVE = "CONDITIONAL_PRESENT_PROGRESSIVE";  //I would be walking
jsrpg.random.verbTimes.CONDITIONAL_PERFECT_PROGRESSIVE = "CONDITIONAL_PERFECT_PROGRESSIVE";  //I would have been walking
jsrpg.random.verbTimes.PRESENT_SUBJUNCTIVE = "PRESENT_SUBJUNCTIVE";  //I walk
jsrpg.random.verbTimes.IMPERATIVE = "IMPERATIVE";  //you walk
jsrpg.random.verbTimes.INFINITIVE = "INFINITIVE";  //you walk
jsrpg.random.verbTimes._arrayVerbTimes = [
    jsrpg.random.verbTimes.PRESENT,
    jsrpg.random.verbTimes.PRESENT_CONTINUOUS,
    jsrpg.random.verbTimes.PAST_SIMPLE,
    jsrpg.random.verbTimes.PAST_CONTINUOUS,
    jsrpg.random.verbTimes.PRESENT_PERFECT,
    jsrpg.random.verbTimes.PRESENT_PERFECT_CONTINUOUS,
    jsrpg.random.verbTimes.PAST_PERFECT,
    jsrpg.random.verbTimes.PAST_PERFECT_CONTINUOUS,
    jsrpg.random.verbTimes.FUTURE,
    jsrpg.random.verbTimes.FUTURE_CONTINUOUS,
    jsrpg.random.verbTimes.FUTURE_PERFECT,
    jsrpg.random.verbTimes.FUTURE_PERFECT_CONTINUOUS,
    jsrpg.random.verbTimes.CONDITIONAL_PRESENT,
    jsrpg.random.verbTimes.CONDITIONAL_PERFECT,
    jsrpg.random.verbTimes.CONDITIONAL_PRESENT_PROGRESSIVE,
    jsrpg.random.verbTimes.CONDITIONAL_PERFECT_PROGRESSIVE,
    jsrpg.random.verbTimes.PRESENT_SUBJUNCTIVE,
    jsrpg.random.verbTimes.IMPERATIVE
];

jsrpg.random.verbPersons = {};
jsrpg.random.verbPersons.FIRST = "FIRST_PERSON"; //I
jsrpg.random.verbPersons.SECOND = "SECOND_PERSON"; //you
jsrpg.random.verbPersons.THIRD = "THIRD_PERSON"; //he she it
jsrpg.random.verbPersons.FIRST_PLURAL = "FIRST_PERSON_PLURAL"; //we
jsrpg.random.verbPersons.SECOND_PLURAL = "SECOND_PERSON_PLURAL"; //you
jsrpg.random.verbPersons.THIRD_PLURAL = "THIRD_PERSON_PLURAL"; //they
jsrpg.random.verbPersons._arrayVerbPersons = [
    jsrpg.random.verbPersons.FIRST,
    jsrpg.random.verbPersons.SECOND,
    jsrpg.random.verbPersons.THIRD,
    jsrpg.random.verbPersons.FIRST_PLURAL,
    jsrpg.random.verbPersons.SECOND_PLURAL,
    jsrpg.random.verbPersons.THIRD_PLURAL
];

/**
 *
 * @param {string} infinitive
 * @param {string}  ingForm
 * @param {string} participle
 * @param {string} [simplePast=participle]
 */
jsrpg.random.VerbClass = function(infinitive, ingForm, participle, simplePast) {
    /**
     *
     * @type {string}
     */
    this.infinitive = infinitive;

    /**
     *
     * @type {string}
     */
    this.ingForm = ingForm;

    /**
     *
     * @type {string}
     */
    this.participle = participle;

    /**
     *
     * @type {*|string}
     */
    this.simplePast = simplePast || participle;

    /**
     *
     * @returns {string}
     */
    this.verb = function () {
        return this.infinitive;
    };
};

jsrpg.random.VerbClass.prototype = {
    constructor : jsrpg.random.VerbClass,

    /**
     *
     * @param {string} time From jsrpg.random.verbTimes
     * @param {string} person From jsrpg.random.verbPersons
     * @returns {string} Only the verb form, without the pronoun
     */
    conjugate : function(time, person) {
        var conjugated = "";
        var t = jsrpg.random.verbTimes;
        var p = jsrpg.random.verbPersons;

        switch (time) {
            case t.PRESENT:
                switch (person) {
                    case p.THIRD:
                        if (this.infinitive.charAt(this.infinitive.length-1) == "s") {
                            conjugated = this.infinitive + "es";
                        } else {
                            conjugated = this.infinitive + "s";
                        }
                        break;
                    default:
                        conjugated = this.infinitive;
                }
                break;
            case t.PRESENT_CONTINUOUS:
                switch (person) {
                    case p.FIRST:
                        conjugated = "am " + this.ingForm;
                        break;
                    case p.THIRD:
                        conjugated = "is " + this.ingForm;
                        break;
                    default :
                        conjugated = "are " + this.ingForm;
                }
                break;
            case t.PAST_SIMPLE:
                conjugated = this.simplePast;
                break;
            case t.PAST_CONTINUOUS:
                switch (person) {
                    case p.FIRST:
                    case p.THIRD:
                        conjugated = "was " + this.ingForm;
                        break;
                    default:
                        conjugated = "were " + this.ingForm;
                }
                break;
            case t.PRESENT_PERFECT:
                switch (person) {
                    case p.THIRD:
                        conjugated = "has " + this.participle;
                        break;
                    default:
                        conjugated = "have " + this.participle;
                }
                break;
            case t.PRESENT_PERFECT_CONTINUOUS:
                switch (person) {
                    case p.THIRD:
                        conjugated = "has been " + this.ingForm;
                        break;
                    default:
                        conjugated = "have been " + this.ingForm;
                }
                break;
            case t.PAST_PERFECT:
                conjugated = "had " + this.participle;
                break;
            case t.PAST_PERFECT_CONTINUOUS:
                conjugated = "had been " + this.ingForm;
                break;
            case t.FUTURE:
                conjugated = "will " + this.infinitive;
                break;
            case t.FUTURE_CONTINUOUS:
                conjugated = "will be " + this.ingForm;
                break;
            case t.FUTURE_PERFECT:
                conjugated = "will have " + this.participle;
                break;
            case t.FUTURE_PERFECT_CONTINUOUS:
                conjugated = "will have been " + this.ingForm;
                break;
            case t.CONDITIONAL_PRESENT:
                conjugated = "would " + this.infinitive;
                break;
            case t.CONDITIONAL_PERFECT:
                conjugated = "would have " + this.participle;
                break;
            case t.CONDITIONAL_PRESENT_PROGRESSIVE:
                conjugated = "would be " + this.ingForm;
                break;
            case t.CONDITIONAL_PERFECT_PROGRESSIVE:
                conjugated = "would have been " + this.ingForm;
                break;
            case t.PRESENT_SUBJUNCTIVE:
                conjugated = this.infinitive;
                break;
            case t.IMPERATIVE:
                conjugated = this.infinitive;
                break;
            case t.INFINITIVE:
                conjugated = "to " + this.infinitive;
                break;
            default:
                conjugated = this.infinitive;
        }
        return conjugated;
    },

    /**
     *
     * @param {string} time From jsrpg.random.verbTimes
     * @param {string} person From jsrpg.random.verbPersons
     * @returns {string} Only the verb form, without the pronoun
     */
    conjugateNegation : function(time, person) {
        var conjugated = "";
        var t = jsrpg.random.verbTimes;
        var p = jsrpg.random.verbPersons;

        switch (time) {
            case t.PRESENT:
                switch (person) {
                    case p.THIRD:
                        conjugated = "doesn't " + this.infinitive;
                        break;
                    default:
                        conjugated = "don't " + this.infinitive;
                }
                break;
            case t.PRESENT_CONTINUOUS:
                switch (person) {
                    case p.FIRST:
                        conjugated = "am not " + this.ingForm;
                        break;
                    case p.THIRD:
                        conjugated = "isn't " + this.ingForm;
                        break;
                    default :
                        conjugated = "aren't " + this.ingForm;
                }
                break;
            case t.PAST_SIMPLE:
                conjugated = "didn't " + this.infinitive;
                break;
            case t.PAST_CONTINUOUS:
                switch (person) {
                    case p.FIRST:
                    case p.THIRD:
                        conjugated = "wasn't " + this.ingForm;
                        break;
                    default:
                        conjugated = "weren't " + this.ingForm;
                }
                break;
            case t.PRESENT_PERFECT:
                switch (person) {
                    case p.THIRD:
                        conjugated = "hasn't " + this.participle;
                        break;
                    default:
                        conjugated = "haven't " + this.participle;
                }
                break;
            case t.PRESENT_PERFECT_CONTINUOUS:
                switch (person) {
                    case p.THIRD:
                        conjugated = "hasn't been " + this.ingForm;
                        break;
                    default:
                        conjugated = "haven't been " + this.ingForm;
                }
                break;
            case t.PAST_PERFECT:
                conjugated = "didn't have " + this.participle;
                break;
            case t.PAST_PERFECT_CONTINUOUS:
                conjugated = "didn't have been " + this.ingForm;
                break;
            case t.FUTURE:
                conjugated = "won't " + this.infinitive;
                break;
            case t.FUTURE_CONTINUOUS:
                conjugated = "won't be " + this.ingForm;
                break;
            case t.FUTURE_PERFECT:
                conjugated = "won't have " + this.participle;
                break;
            case t.FUTURE_PERFECT_CONTINUOUS:
                conjugated = "won't have been " + this.ingForm;
                break;
            case t.CONDITIONAL_PRESENT:
                conjugated = "wouldn't " + this.infinitive;
                break;
            case t.CONDITIONAL_PERFECT:
                conjugated = "wouldn't have " + this.participle;
                break;
            case t.CONDITIONAL_PRESENT_PROGRESSIVE:
                conjugated = "wouldn't be " + this.ingForm;
                break;
            case t.CONDITIONAL_PERFECT_PROGRESSIVE:
                conjugated = "wouldn't have been " + this.ingForm;
                break;
            case t.PRESENT_SUBJUNCTIVE:
                conjugated = "not " + this.infinitive;
                break;
            case t.IMPERATIVE:
                conjugated = "don't " + this.infinitive;
                break;
            case t.INFINITIVE:
                conjugated = "not to " + this.infinitive;
                break;

            default:
                conjugated = this.infinitive;
        }
        return conjugated;
    }
};

/**
 *
 * @type {jsrpg.random.VerbClass[]}
 * @private
 */
jsrpg.random._arrayVerbsAny = [
    new jsrpg.random.VerbClass("abide","abiding","abided"),
    new jsrpg.random.VerbClass("accelerate","accelerating","accelerated"),
    new jsrpg.random.VerbClass("accept","accepting","accepted"),
    new jsrpg.random.VerbClass("accomplish","accomplishing","accomplished"),
    new jsrpg.random.VerbClass("achieve","achieving","achieved"),
    new jsrpg.random.VerbClass("acquire","acquiring","acquired"),
    new jsrpg.random.VerbClass("act","acting","acted"),
    new jsrpg.random.VerbClass("activate","activating","activated"),
    new jsrpg.random.VerbClass("adapt","adapting","adapted"),
    new jsrpg.random.VerbClass("add","adding","added"),
    new jsrpg.random.VerbClass("address","addressing","addressed"),
    new jsrpg.random.VerbClass("administer","administering","administered"),
    new jsrpg.random.VerbClass("admire","admiring","admired"),
    new jsrpg.random.VerbClass("admit","admitting","admitted"),
    new jsrpg.random.VerbClass("adopt","adopting","adopted"),
    new jsrpg.random.VerbClass("advise","advising","advised"),
    new jsrpg.random.VerbClass("afford","affording","afforded"),
    new jsrpg.random.VerbClass("agree","agreeing","agreed"),
    new jsrpg.random.VerbClass("alert","alerting","alerted"),
    new jsrpg.random.VerbClass("alight","alighting","alighted"),
    new jsrpg.random.VerbClass("allow","allowing","allowed"),
    new jsrpg.random.VerbClass("alter","altering","altered"),
    new jsrpg.random.VerbClass("amuse","amusing","amused"),
    new jsrpg.random.VerbClass("analyze","analyzing","analyzed"),
    new jsrpg.random.VerbClass("announce","announcing","announced"),
    new jsrpg.random.VerbClass("annoy","annoying","annoyed"),
    new jsrpg.random.VerbClass("answer","answering","answered"),
    new jsrpg.random.VerbClass("anticipate","anticipating","anticipated"),
    new jsrpg.random.VerbClass("apologize","apologizing","apologized"),
    new jsrpg.random.VerbClass("appear","appearing","appeared"),
    new jsrpg.random.VerbClass("applaud","applauding","applauded"),
    new jsrpg.random.VerbClass("apply","applying","applied"),
    new jsrpg.random.VerbClass("appoint","appointing","appointed"),
    new jsrpg.random.VerbClass("appraise","appraising","appraised"),
    new jsrpg.random.VerbClass("appreciate","appreciating","appreciated"),
    new jsrpg.random.VerbClass("approve","approving","approved"),
    new jsrpg.random.VerbClass("arbitrate","arbitrating","arbitrated"),
    new jsrpg.random.VerbClass("argue","arguing","argued"),
    new jsrpg.random.VerbClass("arise","arising","arisen","arose"),
    new jsrpg.random.VerbClass("arrange","arranging","arranged"),
    new jsrpg.random.VerbClass("arrest","arresting","arrested"),
    new jsrpg.random.VerbClass("arrive","arriving","arrived"),
    new jsrpg.random.VerbClass("ascertain","ascertaining","ascertained"),
    new jsrpg.random.VerbClass("ask","asking","asked"),
    new jsrpg.random.VerbClass("assemble","assembling","assembled"),
    new jsrpg.random.VerbClass("assess","assessing","assessed"),
    new jsrpg.random.VerbClass("assist","assisting","assisted"),
    new jsrpg.random.VerbClass("assure","assuring","assured"),
    new jsrpg.random.VerbClass("attach","attaching","attached"),
    new jsrpg.random.VerbClass("attack","attacking","attacked"),
    new jsrpg.random.VerbClass("attain","attaining","attained"),
    new jsrpg.random.VerbClass("attempt","attempting","attempted"),
    new jsrpg.random.VerbClass("attend","attending","attended"),
    new jsrpg.random.VerbClass("attract","attracting","attracted"),
    new jsrpg.random.VerbClass("audit","auditing","audited"),
    new jsrpg.random.VerbClass("avoid","avoiding","avoided"),
    new jsrpg.random.VerbClass("awake","awaking","awoken","awoke"),
    new jsrpg.random.VerbClass("back","backing","backed"),
    new jsrpg.random.VerbClass("bake","baking","baked"),
    new jsrpg.random.VerbClass("balance","balancing","balanced"),
    new jsrpg.random.VerbClass("ban","banning","banned"),
    new jsrpg.random.VerbClass("bang","banging","banged"),
    new jsrpg.random.VerbClass("bare","baring","bared"),
    new jsrpg.random.VerbClass("bat","batting","batted"),
    new jsrpg.random.VerbClass("bathe","bathing","bathed"),
    new jsrpg.random.VerbClass("battle","battling","battled"),
    new jsrpg.random.VerbClass("be","being","been","was"),  //TO BE
    new jsrpg.random.VerbClass("beam","beaming","beamed"),
    new jsrpg.random.VerbClass("bear","bearing","borne","bore"),
    new jsrpg.random.VerbClass("beat","beating","beaten","beat"),
    new jsrpg.random.VerbClass("become","becoming","become","became"),
    new jsrpg.random.VerbClass("beg","begging","begged"),
    new jsrpg.random.VerbClass("begin","beginning","begun","began"),
    new jsrpg.random.VerbClass("behave","behaving","behaved"),
    new jsrpg.random.VerbClass("behold","beholding","beheld"),
    new jsrpg.random.VerbClass("belong","belonging","belonged"),
    new jsrpg.random.VerbClass("bend","bending","bent"),
    new jsrpg.random.VerbClass("beset","besetting","beset"),
    new jsrpg.random.VerbClass("bet","betting","bet"),
    new jsrpg.random.VerbClass("bid","bidding","bidden","bade"),
    new jsrpg.random.VerbClass("bind","binding","bound"),
    new jsrpg.random.VerbClass("bite","biting","bitten","bit"),
    new jsrpg.random.VerbClass("bleach","bleaching","bleached"),
    new jsrpg.random.VerbClass("bleed","bleeding","bled"),
    new jsrpg.random.VerbClass("bless","blessing","blessed"),
    new jsrpg.random.VerbClass("blind","blinding","blinded"),
    new jsrpg.random.VerbClass("blink","blinking","blinked"),
    new jsrpg.random.VerbClass("blot","blotting","blotted"),
    new jsrpg.random.VerbClass("blow","blowing","blown","blew"),
    new jsrpg.random.VerbClass("blush","blushing","blushed"),
    new jsrpg.random.VerbClass("boast","boasting","boasted"),
    new jsrpg.random.VerbClass("boil","boiling","boiled"),
    new jsrpg.random.VerbClass("bolt","bolting","bolted"),
    new jsrpg.random.VerbClass("bomb","bombing","bombed"),
    new jsrpg.random.VerbClass("book","booking","booked"),
    new jsrpg.random.VerbClass("bore","boring","bored"),
    new jsrpg.random.VerbClass("borrow","borrowing","borrowed"),
    new jsrpg.random.VerbClass("bounce","bouncing","bounced"),
    new jsrpg.random.VerbClass("bow","bowing","bowed"),
    new jsrpg.random.VerbClass("box","boxing","boxed"),
    new jsrpg.random.VerbClass("brake","braking","braked"),
    new jsrpg.random.VerbClass("branch","branching","branched"),
    new jsrpg.random.VerbClass("break","breaking","broken","broke"),
    new jsrpg.random.VerbClass("breathe","breathing","breathed"),
    new jsrpg.random.VerbClass("breed","breeding","bred"),
    new jsrpg.random.VerbClass("brief","briefing","briefed"),
    new jsrpg.random.VerbClass("bring","bringing","brought"),
    new jsrpg.random.VerbClass("broadcast","broadcasting","broadcast"),
    new jsrpg.random.VerbClass("bruise","bruising","bruised"),
    new jsrpg.random.VerbClass("brush","brushing","brushed"),
    new jsrpg.random.VerbClass("bubble","bubbling","bubbled"),
    new jsrpg.random.VerbClass("budget","budgeting","budgeted"),
    new jsrpg.random.VerbClass("build","building","built"),
    new jsrpg.random.VerbClass("bump","bumping","bumped"),
    new jsrpg.random.VerbClass("burn","burning","burnt","burnt"),
    new jsrpg.random.VerbClass("burst","bursting","burst"),
    new jsrpg.random.VerbClass("bury","burying","buried"),
    new jsrpg.random.VerbClass("bust","busting","bust"),
    new jsrpg.random.VerbClass("buy","buying","bought"),
    new jsrpg.random.VerbClass("buzz","buzzing","buzzed"),
    new jsrpg.random.VerbClass("calculate","calculating","calculated"),
    new jsrpg.random.VerbClass("call","calling","called"),
    new jsrpg.random.VerbClass("camp","camping","camped"),
    new jsrpg.random.VerbClass("care","caring","cared"),
    new jsrpg.random.VerbClass("carry","carrying","carried"),
    new jsrpg.random.VerbClass("carve","carving","carved"),
    new jsrpg.random.VerbClass("cast","casting","cast"),
    new jsrpg.random.VerbClass("catalog","cataloging","cataloged"),
    new jsrpg.random.VerbClass("catch","catching","caught"),
    new jsrpg.random.VerbClass("cause","causing","caused"),
    new jsrpg.random.VerbClass("challenge","challenging","challenged"),
    new jsrpg.random.VerbClass("change","changing","changed"),
    new jsrpg.random.VerbClass("charge","charging","charged"),
    new jsrpg.random.VerbClass("chart","charting","charted"),
    new jsrpg.random.VerbClass("chase","chasing","chased"),
    new jsrpg.random.VerbClass("cheat","cheating","cheated"),
    new jsrpg.random.VerbClass("check","checking","checked"),
    new jsrpg.random.VerbClass("cheer","cheering","cheered"),
    new jsrpg.random.VerbClass("chew","chewing","chewed"),
    new jsrpg.random.VerbClass("choke","choking","choked"),
    new jsrpg.random.VerbClass("choose","choosing","chosen","chose"),
    new jsrpg.random.VerbClass("chop","chopping","chopped"),
    new jsrpg.random.VerbClass("claim","claiming","claimed"),
    new jsrpg.random.VerbClass("clap","clapping","clapped"),
    new jsrpg.random.VerbClass("clarify","clarifying","clarified"),
    new jsrpg.random.VerbClass("classify","classifying","classified"),
    new jsrpg.random.VerbClass("clean","cleaning","cleaned"),
    new jsrpg.random.VerbClass("clear","clearing","cleared"),
    new jsrpg.random.VerbClass("cling","clinging","clung"),
    new jsrpg.random.VerbClass("clip","clipping","clipped"),
    new jsrpg.random.VerbClass("close","closing","closed"),
    new jsrpg.random.VerbClass("clothe","clothing","clad"),
    new jsrpg.random.VerbClass("coach","coaching","coached"),
    new jsrpg.random.VerbClass("coil","coiling","coiled"),
    new jsrpg.random.VerbClass("collect","collecting","collected"),
    new jsrpg.random.VerbClass("color","coloring","colored"),
    new jsrpg.random.VerbClass("comb","combing","combed"),
    new jsrpg.random.VerbClass("come","coming","come","came"),
    new jsrpg.random.VerbClass("command","commanding","commanded"),
    new jsrpg.random.VerbClass("communicate","communicating","communicated"),
    new jsrpg.random.VerbClass("compare","comparing","compared"),
    new jsrpg.random.VerbClass("compete","competing","competed"),
    new jsrpg.random.VerbClass("compile","compiling","compiled"),
    new jsrpg.random.VerbClass("complain","complaining","complained"),
    new jsrpg.random.VerbClass("complete","completing","completed"),
    new jsrpg.random.VerbClass("compose","composing","composed"),
    new jsrpg.random.VerbClass("compute","computing","computed"),
    new jsrpg.random.VerbClass("conceive","conceiving","conceived"),
    new jsrpg.random.VerbClass("concentrate","concentrating","concentrated"),
    new jsrpg.random.VerbClass("conceptualize","conceptualizing","conceptualized"),
    new jsrpg.random.VerbClass("concern","concerning","concerned"),
    new jsrpg.random.VerbClass("conclude","concluding","concluded"),
    new jsrpg.random.VerbClass("conduct","conducting","conducted"),
    new jsrpg.random.VerbClass("confess","confessing","confessed"),
    new jsrpg.random.VerbClass("confront","confronting","confronted"),
    new jsrpg.random.VerbClass("confuse","confusing","confused"),
    new jsrpg.random.VerbClass("connect","connecting","connected"),
    new jsrpg.random.VerbClass("conserve","conserving","conserved"),
    new jsrpg.random.VerbClass("consider","considering","considered"),
    new jsrpg.random.VerbClass("consist","consisting","consisted"),
    new jsrpg.random.VerbClass("consolidate","consolidating","consolidated"),
    new jsrpg.random.VerbClass("construct","constructing","constructed"),
    new jsrpg.random.VerbClass("consult","consulting","consulted"),
    new jsrpg.random.VerbClass("contain","containing","contained"),
    new jsrpg.random.VerbClass("continue","continuing","continued"),
    new jsrpg.random.VerbClass("contract","contracting","contracted"),
    new jsrpg.random.VerbClass("control","controlling","controlled"),
    new jsrpg.random.VerbClass("convert","converting","converted"),
    new jsrpg.random.VerbClass("coordinate","coordinating","coordinated"),
    new jsrpg.random.VerbClass("copy","copying","copied"),
    new jsrpg.random.VerbClass("correct","correcting","corrected"),
    new jsrpg.random.VerbClass("correlate","correlating","correlated"),
    new jsrpg.random.VerbClass("cost","costing","cost"),
    new jsrpg.random.VerbClass("cough","coughing","coughed"),
    new jsrpg.random.VerbClass("counsel","counseling","counseled"),
    new jsrpg.random.VerbClass("count","counting","counted"),
    new jsrpg.random.VerbClass("cover","covering","covered"),
    new jsrpg.random.VerbClass("crack","cracking","cracked"),
    new jsrpg.random.VerbClass("crash","crashing","crashed"),
    new jsrpg.random.VerbClass("crawl","crawling","crawled"),
    new jsrpg.random.VerbClass("create","creating","created"),
    new jsrpg.random.VerbClass("creep","creeping","crept"),
    new jsrpg.random.VerbClass("critique","critiquing","critiqued"),
    new jsrpg.random.VerbClass("cross","crossing","crossed"),
    new jsrpg.random.VerbClass("crush","crushing","crushed"),
    new jsrpg.random.VerbClass("cry","crying","cried"),
    new jsrpg.random.VerbClass("cure","curing","cured"),
    new jsrpg.random.VerbClass("curl","curling","curled"),
    new jsrpg.random.VerbClass("curve","curving","curved"),
    new jsrpg.random.VerbClass("cut","cutting","cut"),
    new jsrpg.random.VerbClass("cycle","cycling","cycled"),
    new jsrpg.random.VerbClass("dam","damming","dammed"),
    new jsrpg.random.VerbClass("damage","damaging","damaged"),
    new jsrpg.random.VerbClass("dance","dancing","danced"),
    new jsrpg.random.VerbClass("dare","daring","dared"),
    new jsrpg.random.VerbClass("deal","dealing","dealt"),
    new jsrpg.random.VerbClass("decay","decaying","decayed"),
    new jsrpg.random.VerbClass("deceive","deceiving","deceived"),
    new jsrpg.random.VerbClass("decide","deciding","decided"),
    new jsrpg.random.VerbClass("decorate","decorating","decorated"),
    new jsrpg.random.VerbClass("define","defining","defined"),
    new jsrpg.random.VerbClass("delay","delaying","delayed"),
    new jsrpg.random.VerbClass("delegate","delegating","delegated"),
    new jsrpg.random.VerbClass("delight","delighting","delighted"),
    new jsrpg.random.VerbClass("deliver","delivering","delivered"),
    new jsrpg.random.VerbClass("demonstrate","demonstrating","demonstrated"),
    new jsrpg.random.VerbClass("depend","depending","depended"),
    new jsrpg.random.VerbClass("describe","describing","described"),
    new jsrpg.random.VerbClass("desert","deserting","deserted"),
    new jsrpg.random.VerbClass("deserve","deserving","deserved"),
    new jsrpg.random.VerbClass("design","designing","designed"),
    new jsrpg.random.VerbClass("destroy","destroying","destroyed"),
    new jsrpg.random.VerbClass("detail","detailing","detailed"),
    new jsrpg.random.VerbClass("detect","detecting","detected"),
    new jsrpg.random.VerbClass("determine","determining","determined"),
    new jsrpg.random.VerbClass("develop","developing","developed"),
    new jsrpg.random.VerbClass("devise","devising","devised"),
    new jsrpg.random.VerbClass("diagnose","diagnosing","diagnosed"),
    new jsrpg.random.VerbClass("dig","digging","dug"),
    new jsrpg.random.VerbClass("direct","directing","directed"),
    new jsrpg.random.VerbClass("disagree","disagreeing","disagreed"),
    new jsrpg.random.VerbClass("disappear","disappearing","disappeared"),
    new jsrpg.random.VerbClass("disapprove","disapproving","disapproved"),
    new jsrpg.random.VerbClass("disarm","disarming","disarmed"),
    new jsrpg.random.VerbClass("discover","discovering","discovered"),
    new jsrpg.random.VerbClass("dislike","disliking","disliked"),
    new jsrpg.random.VerbClass("dispense","dispensing","dispensed"),
    new jsrpg.random.VerbClass("display","displaying","displayed"),
    new jsrpg.random.VerbClass("disprove","disproving","disproved"),
    new jsrpg.random.VerbClass("dissect","dissecting","dissected"),
    new jsrpg.random.VerbClass("distribute","distributing","distributed"),
    new jsrpg.random.VerbClass("dive","diving","dived"),
    new jsrpg.random.VerbClass("divert","diverting","diverted"),
    new jsrpg.random.VerbClass("divide","dividing","divided"),
    new jsrpg.random.VerbClass("do","doing","done","did"),
    new jsrpg.random.VerbClass("double","doubling","doubled"),
    new jsrpg.random.VerbClass("doubt","doubting","doubted"),
    new jsrpg.random.VerbClass("draft","drafting","drafted"),
    new jsrpg.random.VerbClass("drag","dragging","dragged"),
    new jsrpg.random.VerbClass("drain","draining","drained"),
    new jsrpg.random.VerbClass("dramatize","dramatizing","dramatized"),
    new jsrpg.random.VerbClass("draw","drawing","drawn","drew"),
    new jsrpg.random.VerbClass("dream","dreaming","dreamt"),
    new jsrpg.random.VerbClass("dress","dressing","dressed"),
    new jsrpg.random.VerbClass("drink","drinking","drunk","drank"),
    new jsrpg.random.VerbClass("drip","dripping","dripped"),
    new jsrpg.random.VerbClass("drive","driving","driven","drove"),
    new jsrpg.random.VerbClass("drop","dropping","dropped"),
    new jsrpg.random.VerbClass("drown","drowning","drowned"),
    new jsrpg.random.VerbClass("drum","drumming","drummed"),
    new jsrpg.random.VerbClass("dry","drying","dried"),
    new jsrpg.random.VerbClass("dust","dusting","dusted"),
    new jsrpg.random.VerbClass("dwell","dwelling","dwelt"),
    new jsrpg.random.VerbClass("earn","earning","earned"),
    new jsrpg.random.VerbClass("eat","eating","eaten","ate"),
    new jsrpg.random.VerbClass("edit","editing","edited"),
    new jsrpg.random.VerbClass("educate","educating","educated"),
    new jsrpg.random.VerbClass("eliminate","eliminating","eliminated"),
    new jsrpg.random.VerbClass("embarrass","embarrassing","embarrassed"),
    new jsrpg.random.VerbClass("employ","employing","employed"),
    new jsrpg.random.VerbClass("empty","emptying","emptied"),
    new jsrpg.random.VerbClass("enact","enacting","enacted"),
    new jsrpg.random.VerbClass("encourage","encouraging","encouraged"),
    new jsrpg.random.VerbClass("end","ending","ended"),
    new jsrpg.random.VerbClass("endure","enduring","endured"),
    new jsrpg.random.VerbClass("enforce","enforcing","enforced"),
    new jsrpg.random.VerbClass("engineer","engineering","engineered"),
    new jsrpg.random.VerbClass("enhance","enhancing","enhanced"),
    new jsrpg.random.VerbClass("enjoy","enjoying","enjoyed"),
    new jsrpg.random.VerbClass("enlist","enlisting","enlisted"),
    new jsrpg.random.VerbClass("ensure","ensuring","ensured"),
    new jsrpg.random.VerbClass("enter","entering","entered"),
    new jsrpg.random.VerbClass("entertain","entertaining","entertained"),
    new jsrpg.random.VerbClass("escape","escaping","escaped"),
    new jsrpg.random.VerbClass("establish","establishing","established"),
    new jsrpg.random.VerbClass("estimate","estimating","estimated"),
    new jsrpg.random.VerbClass("evaluate","evaluating","evaluated"),
    new jsrpg.random.VerbClass("examine","examining","examined"),
    new jsrpg.random.VerbClass("exceed","exceeding","exceeded"),
    new jsrpg.random.VerbClass("excite","exciting","excited"),
    new jsrpg.random.VerbClass("excuse","excusing","excused"),
    new jsrpg.random.VerbClass("execute","executing","executed"),
    new jsrpg.random.VerbClass("exercise","exercising","exercised"),
    new jsrpg.random.VerbClass("exhibit","exhibiting","exhibited"),
    new jsrpg.random.VerbClass("exist","existing","existed"),
    new jsrpg.random.VerbClass("expand","expanding","expanded"),
    new jsrpg.random.VerbClass("expect","expecting","expected"),
    new jsrpg.random.VerbClass("expedite","expediting","expedited"),
    new jsrpg.random.VerbClass("experiment","experimenting","experimented"),
    new jsrpg.random.VerbClass("explain","explaining","explained"),
    new jsrpg.random.VerbClass("explode","exploding","exploded"),
    new jsrpg.random.VerbClass("express","expressing","expressed"),
    new jsrpg.random.VerbClass("extend","extending","extended"),
    new jsrpg.random.VerbClass("extract","extracting","extracted"),
    new jsrpg.random.VerbClass("face","facing","faced"),
    new jsrpg.random.VerbClass("facilitate","facilitating","facilitated"),
    new jsrpg.random.VerbClass("fade","fading","faded"),
    new jsrpg.random.VerbClass("fail","failing","failed"),
    new jsrpg.random.VerbClass("fancy","fancying","fancyed"),
    new jsrpg.random.VerbClass("fasten","fastening","fastened"),
    new jsrpg.random.VerbClass("fax","faxing","faxed"),
    new jsrpg.random.VerbClass("fear","fearing","feared"),
    new jsrpg.random.VerbClass("feed","feeding","fed"),
    new jsrpg.random.VerbClass("feel","feeling","felt"),
    new jsrpg.random.VerbClass("fence","fencing","fenced"),
    new jsrpg.random.VerbClass("fetch","fetching","fetched"),
    new jsrpg.random.VerbClass("fight","fighting","fought"),
    new jsrpg.random.VerbClass("file","filing","filed"),
    new jsrpg.random.VerbClass("fill","filling","filled"),
    new jsrpg.random.VerbClass("film","filming","filmed"),
    new jsrpg.random.VerbClass("finalize","finalizing","finalized"),
    new jsrpg.random.VerbClass("finance","financing","financed"),
    new jsrpg.random.VerbClass("find","finding","found"),
    new jsrpg.random.VerbClass("fire","firing","fired"),
    new jsrpg.random.VerbClass("fit","fitting","fitted"),
    new jsrpg.random.VerbClass("fix","fixing","fixed"),
    new jsrpg.random.VerbClass("flap","flapping","flapped"),
    new jsrpg.random.VerbClass("flash","flashing","flashed"),
    new jsrpg.random.VerbClass("flee","fleeing","fled"),
    new jsrpg.random.VerbClass("fling","flinging","flung"),
    new jsrpg.random.VerbClass("float","floating","floated"),
    new jsrpg.random.VerbClass("flood","flooding","flooded"),
    new jsrpg.random.VerbClass("flow","flowing","flowed"),
    new jsrpg.random.VerbClass("flower","flowering","flowered"),
    new jsrpg.random.VerbClass("fly","flying","flown","flew"),
    new jsrpg.random.VerbClass("fold","folding","folded"),
    new jsrpg.random.VerbClass("follow","following","followed"),
    new jsrpg.random.VerbClass("fool","fooling","fooled"),
    new jsrpg.random.VerbClass("forbid","forbidding","forbidden","forbade"),
    new jsrpg.random.VerbClass("force","forcing","forced"),
    new jsrpg.random.VerbClass("forecast","forecasting","forecast"),
    new jsrpg.random.VerbClass("forego","foregoing","foregone","forewent"),
    new jsrpg.random.VerbClass("foresee","foreseeing","foreseen","foresaw"),
    new jsrpg.random.VerbClass("foretell","foretelling","foretold"),
    new jsrpg.random.VerbClass("forget","forgetting","forgotten","forgot"),
    new jsrpg.random.VerbClass("forgive","forgiving","forgiven","forgave"),
    new jsrpg.random.VerbClass("form","forming","formed"),
    new jsrpg.random.VerbClass("formulate","formulating","formulated"),
    new jsrpg.random.VerbClass("forsake","forsaking","forsaken","forsook"),
    new jsrpg.random.VerbClass("frame","framing","framed"),
    new jsrpg.random.VerbClass("freeze","freezing","frozen","froze"),
    new jsrpg.random.VerbClass("frighten","frightening","frightened"),
    new jsrpg.random.VerbClass("fry","frying","fried"),
    new jsrpg.random.VerbClass("gather","gathering","gathered"),
    new jsrpg.random.VerbClass("gaze","gazing","gazed"),
    new jsrpg.random.VerbClass("generate","generating","generated"),
    new jsrpg.random.VerbClass("get","getting","got"),
    new jsrpg.random.VerbClass("give","giving","given","gave"),
    new jsrpg.random.VerbClass("glow","glowing","glowed"),
    new jsrpg.random.VerbClass("glue","gluing","glued"),
    new jsrpg.random.VerbClass("go","going","gone","went"),
    new jsrpg.random.VerbClass("govern","governing","governed"),
    new jsrpg.random.VerbClass("grab","grabbing","grabbed"),
    new jsrpg.random.VerbClass("graduate","graduating","graduated"),
    new jsrpg.random.VerbClass("grate","grating","grated"),
    new jsrpg.random.VerbClass("grease","greasing","greased"),
    new jsrpg.random.VerbClass("greet","greeting","greeted"),
    new jsrpg.random.VerbClass("grin","grinning","grinned"),
    new jsrpg.random.VerbClass("grind","grinding","ground"),
    new jsrpg.random.VerbClass("grip","griping","griped"),
    new jsrpg.random.VerbClass("groan","groaning","groaned"),
    new jsrpg.random.VerbClass("grow","growing","grown","grew"),
    new jsrpg.random.VerbClass("guarantee","guaranteeing","guaranteed"),
    new jsrpg.random.VerbClass("guard","guarding","guarded"),
    new jsrpg.random.VerbClass("guess","guessing","guessed"),
    new jsrpg.random.VerbClass("guide","guiding","guided"),
    new jsrpg.random.VerbClass("hammer","hammering","hammered"),
    new jsrpg.random.VerbClass("hand","handing","handed"),
    new jsrpg.random.VerbClass("handle","handling","handled"),
    new jsrpg.random.VerbClass("handwrite","handwriting","handwritten","handwrote"),
    new jsrpg.random.VerbClass("hang","hanging","hanged"),
    new jsrpg.random.VerbClass("happen","happening","happened"),
    new jsrpg.random.VerbClass("harass","harassing","harassed"),
    new jsrpg.random.VerbClass("harm","harming","harmed"),
    new jsrpg.random.VerbClass("hate","hating","hated"),
    new jsrpg.random.VerbClass("haunt","haunting","haunted"),
    new jsrpg.random.VerbClass("head","heading","headed"),
    new jsrpg.random.VerbClass("heal","healing","healed"),
    new jsrpg.random.VerbClass("heap","heaping","heaped"),
    new jsrpg.random.VerbClass("hear","hearing","heard"),
    new jsrpg.random.VerbClass("heat","heating","heated"),
    new jsrpg.random.VerbClass("help","helping","helped"),
    new jsrpg.random.VerbClass("hide","hiding","hided"),
    new jsrpg.random.VerbClass("hit","hitting","hit"),
    new jsrpg.random.VerbClass("hold","holding","held"),
    new jsrpg.random.VerbClass("hook","hooking","hooked"),
    new jsrpg.random.VerbClass("hop","hoping","hoped"),
    new jsrpg.random.VerbClass("hope","hoping","hoped"),
    new jsrpg.random.VerbClass("hover","hovering","hovered"),
    new jsrpg.random.VerbClass("hug","hugging","hugged"),
    new jsrpg.random.VerbClass("hum","humming","hummed"),
    new jsrpg.random.VerbClass("hunt","hunting","hunted"),
    new jsrpg.random.VerbClass("hurry","hurrying","hurried"),
    new jsrpg.random.VerbClass("hurt","hurting","hurt"),
    new jsrpg.random.VerbClass("hypothesize","hypothesizing","hypothesized"),
    new jsrpg.random.VerbClass("identify","identifying","identified"),
    new jsrpg.random.VerbClass("ignore","ignoring","ignored"),
    new jsrpg.random.VerbClass("illustrate","illustrating","illustrated"),
    new jsrpg.random.VerbClass("imagine","imagining","imagined"),
    new jsrpg.random.VerbClass("implement","implementing","implemented"),
    new jsrpg.random.VerbClass("impress","impressing","impressed"),
    new jsrpg.random.VerbClass("improve","improving","improved"),
    new jsrpg.random.VerbClass("improvise","improvising","improvised"),
    new jsrpg.random.VerbClass("include","including","included"),
    new jsrpg.random.VerbClass("increase","increasing","increased"),
    new jsrpg.random.VerbClass("induce","inducing","induced"),
    new jsrpg.random.VerbClass("influence","influencing","influenced"),
    new jsrpg.random.VerbClass("inform","informing","informed"),
    new jsrpg.random.VerbClass("initiate","initiating","initiated"),
    new jsrpg.random.VerbClass("inject","injecting","injected"),
    new jsrpg.random.VerbClass("injure","injuring","injured"),
    new jsrpg.random.VerbClass("inlay","inlaying","inlaid"),
    new jsrpg.random.VerbClass("innovate","innovating","innovated"),
    new jsrpg.random.VerbClass("input","inputting","inputted"),
    new jsrpg.random.VerbClass("inspect","inspecting","inspected"),
    new jsrpg.random.VerbClass("inspire","inspiring","inspired"),
    new jsrpg.random.VerbClass("install","installing","installed"),
    new jsrpg.random.VerbClass("institute","instituting","instituted"),
    new jsrpg.random.VerbClass("instruct","instructing","instructed"),
    new jsrpg.random.VerbClass("insure","insuring","insured"),
    new jsrpg.random.VerbClass("integrate","integrating","integrated"),
    new jsrpg.random.VerbClass("intend","intending","intended"),
    new jsrpg.random.VerbClass("intensify","intensifying","intensified"),
    new jsrpg.random.VerbClass("interest","interesting","interested"),
    new jsrpg.random.VerbClass("interfere","interfering","interfered"),
    new jsrpg.random.VerbClass("interlay","interlaying","interlaid"),
    new jsrpg.random.VerbClass("interpret","interpreting","interpreted"),
    new jsrpg.random.VerbClass("interrupt","interrupting","interrupted"),
    new jsrpg.random.VerbClass("interview","interviewing","interviewed"),
    new jsrpg.random.VerbClass("introduce","introducing","introduced"),
    new jsrpg.random.VerbClass("invent","inventing","invented"),
    new jsrpg.random.VerbClass("inventory","inventorying","inventoried"),
    new jsrpg.random.VerbClass("investigate","investigating","investigated"),
    new jsrpg.random.VerbClass("invite","inviting","invited"),
    new jsrpg.random.VerbClass("irritate","irritating","irritated"),
    new jsrpg.random.VerbClass("itch","itching","itched"),
    new jsrpg.random.VerbClass("jail","jailing","jailed"),
    new jsrpg.random.VerbClass("jam","jamming","jammed"),
    new jsrpg.random.VerbClass("jog","jogging","jogged"),
    new jsrpg.random.VerbClass("join","joining","joined"),
    new jsrpg.random.VerbClass("joke","joking","joked"),
    new jsrpg.random.VerbClass("judge","judging","judged"),
    new jsrpg.random.VerbClass("juggle","juggling","juggled"),
    new jsrpg.random.VerbClass("jump","jumping","jumped"),
    new jsrpg.random.VerbClass("justify","justifying","justified"),
    new jsrpg.random.VerbClass("keep","keeping","kept"),
    new jsrpg.random.VerbClass("kick","kicking","kicked"),
    new jsrpg.random.VerbClass("kill","killing","killed"),
    new jsrpg.random.VerbClass("kiss","kissing","kissed"),
    new jsrpg.random.VerbClass("kneel","kneeling","knelt"),
    new jsrpg.random.VerbClass("knit","knitting","knitted"),
    new jsrpg.random.VerbClass("knock","knocking","knocked"),
    new jsrpg.random.VerbClass("knot","knotting","knotted"),
    new jsrpg.random.VerbClass("know","knowing","known","knew"),
    new jsrpg.random.VerbClass("label","labeling","labeled"),
    new jsrpg.random.VerbClass("land","landing","landed"),
    new jsrpg.random.VerbClass("last","lasting","lasted"),
    new jsrpg.random.VerbClass("laugh","laughing","laughed"),
    new jsrpg.random.VerbClass("launch","launching","launched"),
    new jsrpg.random.VerbClass("lay","laying","laid"),
    new jsrpg.random.VerbClass("lead","leading","leaded"),
    new jsrpg.random.VerbClass("lean","leaning","leaned"),
    new jsrpg.random.VerbClass("leap","leaping","leaped"),
    new jsrpg.random.VerbClass("learn","learning","learned"),
    new jsrpg.random.VerbClass("leave","leaving","leaved"),
    new jsrpg.random.VerbClass("lecture","lecturing","lectured"),
    new jsrpg.random.VerbClass("lead","leading","led"),
    new jsrpg.random.VerbClass("lend","lending","lent"),
    new jsrpg.random.VerbClass("let","letting","let"),
    new jsrpg.random.VerbClass("level","leveling","leveled"),
    new jsrpg.random.VerbClass("license","licensing","licensed"),
    new jsrpg.random.VerbClass("lick","licking","licked"),
    new jsrpg.random.VerbClass("lie","lying","lied"),
    new jsrpg.random.VerbClass("lift","lifting","lifted"),
    new jsrpg.random.VerbClass("light","lighting","lighted"),
    new jsrpg.random.VerbClass("lighten","lightening","lightened"),
    new jsrpg.random.VerbClass("like","liking","liked"),
    new jsrpg.random.VerbClass("list","listing","listed"),
    new jsrpg.random.VerbClass("listen","listening","listened"),
    new jsrpg.random.VerbClass("live","living","lived"),
    new jsrpg.random.VerbClass("load","loading","loaded"),
    new jsrpg.random.VerbClass("locate","locating","located"),
    new jsrpg.random.VerbClass("lock","locking","locked"),
    new jsrpg.random.VerbClass("log","logging","logged"),
    new jsrpg.random.VerbClass("long","longing","longed"),
    new jsrpg.random.VerbClass("look","looking","looked"),
    new jsrpg.random.VerbClass("lose","losing","lost"),
    new jsrpg.random.VerbClass("love","loving","loved"),
    new jsrpg.random.VerbClass("maintain","maintaining","maintained"),
    new jsrpg.random.VerbClass("make","making","made"),
    new jsrpg.random.VerbClass("man","manning","manned"),
    new jsrpg.random.VerbClass("manage","managing","managed"),
    new jsrpg.random.VerbClass("manipulate","manipulating","manipulated"),
    new jsrpg.random.VerbClass("manufacture","manufacturing","manufactured"),
    new jsrpg.random.VerbClass("map","mapping","mapped"),
    new jsrpg.random.VerbClass("march","marching","marched"),
    new jsrpg.random.VerbClass("mark","marking","marked"),
    new jsrpg.random.VerbClass("market","marketing","marketed"),
    new jsrpg.random.VerbClass("marry","marrying","married"),
    new jsrpg.random.VerbClass("match","matching","matched"),
    new jsrpg.random.VerbClass("mate","mating","mated"),
    new jsrpg.random.VerbClass("matter","mattering","mattered"),
    new jsrpg.random.VerbClass("mean","meaning","meant"),
    new jsrpg.random.VerbClass("measure","measuring","measured"),
    new jsrpg.random.VerbClass("meddle","meddling","meddled"),
    new jsrpg.random.VerbClass("mediate","mediating","mediated"),
    new jsrpg.random.VerbClass("meet","meeting","met"),
    new jsrpg.random.VerbClass("melt","melting","melted"),
    new jsrpg.random.VerbClass("memorize","memorizing","memorized"),
    new jsrpg.random.VerbClass("mend","mending","mended"),
    new jsrpg.random.VerbClass("mentor","mentoring","mentored"),
    new jsrpg.random.VerbClass("milk","milking","milked"),
    new jsrpg.random.VerbClass("mine","mining","mined"),
    new jsrpg.random.VerbClass("mislead","misleading","misled"),
    new jsrpg.random.VerbClass("miss","missing","missed"),
    new jsrpg.random.VerbClass("misspell","misspelling","misspelt"),
    new jsrpg.random.VerbClass("mistake","mistaking","mistaken","mistook"),
    new jsrpg.random.VerbClass("misunderstand","misunderstanding","misunderstood"),
    new jsrpg.random.VerbClass("mix","mixing","mixed"),
    new jsrpg.random.VerbClass("moan","moaning","moaned"),
    new jsrpg.random.VerbClass("model","modeling","modeled"),
    new jsrpg.random.VerbClass("modify","modifying","modified"),
    new jsrpg.random.VerbClass("monitor","monitoring","monitored"),
    new jsrpg.random.VerbClass("moor","mooring","moored"),
    new jsrpg.random.VerbClass("motivate","motivating","motivated"),
    new jsrpg.random.VerbClass("mourn","mourning","mourned"),
    new jsrpg.random.VerbClass("move","moving","moved"),
    new jsrpg.random.VerbClass("mow","mowing","mowed"),
    new jsrpg.random.VerbClass("muddle","muddling","muddled"),
    new jsrpg.random.VerbClass("mug","mugging","mugged"),
    new jsrpg.random.VerbClass("multiply","multiplying","multiplied"),
    new jsrpg.random.VerbClass("murder","murdering","murdered"),
    new jsrpg.random.VerbClass("nail","nailing","nailed"),
    new jsrpg.random.VerbClass("name","naming","named"),
    new jsrpg.random.VerbClass("navigate","navigating","navigated"),
    new jsrpg.random.VerbClass("need","needing","needed"),
    new jsrpg.random.VerbClass("negotiate","negotiating","negotiated"),
    new jsrpg.random.VerbClass("nest","nesting","nested"),
    new jsrpg.random.VerbClass("nod","nodding","nodded"),
    new jsrpg.random.VerbClass("nominate","nominating","nominated"),
    new jsrpg.random.VerbClass("normalize","normalizing","normalized"),
    new jsrpg.random.VerbClass("note","noting","noted"),
    new jsrpg.random.VerbClass("notice","noticing","noticed"),
    new jsrpg.random.VerbClass("number","numbering","numbered"),
    new jsrpg.random.VerbClass("obey","obeying","obeyed"),
    new jsrpg.random.VerbClass("object","objecting","objected"),
    new jsrpg.random.VerbClass("observe","observing","observed"),
    new jsrpg.random.VerbClass("obtain","obtaining","obtained"),
    new jsrpg.random.VerbClass("occur","occurring","occurred"),
    new jsrpg.random.VerbClass("offend","offending","offended"),
    new jsrpg.random.VerbClass("offer","offering","offered"),
    new jsrpg.random.VerbClass("officiate","officiating","officiated"),
    new jsrpg.random.VerbClass("open","opening","opened"),
    new jsrpg.random.VerbClass("operate","operating","operated"),
    new jsrpg.random.VerbClass("order","ordering","ordered"),
    new jsrpg.random.VerbClass("organize","organizing","organized"),
    new jsrpg.random.VerbClass("orient","orienting","oriented"),
    new jsrpg.random.VerbClass("originate","originating","originated"),
    new jsrpg.random.VerbClass("overcome","overcoming","overcome","overcame"),
    new jsrpg.random.VerbClass("overdo","overdoing","overdone","overdid"),
    new jsrpg.random.VerbClass("overdraw","overdrawing","overdrawn","overdrew"),
    new jsrpg.random.VerbClass("overflow","overflowing","overflowed"),
    new jsrpg.random.VerbClass("overhear","overhearing","overheard"),
    new jsrpg.random.VerbClass("overtake","overtaking","overtaken","overtook"),
    new jsrpg.random.VerbClass("overthrow","overthrowing","overthrown","overthrew"),
    new jsrpg.random.VerbClass("owe","owing","owed"),
    new jsrpg.random.VerbClass("own","owning","owned"),
    new jsrpg.random.VerbClass("pack","packing","packed"),
    new jsrpg.random.VerbClass("paddle","paddling","paddled"),
    new jsrpg.random.VerbClass("paint","painting","painted"),
    new jsrpg.random.VerbClass("park","parking","parked"),
    new jsrpg.random.VerbClass("part","parting","parted"),
    new jsrpg.random.VerbClass("participate","participating","participated"),
    new jsrpg.random.VerbClass("pass","passing","passed"),
    new jsrpg.random.VerbClass("paste","pasting","pasted"),
    new jsrpg.random.VerbClass("pat","patting","patted"),
    new jsrpg.random.VerbClass("pause","pausing","paused"),
    new jsrpg.random.VerbClass("pay","paying","payed"),
    new jsrpg.random.VerbClass("peck","pecking","pecked"),
    new jsrpg.random.VerbClass("pedal","pedaling","pedaled"),
    new jsrpg.random.VerbClass("peel","peeling","peeled"),
    new jsrpg.random.VerbClass("peep","peeping","peeped"),
    new jsrpg.random.VerbClass("perceive","perceiving","perceived"),
    new jsrpg.random.VerbClass("perfect","perfecting","perfected"),
    new jsrpg.random.VerbClass("perform","performing","performed"),
    new jsrpg.random.VerbClass("permit","permitting","permitted"),
    new jsrpg.random.VerbClass("persuade","persuading","persuaded"),
    new jsrpg.random.VerbClass("phone","phoning","phoned"),
    new jsrpg.random.VerbClass("photograph","photographing","photographed"),
    new jsrpg.random.VerbClass("pick","picking","picked"),
    new jsrpg.random.VerbClass("pilot","piloting","piloted"),
    new jsrpg.random.VerbClass("pinch","pinching","pinched"),
    new jsrpg.random.VerbClass("pine","pining","pined"),
    new jsrpg.random.VerbClass("pinpoint","pinpointing","pinpointed"),
    new jsrpg.random.VerbClass("pioneer","pioneering","pioneered"),
    new jsrpg.random.VerbClass("place","placing","placed"),
    new jsrpg.random.VerbClass("plan","planing","planed"),
    new jsrpg.random.VerbClass("plant","planting","planted"),
    new jsrpg.random.VerbClass("play","playing","played"),
    new jsrpg.random.VerbClass("plead","pleading","pleaded"),
    new jsrpg.random.VerbClass("please","pleasing","pleased"),
    new jsrpg.random.VerbClass("plug","plugging","plugged"),
    new jsrpg.random.VerbClass("point","pointing","pointed"),
    new jsrpg.random.VerbClass("poke","poking","poked"),
    new jsrpg.random.VerbClass("polish","polishing","polished"),
    new jsrpg.random.VerbClass("pop","popping","popped"),
    new jsrpg.random.VerbClass("possess","possessing","possessed"),
    new jsrpg.random.VerbClass("post","posting","posted"),
    new jsrpg.random.VerbClass("pour","pouring","poured"),
    new jsrpg.random.VerbClass("practice","practicing","practiced"),
    new jsrpg.random.VerbClass("praise","praising","praised"),
    new jsrpg.random.VerbClass("pray","praying","prayed"),
    new jsrpg.random.VerbClass("preach","preaching","preached"),
    new jsrpg.random.VerbClass("precede","preceding","preceded"),
    new jsrpg.random.VerbClass("predict","predicting","predicted"),
    new jsrpg.random.VerbClass("prefer","preferring","preferred"),
    new jsrpg.random.VerbClass("prepare","preparing","prepared"),
    new jsrpg.random.VerbClass("prescribe","prescribing","prescribed"),
    new jsrpg.random.VerbClass("present","presenting","presented"),
    new jsrpg.random.VerbClass("preserve","preserving","preserved"),
    new jsrpg.random.VerbClass("preset","presetting","preset"),
    new jsrpg.random.VerbClass("preside","presiding","presided"),
    new jsrpg.random.VerbClass("press","pressing","pressed"),
    new jsrpg.random.VerbClass("pretend","pretending","pretended"),
    new jsrpg.random.VerbClass("prevent","preventing","prevented"),
    new jsrpg.random.VerbClass("prick","pricking","pricked"),
    new jsrpg.random.VerbClass("print","printing","printed"),
    new jsrpg.random.VerbClass("process","processing","processed"),
    new jsrpg.random.VerbClass("procure","procuring","procured"),
    new jsrpg.random.VerbClass("produce","producing","produced"),
    new jsrpg.random.VerbClass("profess","professing","professed"),
    new jsrpg.random.VerbClass("program","programing","programed"),
    new jsrpg.random.VerbClass("progress","progressing","progressed"),
    new jsrpg.random.VerbClass("project","projecting","projected"),
    new jsrpg.random.VerbClass("promise","promising","promised"),
    new jsrpg.random.VerbClass("promote","promoting","promoted"),
    new jsrpg.random.VerbClass("proofread","proofreading","proofread"),
    new jsrpg.random.VerbClass("propose","proposing","proposed"),
    new jsrpg.random.VerbClass("protect","protecting","protected"),
    new jsrpg.random.VerbClass("prove","proving","proved"),
    new jsrpg.random.VerbClass("provide","providing","provided"),
    new jsrpg.random.VerbClass("publicize","publicizing","publicized"),
    new jsrpg.random.VerbClass("pull","pulling","pulled"),
    new jsrpg.random.VerbClass("pump","pumping","pumped"),
    new jsrpg.random.VerbClass("punch","punching","punched"),
    new jsrpg.random.VerbClass("puncture","puncturing","punctured"),
    new jsrpg.random.VerbClass("punish","punishing","punished"),
    new jsrpg.random.VerbClass("purchase","purchasing","purchased"),
    new jsrpg.random.VerbClass("push","pushing","pushed"),
    new jsrpg.random.VerbClass("put","putting","put"),
    new jsrpg.random.VerbClass("qualify","qualifying","qualified"),
    new jsrpg.random.VerbClass("question","questioning","questioned"),
    new jsrpg.random.VerbClass("queue","queuing","queued"),
    new jsrpg.random.VerbClass("quit","quitting","quit"),
    new jsrpg.random.VerbClass("race","racing","raced"),
    new jsrpg.random.VerbClass("radiate","radiating","radiated"),
    new jsrpg.random.VerbClass("rain","raining","rained"),
    new jsrpg.random.VerbClass("raise","raising","raised"),
    new jsrpg.random.VerbClass("rank","ranking","ranked"),
    new jsrpg.random.VerbClass("rate","rating","rated"),
    new jsrpg.random.VerbClass("reach","reaching","reached"),
    new jsrpg.random.VerbClass("read","reading","read"),
    new jsrpg.random.VerbClass("realign","realigning","realigned"),
    new jsrpg.random.VerbClass("realize","realizing","realized"),
    new jsrpg.random.VerbClass("reason","reasoning","reasoned"),
    new jsrpg.random.VerbClass("receive","receiving","received"),
    new jsrpg.random.VerbClass("recognize","recognizing","recognized"),
    new jsrpg.random.VerbClass("recommend","recommending","recommended"),
    new jsrpg.random.VerbClass("reconcile","reconciling","reconciled"),
    new jsrpg.random.VerbClass("record","recording","recorded"),
    new jsrpg.random.VerbClass("recruit","recruiting","recruited"),
    new jsrpg.random.VerbClass("reduce","reducing","reduced"),
    new jsrpg.random.VerbClass("refer","referring","referred"),
    new jsrpg.random.VerbClass("reflect","reflecting","reflected"),
    new jsrpg.random.VerbClass("refuse","refusing","refused"),
    new jsrpg.random.VerbClass("regret","regretting","regretted"),
    new jsrpg.random.VerbClass("regulate","regulating","regulated"),
    new jsrpg.random.VerbClass("rehabilitate","rehabilitating","rehabilitated"),
    new jsrpg.random.VerbClass("reign","reigning","reigned"),
    new jsrpg.random.VerbClass("reinforce","reinforcing","reinforced"),
    new jsrpg.random.VerbClass("reject","rejecting","rejected"),
    new jsrpg.random.VerbClass("rejoice","rejoicing","rejoiced"),
    new jsrpg.random.VerbClass("relate","relating","related"),
    new jsrpg.random.VerbClass("relax","relaxing","relaxed"),
    new jsrpg.random.VerbClass("release","releasing","released"),
    new jsrpg.random.VerbClass("rely","relying","relied"),
    new jsrpg.random.VerbClass("remain","remaining","remained"),
    new jsrpg.random.VerbClass("remember","remembering","remembered"),
    new jsrpg.random.VerbClass("remind","reminding","reminded"),
    new jsrpg.random.VerbClass("remove","removing","removed"),
    new jsrpg.random.VerbClass("render","rendering","rendered"),
    new jsrpg.random.VerbClass("reorganize","reorganizing","reorganized"),
    new jsrpg.random.VerbClass("repair","repairing","repaired"),
    new jsrpg.random.VerbClass("repeat","repeating","repeated"),
    new jsrpg.random.VerbClass("replace","replacing","replaced"),
    new jsrpg.random.VerbClass("reply","replying","replied"),
    new jsrpg.random.VerbClass("report","reporting","reported"),
    new jsrpg.random.VerbClass("represent","representing","represented"),
    new jsrpg.random.VerbClass("reproduce","reproducing","reproduced"),
    new jsrpg.random.VerbClass("request","requesting","requested"),
    new jsrpg.random.VerbClass("rescue","rescuing","rescued"),
    new jsrpg.random.VerbClass("research","researching","researched"),
    new jsrpg.random.VerbClass("resolve","resolving","resolved"),
    new jsrpg.random.VerbClass("respond","responding","responded"),
    new jsrpg.random.VerbClass("restore","restoring","restored"),
    new jsrpg.random.VerbClass("restructure","restructuring","restructured"),
    new jsrpg.random.VerbClass("retire","retiring","retired"),
    new jsrpg.random.VerbClass("retrieve","retrieving","retrieved"),
    new jsrpg.random.VerbClass("return","returning","returned"),
    new jsrpg.random.VerbClass("review","reviewing","reviewed"),
    new jsrpg.random.VerbClass("revise","revising","revised"),
    new jsrpg.random.VerbClass("rhyme","rhyming","rhymed"),
    new jsrpg.random.VerbClass("rid","ridding","ridded"),
    new jsrpg.random.VerbClass("ride","riding","ridden","rode"),
    new jsrpg.random.VerbClass("ring","ringing","ringed"),
    new jsrpg.random.VerbClass("rinse","rinsing","rinsed"),
    new jsrpg.random.VerbClass("rise","rising","risen","rose"),
    new jsrpg.random.VerbClass("risk","risking","risked"),
    new jsrpg.random.VerbClass("rob","robing","robed"),
    new jsrpg.random.VerbClass("rock","rocking","rocked"),
    new jsrpg.random.VerbClass("roll","rolling","rolled"),
    new jsrpg.random.VerbClass("rot","rotting","rotted"),
    new jsrpg.random.VerbClass("rub","rubbing","rubbed"),
    new jsrpg.random.VerbClass("ruin","ruining","ruined"),
    new jsrpg.random.VerbClass("rule","ruling","ruled"),
    new jsrpg.random.VerbClass("run","running","run"),
    new jsrpg.random.VerbClass("rush","rushing","rushed"),
    new jsrpg.random.VerbClass("sack","sacking","sacked"),
    new jsrpg.random.VerbClass("sail","sailing","sailed"),
    new jsrpg.random.VerbClass("satisfy","satisfying","satisfied"),
    new jsrpg.random.VerbClass("save","saving","saved"),
    new jsrpg.random.VerbClass("saw","sawing","sawed"),
    new jsrpg.random.VerbClass("say","saying","said"),
    new jsrpg.random.VerbClass("scare","scaring","scared"),
    new jsrpg.random.VerbClass("scatter","scattering","scattered"),
    new jsrpg.random.VerbClass("schedule","scheduling","scheduled"),
    new jsrpg.random.VerbClass("scold","scolding","scolded"),
    new jsrpg.random.VerbClass("scorch","scorching","scorched"),
    new jsrpg.random.VerbClass("scrape","scraping","scraped"),
    new jsrpg.random.VerbClass("scratch","scratching","scratched"),
    new jsrpg.random.VerbClass("scream","screaming","screamed"),
    new jsrpg.random.VerbClass("screw","screwing","screwed"),
    new jsrpg.random.VerbClass("scribble","scribbling","scribbled"),
    new jsrpg.random.VerbClass("scrub","scrubbing","scrubbed"),
    new jsrpg.random.VerbClass("seal","sealing","sealed"),
    new jsrpg.random.VerbClass("search","searching","searched"),
    new jsrpg.random.VerbClass("secure","securing","secured"),
    new jsrpg.random.VerbClass("see","seeing","seen","saw"),
    new jsrpg.random.VerbClass("seek","seeking","sought"),
    new jsrpg.random.VerbClass("select","selecting","selected"),
    new jsrpg.random.VerbClass("sell","selling","sold"),
    new jsrpg.random.VerbClass("send","sending","sent"),
    new jsrpg.random.VerbClass("sense","sensing","sensed"),
    new jsrpg.random.VerbClass("separate","separating","separated"),
    new jsrpg.random.VerbClass("serve","serving","served"),
    new jsrpg.random.VerbClass("service","servicing","serviced"),
    new jsrpg.random.VerbClass("set","setting","set"),
    new jsrpg.random.VerbClass("settle","settling","settled"),
    new jsrpg.random.VerbClass("sew","sewing","sewn","sewed"),
    new jsrpg.random.VerbClass("shade","shading","shaded"),
    new jsrpg.random.VerbClass("shake","shaking","shaken","shook"),
    new jsrpg.random.VerbClass("shape","shaping","shaped"),
    new jsrpg.random.VerbClass("share","sharing","shared"),
    new jsrpg.random.VerbClass("shave","shaving","shaved"),
    new jsrpg.random.VerbClass("shear","shearing","sheared"),
    new jsrpg.random.VerbClass("shed","shedding","shed"),
    new jsrpg.random.VerbClass("shelter","sheltering","sheltered"),
    new jsrpg.random.VerbClass("shine","shining","shined"),
    new jsrpg.random.VerbClass("shiver","shivering","shivered"),
    new jsrpg.random.VerbClass("shock","shocking","shocked"),
    new jsrpg.random.VerbClass("shoe","shoeing","shoed"),
    new jsrpg.random.VerbClass("shoot","shooting","shot"),
    new jsrpg.random.VerbClass("shop","shopping","shopped"),
    new jsrpg.random.VerbClass("show","showing","showed"),
    new jsrpg.random.VerbClass("shrink","shrinking","shrunk","shrank"),
    new jsrpg.random.VerbClass("shrug","shrugging","shrugged"),
    new jsrpg.random.VerbClass("shut","shutting","shut"),
    new jsrpg.random.VerbClass("sigh","sighing","sighed"),
    new jsrpg.random.VerbClass("sign","signing","signed"),
    new jsrpg.random.VerbClass("signal","signaling","signaled"),
    new jsrpg.random.VerbClass("simplify","simplifying","simplified"),
    new jsrpg.random.VerbClass("sin","sinning","sinned"),
    new jsrpg.random.VerbClass("sing","singing","sung","sang"),
    new jsrpg.random.VerbClass("sink","sinking","sunk","sank"),
    new jsrpg.random.VerbClass("sip","sipping","sipped"),
    new jsrpg.random.VerbClass("sit","siting","sat"),
    new jsrpg.random.VerbClass("sketch","sketching","sketched"),
    new jsrpg.random.VerbClass("ski","skiing","skied"),
    new jsrpg.random.VerbClass("skip","skipping","skipped"),
    new jsrpg.random.VerbClass("slap","slapping","slapped"),
    new jsrpg.random.VerbClass("slay","slaying","slain","slew"),
    new jsrpg.random.VerbClass("sleep","sleeping","sleep"),
    new jsrpg.random.VerbClass("slide","sliding","slid"),
    new jsrpg.random.VerbClass("sling","slinging","slung"),
    new jsrpg.random.VerbClass("slink","slinking","slunk"),
    new jsrpg.random.VerbClass("slip","slipping","slipped"),
    new jsrpg.random.VerbClass("slit","slitting","slit"),
    new jsrpg.random.VerbClass("slow","slowing","slowed"),
    new jsrpg.random.VerbClass("smash","smashing","smashed"),
    new jsrpg.random.VerbClass("smell","smelling","smelled"),
    new jsrpg.random.VerbClass("smile","smiling","smiled"),
    new jsrpg.random.VerbClass("smite","smiting","smitten","smote"),
    new jsrpg.random.VerbClass("smoke","smoking","smoked"),
    new jsrpg.random.VerbClass("snatch","snatching","snatched"),
    new jsrpg.random.VerbClass("sneak","sneaking","snuck"),
    new jsrpg.random.VerbClass("sneeze","sneezing","sneezed"),
    new jsrpg.random.VerbClass("sniff","sniffing","sniffed"),
    new jsrpg.random.VerbClass("snore","snoring","snored"),
    new jsrpg.random.VerbClass("snow","snowing","snowed"),
    new jsrpg.random.VerbClass("soak","soaking","soaked"),
    new jsrpg.random.VerbClass("solve","solving","solved"),
    new jsrpg.random.VerbClass("soothe","soothing","soothed"),
    new jsrpg.random.VerbClass("sort","sorting","sorted"),
    new jsrpg.random.VerbClass("sound","sounding","sounded"),
    new jsrpg.random.VerbClass("sow","sowing","sown","sowed"),
    new jsrpg.random.VerbClass("spare","sparing","spared"),
    new jsrpg.random.VerbClass("spark","sparking","sparked"),
    new jsrpg.random.VerbClass("sparkle","sparkling","sparkled"),
    new jsrpg.random.VerbClass("speak","speaking","spoken","spoke"),
    new jsrpg.random.VerbClass("specify","specifying","specified"),
    new jsrpg.random.VerbClass("speed","speeding","sped"),
    new jsrpg.random.VerbClass("spell","spelling","spelt"),
    new jsrpg.random.VerbClass("spend","spending","spent"),
    new jsrpg.random.VerbClass("spill","spilling","spilt"),
    new jsrpg.random.VerbClass("spin","spinning","spun"),
    new jsrpg.random.VerbClass("spit","spiting","spat"),
    new jsrpg.random.VerbClass("split","splitting","split"),
    new jsrpg.random.VerbClass("spoil","spoiling","spoilt"),
    new jsrpg.random.VerbClass("spot","spotting","spotted"),
    new jsrpg.random.VerbClass("spray","spraying","sprayed"),
    new jsrpg.random.VerbClass("spread","spreading","spread"),
    new jsrpg.random.VerbClass("spring","springing","sprung","sprang"),
    new jsrpg.random.VerbClass("sprout","sprouting","sprouted"),
    new jsrpg.random.VerbClass("squash","squashing","squashed"),
    new jsrpg.random.VerbClass("squeak","squeaking","squeaked"),
    new jsrpg.random.VerbClass("squeal","squealing","squealed"),
    new jsrpg.random.VerbClass("squeeze","squeezing","squeezed"),
    new jsrpg.random.VerbClass("stain","staining","stained"),
    new jsrpg.random.VerbClass("stamp","stamping","stamped"),
    new jsrpg.random.VerbClass("stand","standing","stood"),
    new jsrpg.random.VerbClass("stare","staring","stared"),
    new jsrpg.random.VerbClass("start","starting","started"),
    new jsrpg.random.VerbClass("stay","staying","stayed"),
    new jsrpg.random.VerbClass("steal","stealing","stolen","stole"),
    new jsrpg.random.VerbClass("steer","steering","steered"),
    new jsrpg.random.VerbClass("step","stepping","stepped"),
    new jsrpg.random.VerbClass("stick","sticking","stuck"),
    new jsrpg.random.VerbClass("stimulate","stimulating","stimulated"),
    new jsrpg.random.VerbClass("sting","stinging","stung"),
    new jsrpg.random.VerbClass("stink","stinking","stunk","stank"),
    new jsrpg.random.VerbClass("stir","stirring","stirred"),
    new jsrpg.random.VerbClass("stitch","stitching","stitched"),
    new jsrpg.random.VerbClass("stop","stopping","stopped"),
    new jsrpg.random.VerbClass("store","storing","stored"),
    new jsrpg.random.VerbClass("strap","strapping","strapped"),
    new jsrpg.random.VerbClass("streamline","streamlining","streamlined"),
    new jsrpg.random.VerbClass("strengthen","strengthening","strengthened"),
    new jsrpg.random.VerbClass("stretch","stretching","stretched"),
    new jsrpg.random.VerbClass("stride","striding","stridden","strode"),
    new jsrpg.random.VerbClass("strike","striking","struck"),
    new jsrpg.random.VerbClass("string","stringing","stringed"),
    new jsrpg.random.VerbClass("strip","stripping","stripped"),
    new jsrpg.random.VerbClass("strive","striving","striven","strove"),
    new jsrpg.random.VerbClass("stroke","stroking","stroked"),
    new jsrpg.random.VerbClass("structure","structuring","structured"),
    new jsrpg.random.VerbClass("study","studying","studied"),
    new jsrpg.random.VerbClass("stuff","stuffing","stuffed"),
    new jsrpg.random.VerbClass("sublet","subletting","sublet"),
    new jsrpg.random.VerbClass("subtract","subtracting","subtracted"),
    new jsrpg.random.VerbClass("succeed","succeeding","succeeded"),
    new jsrpg.random.VerbClass("suck","sucking","sucked"),
    new jsrpg.random.VerbClass("suffer","suffering","suffered"),
    new jsrpg.random.VerbClass("suggest","suggesting","suggested"),
    new jsrpg.random.VerbClass("suit","suiting","suited"),
    new jsrpg.random.VerbClass("summarize","summarizing","summarized"),
    new jsrpg.random.VerbClass("supervise","supervising","supervised"),
    new jsrpg.random.VerbClass("supply","supplying","supplied"),
    new jsrpg.random.VerbClass("support","supporting","supported"),
    new jsrpg.random.VerbClass("suppose","supposing","supposed"),
    new jsrpg.random.VerbClass("surprise","surprising","surprised"),
    new jsrpg.random.VerbClass("surround","surrounding","surrounded"),
    new jsrpg.random.VerbClass("suspect","suspecting","suspected"),
    new jsrpg.random.VerbClass("suspend","suspending","suspended"),
    new jsrpg.random.VerbClass("swear","swearing","sworn","swore"),
    new jsrpg.random.VerbClass("sweat","sweating","sweat"),
    new jsrpg.random.VerbClass("sweep","sweeping","swept"),
    new jsrpg.random.VerbClass("swell","swelling","swelled"),
    new jsrpg.random.VerbClass("swim","swimming","swum","swam"),
    new jsrpg.random.VerbClass("swing","swinging","swung"),
    new jsrpg.random.VerbClass("switch","switching","switched"),
    new jsrpg.random.VerbClass("symbolize","symbolizing","symbolized"),
    new jsrpg.random.VerbClass("synthesize","synthesizing","synthesized"),
    new jsrpg.random.VerbClass("tabulate","tabulating","tabulated"),
    new jsrpg.random.VerbClass("take","taking","taken","took"),
    new jsrpg.random.VerbClass("talk","talking","talked"),
    new jsrpg.random.VerbClass("tame","taming","tamed"),
    new jsrpg.random.VerbClass("tap","tapping","tapped"),
    new jsrpg.random.VerbClass("target","targeting","targeted"),
    new jsrpg.random.VerbClass("taste","tasting","tasted"),
    new jsrpg.random.VerbClass("teach","teaching","taught"),
    new jsrpg.random.VerbClass("tear","tearing","torn","tore"),
    new jsrpg.random.VerbClass("tease","teasing","teased"),
    new jsrpg.random.VerbClass("telephone","telephoning","telephoned"),
    new jsrpg.random.VerbClass("tell","telling","told"),
    new jsrpg.random.VerbClass("tempt","tempting","tempted"),
    new jsrpg.random.VerbClass("terrify","terrifying","terrified"),
    new jsrpg.random.VerbClass("test","testing","tested"),
    new jsrpg.random.VerbClass("thank","thanking","thanked"),
    new jsrpg.random.VerbClass("thaw","thawing","thawed"),
    new jsrpg.random.VerbClass("think","thinking","thought"),
    new jsrpg.random.VerbClass("thrive","thriving","thriven","throve"),
    new jsrpg.random.VerbClass("throw","throwing","thrown","threw"),
    new jsrpg.random.VerbClass("thrust","thrusting","thrust"),
    new jsrpg.random.VerbClass("tick","ticking","ticked"),
    new jsrpg.random.VerbClass("tickle","tickling","tickled"),
    new jsrpg.random.VerbClass("tie","tying","tied"),
    new jsrpg.random.VerbClass("time","timing","timed"),
    new jsrpg.random.VerbClass("tip","tipping","tipped"),
    new jsrpg.random.VerbClass("tire","tiring","tired"),
    new jsrpg.random.VerbClass("touch","touching","touched"),
    new jsrpg.random.VerbClass("tour","touring","toured"),
    new jsrpg.random.VerbClass("tow","towing","towed"),
    new jsrpg.random.VerbClass("trace","tracing","traced"),
    new jsrpg.random.VerbClass("trade","trading","traded"),
    new jsrpg.random.VerbClass("train","training","trained"),
    new jsrpg.random.VerbClass("transcribe","transcribing","transcribed"),
    new jsrpg.random.VerbClass("transfer","transferring","transferred"),
    new jsrpg.random.VerbClass("transform","transforming","transformed"),
    new jsrpg.random.VerbClass("translate","translating","translated"),
    new jsrpg.random.VerbClass("transport","transporting","transported"),
    new jsrpg.random.VerbClass("trap","trapping","trapped"),
    new jsrpg.random.VerbClass("travel","traveling","traveled"),
    new jsrpg.random.VerbClass("tread","treading","trodden","trod"),
    new jsrpg.random.VerbClass("treat","treating","treated"),
    new jsrpg.random.VerbClass("tremble","trembling","trembled"),
    new jsrpg.random.VerbClass("trick","tricking","tricked"),
    new jsrpg.random.VerbClass("trip","tripping","tripped"),
    new jsrpg.random.VerbClass("trot","trotting","trotted"),
    new jsrpg.random.VerbClass("trouble","troubling","troubled"),
    new jsrpg.random.VerbClass("troubleshoot","troubleshooting","troubleshot"),
    new jsrpg.random.VerbClass("trust","trusting","trusted"),
    new jsrpg.random.VerbClass("try","trying","tried"),
    new jsrpg.random.VerbClass("tug","tugging","tugged"),
    new jsrpg.random.VerbClass("tumble","tumbling","tumbled"),
    new jsrpg.random.VerbClass("turn","turning","turned"),
    new jsrpg.random.VerbClass("tutor","tutoring","tutored"),
    new jsrpg.random.VerbClass("twist","twisting","twisted"),
    new jsrpg.random.VerbClass("type","typing","typed"),
    new jsrpg.random.VerbClass("undergo","undergoing","undergone","underwent"),
    new jsrpg.random.VerbClass("understand","understanding","understood"),
    new jsrpg.random.VerbClass("undertake","undertaking","undertaken","undertook"),
    new jsrpg.random.VerbClass("undress","undressing","undressed"),
    new jsrpg.random.VerbClass("unfasten","unfastening","unfastened"),
    new jsrpg.random.VerbClass("unify","unifying","unified"),
    new jsrpg.random.VerbClass("unite","uniting","united"),
    new jsrpg.random.VerbClass("unlock","unlocking","unlocked"),
    new jsrpg.random.VerbClass("unpack","unpacking","unpacked"),
    new jsrpg.random.VerbClass("update","updating","updated"),
    new jsrpg.random.VerbClass("upgrade","upgrading","upgraded"),
    new jsrpg.random.VerbClass("uphold","upholding","upheld"),
    new jsrpg.random.VerbClass("upset","upsetting","upset"),
    new jsrpg.random.VerbClass("use","using","used"),
    new jsrpg.random.VerbClass("utilize","utilizing","utilized"),
    new jsrpg.random.VerbClass("vanish","vanishing","vanished"),
    new jsrpg.random.VerbClass("verbalize","verbalizing","verbalized"),
    new jsrpg.random.VerbClass("verify","verifying","verified"),
    new jsrpg.random.VerbClass("vex","vexing","vexed"),
    new jsrpg.random.VerbClass("visit","visiting","visited"),
    new jsrpg.random.VerbClass("wail","wailing","wailed"),
    new jsrpg.random.VerbClass("wait","waiting","waited"),
    new jsrpg.random.VerbClass("wake","waking","woken","woke"),
    new jsrpg.random.VerbClass("walk","walking","walked"),
    new jsrpg.random.VerbClass("wander","wandering","wandered"),
    new jsrpg.random.VerbClass("want","wanting","wanted"),
    new jsrpg.random.VerbClass("warm","warming","warmed"),
    new jsrpg.random.VerbClass("warn","warning","warned"),
    new jsrpg.random.VerbClass("wash","washing","washed"),
    new jsrpg.random.VerbClass("waste","wasting","wasted"),
    new jsrpg.random.VerbClass("watch","watching","watched"),
    new jsrpg.random.VerbClass("water","watering","watered"),
    new jsrpg.random.VerbClass("wave","waving","waved"),
    new jsrpg.random.VerbClass("wear","wearing","worn","wore"),
    new jsrpg.random.VerbClass("weave","weaving","weaved"),
    new jsrpg.random.VerbClass("wed","wedding","wed"),
    new jsrpg.random.VerbClass("weep","weeping","wept"),
    new jsrpg.random.VerbClass("weigh","weighing","weighed"),
    new jsrpg.random.VerbClass("welcome","welcoming","welcomed"),
    new jsrpg.random.VerbClass("wend","wending","wended"),
    new jsrpg.random.VerbClass("wet","wetting","wet"),
    new jsrpg.random.VerbClass("whine","whining","whined"),
    new jsrpg.random.VerbClass("whip","whipping","whipped"),
    new jsrpg.random.VerbClass("whirl","whirling","whirled"),
    new jsrpg.random.VerbClass("whisper","whispering","whispered"),
    new jsrpg.random.VerbClass("whistle","whistling","whistled"),
    new jsrpg.random.VerbClass("win","wining","won"),
    new jsrpg.random.VerbClass("wind","winding","winded"),
    new jsrpg.random.VerbClass("wink","winking","winked"),
    new jsrpg.random.VerbClass("wipe","wiping","wiped"),
    new jsrpg.random.VerbClass("wish","wishing","wished"),
    new jsrpg.random.VerbClass("withdraw","withdrawing","withdrawn","withdrew"),
    new jsrpg.random.VerbClass("withhold","withholding","withheld"),
    new jsrpg.random.VerbClass("withstand","withstanding","withstood"),
    new jsrpg.random.VerbClass("wobble","wobbling","wobbled"),
    new jsrpg.random.VerbClass("wonder","wondering","wondered"),
    new jsrpg.random.VerbClass("work","working","worked"),
    new jsrpg.random.VerbClass("worry","worrying","worried"),
    new jsrpg.random.VerbClass("wrap","wrapping","wrapped"),
    new jsrpg.random.VerbClass("wreck","wrecking","wrecked"),
    new jsrpg.random.VerbClass("wrestle","wrestling","wrestled"),
    new jsrpg.random.VerbClass("wriggle","wriggling","wriggled"),
    new jsrpg.random.VerbClass("wring","wringing","wrung"),
    new jsrpg.random.VerbClass("write","writing","written","wrote"),
    new jsrpg.random.VerbClass("yawn","yawning","yawned"),
    new jsrpg.random.VerbClass("yell","yelling","yelled"),
    new jsrpg.random.VerbClass("zip","zipping","zipped"),
    new jsrpg.random.VerbClass("zoom","zooming","zoomed")
];

/**
 *
 * @param {string} [person] From jsrpg.random.verbPersons
 * @param {string} [time] jsrpg.random.verbTimes
 * @param {boolean} [negative]
 * @returns {string}
 */
jsrpg.random.verb = function(person, time, negative) {
    var conjugatedVerb = "";
    if (!person) {
        person = jsrpg.random.randomArray(jsrpg.random.verbPersons._arrayVerbPersons);
    }
    if (!time) {
        time = jsrpg.random.randomArray(jsrpg.random.verbTimes._arrayVerbTimes);
    }
    if (negative === 'undefined') {
        negative = (Math.random() >= 0.3);
    }
    if (negative) {
        conjugatedVerb = jsrpg.random.randomArray(jsrpg.random._arrayVerbsAny).conjugateNegation(time,person);
    } else {
        conjugatedVerb = jsrpg.random.randomArray(jsrpg.random._arrayVerbsAny).conjugate(time,person);
    }
    return conjugatedVerb;
};


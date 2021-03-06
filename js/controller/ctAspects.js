wof.aspects = {};

wof.aspects.random = {};

wof.aspects.random.chaosLevel = 0.5;
wof.aspects.random.longFactor = 0.5;

/*
   class 1
 "I am an [adjective] [noun] who [verbs]"
 */
wof.aspects.random.class1 = function() {
    var adjective = "";
    var adjProb = wof.aspects.random.longFactor;
    while (Math.random() <= adjProb) {
        adjective += jsrpg.stringTools.toUpperFirst(jsrpg.random.adjective()) + " ";
        adjProb = adjProb * 0.8;
    }

    var noun;
    var nounResult = Math.random() + (wof.chaosLevel-0.5)*0.66;

    if (nounResult <= 0.33) {
        noun = jsrpg.stringTools.toUpperFirst(wof.aspects.random.highConcept());
    } else if (nounResult <= 0.67) {
        noun = jsrpg.stringTools.toUpperFirst(jsrpg.random.nounPersonal());
    } else {
        noun = jsrpg.stringTools.toUpperFirst(jsrpg.random.nounAny());
    }

    var verb = jsrpg.stringTools.toUpperFirst(jsrpg.random.verb() + "s");

    var adverb = "";
    var advProb = wof.aspects.random.longFactor;
    var firstAdverb = true;
    while (Math.random() <= advProb) {
        if (!firstAdverb) {
            adverb += "and "
        }
        adverb += jsrpg.stringTools.toUpperFirst(jsrpg.random.adverb()) + " ";
        advProb = advProb * 0.6;
        firstAdverb = false;
    }

    var union = "A";
    var fl = adjective.substr(0,1).toLowerCase();
    if (fl == "a" || fl == "e" || fl == "i" || fl == "o" || fl == "u") {
        union += "n";
    }

    return "I Am " + union + " " + adjective + noun + " Who " + adverb + verb;
};


/*
 Archetypes / High Concepts
 */
wof.aspects.random._highConcepts = [
    "Archer",
    "Elvish Archer",
    "Absent-Minded Savant",
    "Ace Reporter",
    "Alien Companion",
    "Amateur Sleuth",
    "Amateur Archeologist",
    "Amazon Warrior",
    "Anarchist",
    "Arcane Tinker",
    "Armchair Scientist",
    "Art Collector",
    "Artist",
    "Bad Boy",
    "Bad Girl",
    "Bard",
    "Believer",
    "Biker",
    "Bimbo",
    "Black Sheep",
    "Boisterous Barbarian",
    "Bored Aristocrat",
    "Brash Pilot",
    "Broker",
    "Brooding Swordsman",
    "Champion",
    "Civilized Barbarian",
    "Computer Geek",
    "Con Man",
    "Conspiracy Theorist",
    "Cowboy",
    "Dangerous Servant",
    "Dark Elf",
    "Dashing Officer",
    "Desert Nomad",
    "Devout Priest",
    "Drifter",
    "Dungeon Delver",
    "Eccentric Mentor",
    "Emo",
    "Ex-Soldier",
    "Ex-Space Marine",
    "Fae",
    "Femme Fatale",
    "Film-fan",
    "Flying Ace",
    "Friend of All People",
    "Gadget Guy",
    "Gadgeteer",
    "Gambler",
    "Gangster",
    "Geezer",
    "Gentleman Thief",
    "Girl Who Become a Boy",
    "Grizzled Police Detective",
    "Gruff Sergeant",
    "Grumpy (Dwarven) Warrior",
    "Gumshoe Detective",
    "He Who Is Foretold in the Prophesies",
    "Heir to the Throne",
    "Honorable Assassin",
    "Hot-Tempered Sorcerer",
    "Hustler",
    "Independent Wizard",
    "Independent Woman",
    "Innocent Farmboy",
    "Inquisitor",
    "Inscrutable Mystic",
    "Jack-Of-All-Trades Mechanic",
    "Jive-Talking Wizard",
    "Joker/Jester",
    "Jungle Lord",
    "Kid",
    "Knight",
    "Knight in Black",
    "Lady",
    "Likable Theif",
    "Loner",
    "Lord",
    "Lost Love",
    "Mad Scientist",
    "Magician",
    "Magus",
    "Man of Mystery",
    "Martial Artist",
    "Maverick Cop",
    "Mechanic",
    "Mercenary",
    "Mobster",
    "Musician",
    "Mysterious Gypsy",
    "Mysterious Stranger",
    "Nerd",
    "Network Hacker",
    "New Recruit",
    "Noble Savage",
    "Novelist",
    "Officer Fresh from the Academy",
    "Outdoorsman",
    "Parapsychologist",
    "Plucky Reporter",
    "Policeman",
    "Popular Girl",
    "Preppy Student",
    "Private Detective",
    "Prodigal Son",
    "Prophet",
    "Psychiatrist",
    "Psycho-analyst",
    "Quarterback",
    "Redeemed Hero",
    "Righteous Youth",
    "Roommate",
    "Sacrificial Virgin",
    "Salesman",
    "Scholar",
    "Scoundrel",
    "Seductress",
    "Shrewd Lawyer",
    "Silent Stranger",
    "Soldier",
    "Sorcerer",
    "Spitfire Tomboy",
    "Star-crossed Lovers",
    "Starship Captain",
    "Straight Talking Lawman",
    "Street Samarai",
    "Stuck-up Paladin/Knight",
    "Stupid Orcs",
    "Super Spy",
    "Temperamental Police Chief",
    "Texan",
    "Traveller in a Strange Land",
    "True Beauty",
    "Trusty Companion",
    "Two-Fisted Pilot",
    "Unconventional Genius",
    "Urban Villain",
    "Veteran",
    "Vixen",
    "Wise Old Man",
    "Wizard",
    "Young Hero"
];
wof.aspects.random.highConcept = function() {
    return jsrpg.random.randomArray(wof.aspects.random._highConcepts);
};

/*
 Beliefs, Convictions & Mottos
*/
wof.aspects.random._beliefs = [
    "A Good Day to Die",
    function() {return "A Good Day to " + jsrpg.random.verb();},
    "A Worthy Foe Should Be Respected",
    function() {return "A worthy " + jsrpg.random.nounAny() + " Should Be Respected";},
    "Alone, We Stand Together",
    "Always Strike First",
    function() {return "Always " + jsrpg.random.verb() + " First";},
    "By Fidelity and Military Service",
    "Carrot, Not the Stick",
    "Chivalry Is Not Dead",
    "Conquer or Die!",
    function() {return jsrpg.random.verb() + " Or Die!";},
    "Contentment Is Preferable to Riches",
    function() {return jsrpg.random.nounAny() + " Is Preferable to " + jsrpg.random.nounAny();},
    "Dare to Fail, for It Is the Only Way to Truly Experience Success.",
    "Desire Is Tamed With a Kiss",
    "Do Your Duty, Happen What May",
    "Every Man, Woman and Child for Themselves",
    "Failure Is Not an Option",
    "Faith Demands Sacrifice",
    "Family Before All Others",
    "Fight First, Talk Later!",
    "First, Do No Harm",
    "Friendship Often Ends in Love; but Love in Friendship - Never",
    "Glory Is Forever",
    "Greater Love Hath No Man Than This, That He Lay Down His Friends for His Life.",
    "I Always Pay My Due",
    "I Am the Land",
    "I Have Killed Men for Less!",
    "I Wait",
    function() {return "I " + jsrpg.random.verb();},
    "I Want to Know",
    function() {return "I Want to " + jsrpg.random.verb();},
    "I Want to Make a Difference",
    "I Will Have Vengeance",
    function() {return "I Will Have the " + jsrpg.random.nounAny();},
    "I'll Be Back",
    "I'll Make Captain One Day",
    "Imagination Is More Important Than Knowledge.",
    "It's Not the Size of the Dog in the Fight, but the Size of the Fight in the Dog.",
    "It's the Last Inch That Counts",
    "Ladies First",
    "Liberty of Death!",
    "Life Is a Great Big Canvas, and You Should Throw All the Paint on It You Can.",
    "Life Is Either a Daring Adventure, or Nothing.",
    "Live Life to the Fullest",
    "Mercy Has No Place in the Law",
    "My Favorite Dish Is Revenge",
    "My Weapon Is Myself",
    "Never Surrender",
    "Never Throw the First Punch.but Be Sure You Throw the Last.",
    "No Mercy, but No Cruelty",
    "No Reason Why We Can't Be Civilized",
    "Nobody else for the Job but Us",
    "Non-Traditionalist",
    "Nothing in Life Is Permanent",
    "Nothing Personal, It's Just Business",
    "One for All and All for One",
    "Only the Strong Are Fit to Rule",
    "People Need to Wake up!",
    "Politics Is My Favorite Game",
    "Precision Trumps Power",
    "Protect the Innocent",
    "Serve the Public Trust",
    "Speak Softly but Carry a Big Stick",
    "Stay Alive",
    "Subtlety Is Its Own Power",
    "Tears Are Not Enough",
    "Technology Is the Great Equalizer",
    "the Best Way out Is Always Through.",
    "the Price of Glory",
    "the Road Is My Home",
    "the Snake Lurks in the Grass",
    "to Sacrifice Even Life to Truth",
    "Uphold the Law",
    "Virtue Despises Danger",
    "Wants to Live in Peace",
    function() {return "Wants to " + jsrpg.random.verb() + " In Peace";},
    "We Must Be the Change We Want to See in the World."
];
wof.aspects.random.belief = function() {
    var result = jsrpg.random.randomArray(wof.aspects.random._beliefs);
    if (typeof(result) === 'function') {
        result = result.call(this);
    }
    return result;
};

/*
 Disadvantages / Trouble / Consequences
*/
wof.aspects.random._trouble = [
    "A Squirrel!",
    function() {return "A " + jsrpg.random.nounAny() + "!";},
    "Addicted to Speed",
    "Alone in a Crowd",
    "Always the Bridesmaid, Never the Bride",
    "Backstabber",
    "Been Here Too Long",
    "Broken Heart",
    "Brooding",
    "But for a Nail!",
    "By the Book? What Book",
    "Certifiably Nuts",
    "Caught Red-Handed",
    "Craves Control",
    "Curiosity Killed the Cat",
    "Dandy Living Rough",
    "Dark Past",
    "Day Dreamer",
    "Desperate",
    "Devoid of Magic",
    "Easy Mark",
    "Empty Inside",
    "Entertain Me",
    "Entitlement Complex",
    "Ever the Bridesmaid",
    "Everything Has a Price",
    "Faints at the Sight of Blood",
    "Fly by Night",
    "Folds Under Pressure",
    "Forbidden Tastes",
    "Generous to a Fault",
    "Guilty Conscience",
    "Gullible",
    "Haunted",
    "Haunted by Dreams",
    "He'll Eat Anything!",
    "Heir to a Terrible Secret",
    "Hermit",
    "Home-wrecker",
    "I Can't Get Involved",
    function() {return "I Can't " + jsrpg.random.verb();},
    "I Don't Trust Me, and You Shouldn't Either",
    "I Get Paid to do Crazy Stuff",
    function() {return "I Get Paid to " + jsrpg.random.verb();},
    "I Hate the Outdoors",
    function() {return "I Hate the " + jsrpg.random.nounAny() + "s";},
    function() {return "I Hate the " + jsrpg.random.nounPersonal() + "s";},
    "I Have No Idea How Much I Don't Know",
    "I Want It Now",
    function() {return "I'd Take a Bullet for a " + jsrpg.random.nounPersonal();},
    "I'd Take a Bullet for [someone]",
    "I'm Too Old for This",
    "Idle Hands are the Devil's Workshop",
    "if One Is Good, Ten Is Better",
    "if Only I Had My Trusty Toolbox",
    "Impetuous",
    "in My Own Time",
    "in over His Head",
    "Indulgent & Indulged",
    "Infamous",
    "Insatiable Appetite",
    "Intolerant",
    "It Was Fine in My Workshop!",
    "It Wasn't My Fault!",
    "Ivory Tower",
    "Just a Poser",
    "Just Following Orders",
    "Just Use More",
    "King’s Wrath",
    "Knows Too Much",
    "Let Me See How This Works!",
    "Liar and a Cheat",
    "Loner",
    "Look, a Kitty!",
    "Loose Cannon",
    "Loyal to the Bone",
    "Loyalty for Sale",
    "Materialistic",
    "Math Is Hard",
    "Momma's Boy",
    "My Daughter Died in My Arms",
    "My Ex Drives Me Crazy",
    "Naïve",
    "Never Good Enough",
    "New in Town",
    "Obsessed",
    "Obsessive-Compulsive",
    "Obviously Landed on His Face",
    "One Step Behind",
    "Out of the Frying Pan...",
    "over My Head",
    "Overly Blunt",
    "Paranoid",
    "Perpetually Broke",
    "Picks Scabs",
    "Rude and Crude",
    "Scavenger",
    "Self-Destructive",
    "Shady Past",
    "Shattered",
    "Short Fuse",
    "Silver Spoon",
    "Snakes! Why Does It Always Have to Be Snakes!",
    function() {
        var nombre = jsrpg.random.nounAny() + "s";
        return nombre + "! Why Does It Always Have to Be " + nombre + "!";
    },
    "Snarl",
    "Something to Prove",
    "Soul of a Killer",
    "Stage Fright",
    "Sucker",
    "Sucker for a Pretty Face",
    "Sweet-Tooth",
    "Sweetheart, Would I Lie to You?",
    "the Awful Truth",
    "the Darkness Always Threatens",
    "They Can't Know I'm an Alien",
    "This Is Bigger Than I Thought",
    "Troublemaker",
    "Vagabond",
    "What I Wouldn't Give for Real Power",
    "Who Needs Backup?",
    "Why Won't You Die!",
    "Withdrawn",
    "Work in Progress",
    "Work Is a Four Letter Word!",
    "You'll Never Take Me Alive!"
];
wof.aspects.random.trouble = function() {
    var result = jsrpg.random.randomArray(wof.aspects.random._trouble);
    if (typeof(result) === 'function') {
        result = result.call(this);
    }
    return result;
};

/*
 Dispositions
 */
wof.aspects.random._dispositions = [
    "A Fine Line Between Cynicism and Realism",
    "A Fistful of Truth",
    "A Girl in Every Port",
    function() {return "A " + jsrpg.random.nounAny() + " In Every Port";},
    function() {return "A " + jsrpg.random.nounPersonal() + " In Every Port";},
    "Approachable",
    "Art Is Pleasure",
    "Benevolent Dictator",
    "Born of the Storm",
    "Brother to All Who Know Me",
    "Calm in a Sea of Insanity",
    "Caution Above All",
    "Chance-Taker",
    "Civilized",
    "Cold As the Winter Wind",
    "Compassionate Heart",
    "Court Gossip",
    "Cuts It Close",
    "Cutthroat",
    "Dastardly",
    "Dead Calm",
    "Death Defying",
    "Defender of the Defenseless",
    "Devastating Glance",
    "Disciplined",
    "Dogged Dreamer",
    "Don't Let the Bastards Get You Down",
    "Fae-Touched",
    "Faith Fears Not",
    "Famous",
    "Fierce and Passionate",
    "Fiercely Independent",
    "Give the voters what they want",
    "Hard Boiled",
    "Hard Working",
    "Heart of a Saint",
    "Heart of Gold",
    "I Must Survive!",
    "I Neither Envy nor Despise",
    "I Succeed by Kindness",
    "Imposing Stare",
    "Intrepid",
    "Irreproachable",
    "Irritatingly Sunny",
    "Just Do the Job",
    "Keep It Simple",
    "Keep It Tidy",
    "Kind-Hearted",
    "Loner",
    "Marked by Destiny",
    "Muckraking",
    "Never Trust a Man",
    "Nosy",
    "Nothing Left to Lose",
    "Obsessed",
    "Office Gossip",
    "Overtime",
    "Plucky",
    "Poker Face",
    "Practical",
    "Pride Goeth Before Everything",
    "Privilege Makes Me Cynical",
    "Proud of My Heritage",
    "Pushed over the Edge",
    "Quick to Anger",
    "Quick to Love",
    "Quiet Confidence",
    "Reclusive",
    "Regal Bearing",
    "Respectable",
    "Ruthless Heart",
    "Salt of the Earth",
    "Scrappy",
    "Secretive",
    "Sense of Honor",
    "Shadowed Glare",
    "Slow to Forget",
    "Soft-Spoken",
    "Stone Cold",
    "Strength in Silence",
    "Stripper With a Heart of Gold",
    "Suspicious",
    "Take That, You Fiend!",
    "the More Thorny the More Fragrant",
    "Thick Skinned",
    "This Is My Post",
    "Tolerant",
    "Touched",
    "Troublemaker",
    "Twitchy",
    "Two-Fisted",
    "Uncivilized",
    "Undying Devotion",
    "Unflappable",
    "Unshakeable",
    "Wary",
    "Well-Mannered",
    "Wiseass"
];
wof.aspects.random.dispositions = function() {
    var result = jsrpg.random.randomArray(wof.aspects.random._dispositions);
    if (typeof(result) === 'function') {
        result = result.call(this);
    }
    return result;
};

/*
 Expertise, Advantages
 */
wof.aspects.random._expertise = [
    "A Cut Above the Norm",
    "A Fistful of Dollars",
    "A Name Within the Field",
    "Aikido Master",
    "Always Ready",
    "Amazonian",
    "Archer's Eye",
    "Artist's Heart",
    "At Home Behind the Stick",
    "Aura of Power",
    "Been Around a Long Time",
    "Been There, Done That",
    "Bend With the Wind",
    "Best Education Money Could Buy",
    "Beware the Wrath of a Patient Man",
    "Bookworm",
    "Born of Wealth",
    "Born to the Blade",
    "Cat's Eyes",
    "Chance Favors Only Those Who Court Her.",
    "Competitive Athlete",
    "Cuts It Close",
    "Dead Sexy",
    "Death Defying",
    "Dogged",
    "Don't Judge Me by My Size",
    "Eavesdropper",
    "Elven Grace",
    "Engineering Prodigy",
    "Eureka!",
    "Expert Among Novices",
    "Eyes Wide Open",
    "Favorite With the Ladies",
    "First on the Scene",
    "From the Future",
    "For You Are With Me, Father",
    "Gearhead",
    "Gentle Touch",
    "Ghost Step",
    "Gimme a Minute",
    "Graceful",
    "Grease Monkey",
    "Great Expectations",
    "Hardy",
    "Hawkeye",
    "Heart of a Warrior",
    "Honest Eyes",
    "I Fear No Evil",
    "I Have a Bad Feeling About This",
    "I Just Happened to Be in the Neighborhood",
    "I Know a Way",
    "I Know What I'm Doing",
    "I Know Your Name",
    "I Need No Sword",
    "I Never Forget a Face",
    "I'll Never Talk",
    "I'm Going to Kill You Using Only My Left Thumb",
    "I've seen this before",
    "Icy Beauty",
    "in Acting Justly Fear No One",
    "In Shape and Ready to Play",
    "Inconspicuous",
    "Iron Will",
    "It Is Better to Know Some of the Questions Than All of the Answers.",
    "It Was Always in My Pocket",
    "It Would Take a Miracle",
    "Jane of All Trades",
    "Johnny on the Spot",
    "Knowledge Is My Shield",
    "Knowledge Is the Great Equalizer",
    "Knows the Names of Evil",
    "Leads the Hunt",
    "Let Me See How This Works!",
    "Look in My Eyes",
    "Lord of the Treetops",
    "Lord, Grant Me the Strength!",
    "Man of Two Worlds",
    "Man, That Is Going to Hurt Later",
    "Master of Blind Fighting",
    "Master of Innuendo",
    "Meticulous",
    "Midnight Eyes",
    "Motorhead",
    "Moves Like a Ninja",
    "Musician's Soul",
    "Natural Mechanic",
    "Neither Swiftly nor Slowly",
    "Nick of Time",
    "No Stranger to Pain",
    "No, You Do It Like This!",
    "Nose for Trouble",
    "Not Just a Pretty Face",
    "One With the Forest",
    "One Tough Customer",
    "Order out of Chaos",
    "Pack-Rat",
    "Plans Within Plans",
    "Political Survivor",
    "Power Behind the Throne",
    "Prefer the Honest to the Profitable",
    "Pride in Scholarship",
    "Pure Killing Machine",
    "Puts in the Long Hours",
    "Quick Witted",
    "Respectable Authority",
    "Ride It Down",
    "Rough & Ready",
    "Rugged",
    "Self-Sufficient",
    "Shiphead",
    "Silents As Midnight",
    "Silver-Tongued",
    "Sleeping Bear",
    "Social Chameleon",
    "Solution Oriented",
    "Something's Not Right",
    "Sorcerer by Nature",
    "Spokesperson",
    "Strange Intuition",
    "Strange Luck",
    "Street Smart",
    "Strong and Certain Grip",
    "Strong As an Ox",
    "Swordsman Without Compare",
    "Takes One to Know One",
    "That Is Not a Knife. This Is a Knife!",
    "The Pen Is Mightier then the Sword",
    "There is always more than meets the eye",
    "To Know How to Hide One's Ability Is Great Skill.",
    "Too Close to Call",
    "Touched by Magic",
    "Tough As Nails",
    "Two-Fisted",
    "Unremarkable",
    "Virtue for Its Own Sake",
    "Voice Like a Silken Strangling Cord",
    "Voice Like Silk",
    "Wait, Try This...",
    "Was This What You Needed?",
    "Weapons Master",
    "Well-Known",
    "Well-Schooled",
    "Well-Travelled",
    "While I Have Breath I Have Hope",
    "World Traveler",
    "You Can't Be Expected to Understand",
    "You’ll Never Get Past Me!"
];
wof.aspects.random.expertise = function() {
    var result = jsrpg.random.randomArray(wof.aspects.random._expertise);
    if (typeof(result) === 'function') {
        result = result.call(this);
    }
    return result;
};

/*
 Friends, Family, Help
 */
wof.aspects.random._friends = [
    "A Might Fortress Is My Home",
    "Apprentice of ...",
    "Buddy of ...",
    "Chosen of ...",
    "Co-Worker",
    "Devoted Servant of ...",
    "Elf-Friend",
    "Ex-Operative of ...",
    "Former Cultist",
    "Former Reporter",
    "Friend of the Beasts",
    "Friend of the Family",
    "Friends in Dark Places",
    "Friends in Low Places",
    "Hidden Crush",
    "I Know Just the Guy",
    "I'm a Member of ...",
    "I Get by With a Little Help From my Friends",
    "Made Man",
    "Manfred, Save Me!",
    "My Old Friend, ...",
    "Network of Spies",
    "Never Without My Minions",
    "Nobody Beats up My Sister but Me!",
    "of the Xxx Family",
    "Pawn of ...",
    "Raised by ...",
    "Reminds You of Your Uncle",
    "Secret Crush",
    "Unspoken Love",
    "War Buddies",
    "Yeah, I Know Him"
];
wof.aspects.random.friends = function() {
    return jsrpg.random.randomArray(wof.aspects.random._friends);
};

/*
 Enemies & Foes
 */
wof.aspects.random._enemies = [
    "... Killed My Family!",
    "Betrayed by ...",
    "Haunted by ...",
    "Hunted by ...",
    "Jealous Ex-...",
    "on the Run from ...",
    "Rival to...",
    "Sworn Enemy of ...",
    "Vendetta With ...",
    "Won't Rest Until ..."
];
wof.aspects.random.enemies = function() {
    return jsrpg.random.randomArray(wof.aspects.random._enemies);
};

wof.aspects.random._gear = [
    "Gear[edit]",
    "Ancient Sword",
    "Deathbed Legacy",
    "I Have My Father's Sword",
    "I Have My Mother's Diaries",
    "Import/Export Business",
    "My Pa's Old Six Shooter",
    "Secret Lair",
    "Serendipity, Space Freighter",
    "She's the Fastest Ship on the Rim"
];
wof.aspects.random.gear = function() {
    return jsrpg.random.randomArray(wof.aspects.random._gear);
};

/*
 Questions
 */
wof.aspects.random._questions = [
    "Death to ...",
    "I Hate ...",
    "I Intend to ...",
    "I Know in My Heart ...",
    "I Love ...",
    "I'll Make My Name by ...",
    "More then Anything I Need ...",
    "My Most Immediate Concern ...",
    "Sworn Enemy of ...",
    "Wants to Be ...",
    "...Must Die!"
];
wof.aspects.random.questions = function() {
    return jsrpg.random.randomArray(wof.aspects.random._questions);
};

wof.aspects.random.allTable = new jsrpg.Tabla(110,[
    {v:20,e:wof.aspects.random.class1},
    {v:30,e:wof.aspects.random.highConcept},
    {v:40,e:wof.aspects.random.belief},
    {v:50,e:wof.aspects.random.trouble},
    {v:60,e:wof.aspects.random.dispositions},
    {v:70,e:wof.aspects.random.expertise},
    {v:80,e:wof.aspects.random.friends},
    {v:90,e:wof.aspects.random.enemies},
    {v:100,e:wof.aspects.random.gear},
    {v:110,e:wof.aspects.random.questions}
]);

/**
 * Generates a random aspect of any kind
 */
wof.aspects.random.any = function(chaosLevel, longFactor) {
    wof.aspects.random.chaosLevel = chaosLevel;
    wof.aspects.random.longFactor = longFactor;
    return wof.aspects.random.allTable.tira().call(this);
};
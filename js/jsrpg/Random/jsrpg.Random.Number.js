jsrpg.random._arrayNumbersTo20 = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty"
];

jsrpg.random._arrayHighNumbers = [
    "a hundred",
    "a thousand",
    "a million",
    "a billion",
    "incountable",
    "many"
];

jsrpg.random._arrayRandomNumbers = [
    jsrpg.random._arrayNumbersTo20,
    jsrpg.random._arrayHighNumbers
];

jsrpg.random.numberTo20 = function() {
    return jsrpg.random.randomArray(jsrpg.random._arrayNumbersTo20);
};

jsrpg.random.numberHigh = function() {
    return jsrpg.random.randomArray(jsrpg.random._arrayHighNumbers);
};

jsrpg.random.numberAny = function() {
    return jsrpg.random.randomArray(jsrpg.random.randomArray(jsrpg.random._arrayRandomNumbers));
};

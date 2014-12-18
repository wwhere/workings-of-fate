/* @namespace Namespace para API JSRPG */
var jsrpg = jsrpg || {};

jsrpg.random = {};

/**
 *
 * @param {Array} inputArray
 * @returns {*}
 */
jsrpg.random.randomArray = function(inputArray) {
    return inputArray[Math.floor(Math.random() * inputArray.length)];
};


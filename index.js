const nullFunc = require('gittesting');

function isNullOrEmpty(input) {
    return (input === undefined || input === null || input === '');
}
module.exports = isNullOrEmpty;


console.log("From Local Function: ", isNullOrEmpty(null));
console.log("From Local Function: ", isNullOrEmpty("Check"));
console.log("==============================")
console.log("From Package Function: ", nullFunc(null));
console.log("From Package Function: ", nullFunc("Check"));
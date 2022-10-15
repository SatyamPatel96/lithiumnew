const str = " functionUp  ";
const Trim = function() {
    return str.trim();
};
const tolowercase = function() {
    return str.toLowerCase();
};
const touppercase = function() {
    return str.toUpperCase();
};
module.exports = { Trim, tolowercase, touppercase }
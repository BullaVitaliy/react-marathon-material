
const negate = function(x){ return -x; };
const halve = function(x){ return x / 2; };
const square = function(x){ return x * x; };
const double = function(x){ return 2 * x; };


function combineFunctions(...argumnts) {
    return square(halve(negate(5)))
}
console.log(combineFunctions(negate, halve, square))
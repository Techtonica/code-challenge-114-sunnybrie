// ### Flattening
//
// Use the existing Array \`reduce\` method in combination with the \`concat\` method to “flatten”an array of arrays into a single array that has all the elements of the original arrays.
// You must name the function "flatten".

// e.g.
//
// ```
// let a = [[1,2],[3,4],[5,6,7]];
// ```
//
// ```
// flatten(a);
// ```
//
// ```
// // result is:
// ```
//
// ```
// // [1,2,3,4,5,6,7]
// ```
//
// Bonus: make it work even with a nested array like:
//
// ```
// let nested = [[1,2],[3, [4, 5]], [6], 7]
// ```
//
// ```
// flatten(nested);
// ```
//
// ```
// // [1,2,3,4,5,6,7]
// ```

function flatten(arr){
    const initialValue = [];

    function reducer(total, value) {
        if(Array.isArray(value)){
            return total.concat(flatten(value));
        } else {
            return total.concat(value);
        }
    };
    
    return arr.reduce(reducer, initialValue);
}

let myArr = [[1,2],[3,4],[5,6,7]];
let nested = [[1,2],[3, [4, 5]], [6], 7];
console.log(flatten(myArr));
console.log(flatten(nested));

module.exports = flatten;

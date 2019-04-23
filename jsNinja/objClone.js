function iterationCopy(src) {
    let target = {};
    for (let prop in src) {
        if (src.hasOwnProperty(prop)) {
            console.log(prop);
            target[prop] = src[prop];
        }
    }
    return target;
}
const source = {
    a: 1,
    b: 2,
    c: {
        c1: 4,
        c2: 3
    }
};

const obj = {};
obj.name = "Yolanda";
console.log(obj);
const target = iterationCopy(source);
console.log(target); // {a:1, b:2, c:3}
// Check if clones it and not changing it
source.c = 'a';
console.log(source.a); // 'a'
console.log(target.a); // 1
console.log(source); // 'a'
console.log(target); // 1

// function jsonCopy(src) {
//     return JSON.parse(JSON.stringify(src));
// }
// const source1 = { a: 1, b: 2, c: 3 };
// const target1 = jsonCopy(source);
// console.log(target1); // {a:1, b:2, c:3}
// // Check if clones it and not changing it
// source1.a = 'a';
// console.log(source1.a); // 'a'
// console.log(target1.a); // 1



// function bestCopyEver(src) {
//     return Object.assign({}, src);
// }
// const source2 = { a: 1, b: 2, c: 3 };
// const target2 = bestCopyEver(source);
// console.log(target); // {a:1, b:2, c:3}
// // Check if clones it and not changing it
// source2.a = 'a';
// console.log(source2.a); // 'a'
// console.log(target2.a); // 1

// var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]];
// // var myNewArray4 = [].concat(...arr);
// // console.log(arr.flat());
// function flatten(myArray) {
//     return myArray.reduce(function (flat, toFlatten) {
//         return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//     }, []);
// }
// arr = flatten(arr).sort();
// console.log(arr);
// require 'set';
// You are given an array of desired filenames in the order of their
// creation. Since two files cannot have equal names, the one which comes
// later will have an addition to its name in a form of (k), where k is
// the smallest positive integer such that the obtained name is not used yet.
//
// Return an array of names that will be given to the files.
//
// Example
//
// For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
// fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].
//
// Input/Output
//
// [execution time limit] 4 seconds (js)
//
// [input] array.string names
//
// Guaranteed constraints:
// 5 ≤ names.length ≤ 15,
// 1 ≤ names[i].length ≤ 15.
//
// [output] array.string

function fileNaming(names) {
    let fileSet = new Set();
    let res = names;
    for (let i = 0; i < names.length; i++) {
        let j = 0;
        let temp = names[i];
        if (!fileSet.has(temp)) {
            fileSet.add(temp);
        } else {
            while (true) {
                j++;
                if (!fileSet.has(names[i] + "("+ j.toString() + ")")) {
                    temp = names[i] + "("+ j.toString() + ")";
                    fileSet.add(temp);
                    break;
                } else {
                    temp = names[i] + "("+ j.toString() + ")";
                }
            }
        res[i] = temp;
        }
    }
    return res;
}

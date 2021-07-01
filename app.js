var x = "hello word";
function printName(str) {
    let lowwer = str.toLowerCase();
    let leng = 0;
    let word = 1;
    let vow = 0;
    for (let i = 0; i < lowwer.length; i++) {
        leng += 1;
        if (lowwer[i] === " ") {
            word += 1;
        } else if (
            lowwer[i] === "e" ||
            lowwer[i] === "a" ||
            lowwer[i] === "o" ||
            lowwer[i] === "i" ||
            lowwer[i] === "u"
        ) {
            vow += 1;
        }
    }
    console.log(`number of charecters is ${leng}`);
    console.log(`number of words is ${word}`);
    console.log(`number of vowels is ${vow}`);
}
printName(x);
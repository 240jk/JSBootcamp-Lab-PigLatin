//const { default: test } = require('node:test');
//let main = require('./piglatin');

const { expect, test } = require("@jest/globals");
const translate = require("./piglatin");

test('The string is coverted to lowercase before translating', () => {
let testLowerCase1 = main.lowercase("Hello");
expect(testLowerCase1).toBe("hello");
let testLowerCase2 = main.lowercase("Goodbye");
expect(testLowerCase2).toBe("goodbye");
let testLowerCase3 = main.lowercase("SPOON");
expect(testLowerCase3).toBe("spoon");

});

test('If a string starts with a vowel (a, e, i, o, u), then just add "way" to the end', () => {
let testStartsWithVowel1 = main.translatePigLatin("active");
expect(testStartsWithVowel1).toBe("activeway");
let testStartsWithVowel2 = main.translatePigLatin("operation");
expect(testStartsWithVowel2).toBe("operationway");
let testStartsWithVowel3 = main.translatePigLatin("echo");
expect(testStartsWithVowel3).toBe("echoway");

});

test('If the words starts with a consonant, it should be moved to the end with "-ay" to finish it', () => {
let testStartsConsonant1 = main.translatePigLatin("red");
expect(testStartsConsonant1).toBe("edray");
let testStartsConsonant2 = main.translatePigLatin("staple");
expect(testStartsConsonant2).toBe("aplestay");
let testStartsConsonant3 = main.translatePigLatin("through");
expect(testStartsConsonant3).toBe("oughthray")

});

// describe("translate function", () => {
//     test("starts with a", () => {
//         expect(translate("apple")).toEqual("appleway");
//     });


// })
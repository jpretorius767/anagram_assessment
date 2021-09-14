var words = [
    'rope',
    'pore',
    'repo',
    'red rum',
    'murder',
    'listen',
    'silent',
    'endeavour'
];
function toAlphabetical(word) {
    return word.split("").sort().join("");
}
function groupAnagrams(words) {
    var result = {};
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var alphabetic = toAlphabetical(word);
        if (result[alphabetic]) {
            result[alphabetic].push(word);
        }
        else {
            result[alphabetic] = [word];
        }
    }
    return Object.values(result);
}
var grouped = groupAnagrams(words);
// iterate over groups and print each one
for (var sortedWord in grouped) {
    console.log(grouped[sortedWord] + "\n");
}

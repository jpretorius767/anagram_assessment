const words = [
  'rope',
  'pore',
  'repo',
  'red rum',
  'murder',
  'listen',
  'silent',
  'endeavour'
];

  function toAlphabetical(word: string): string {
    return word.split("").sort().join("");
  }

  function groupAnagrams(words: string[]): any {
    let result: any = {};
    for (let word of words) {
      word = word.replace(/\s/g,'');
      let alphabetic = toAlphabetical(word);
      if (result[alphabetic]) {
        result[alphabetic].push(word);
      } else {
        result[alphabetic] = [word];
      }
    }
    return Object.values(result);
  }
  
const grouped = groupAnagrams(words);

// iterate over groups and print each one
for(const sortedWord in grouped) {
    console.log(`${grouped[sortedWord]}\n`);
}
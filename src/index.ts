
/**
 * Input words
 */
const words = [
  'rope',
  'pore',
  'repo',
  'red rum',
  'Funeral', 
  'Real fun',
  'Astronomer', 
  'moon starer',
  'murder',
  'listen',
  'silent',
  'endeavour'
];

/**
 * Return sorted letters
 * @param word 
 * @returns string
 */
  function toSortedLetters(word: string): string {
    return word.split("").sort().join("");
  }

  /**
   * Group anagrams together
   * @param words string[]
   * @returns string[]
   */
  function groupAnagrams(words: string[]): string[] {
    let result: any = {};
    words.forEach((word: string) => {
      // ensure spaces removed and lowercase!
      word = word.replace(/\s/g,'').toLowerCase();
      let alphabetic = toSortedLetters(word); 
      if (result[alphabetic]) {
        result[alphabetic].push(word);
      } else {
        result[alphabetic] = [word];
      }
    })
    return Object.values(result);
  }
 
  
const grouped = groupAnagrams(words);

// Print each one
for(const sortedWord in grouped) {
    console.log(`${grouped[sortedWord]}\n`);
}
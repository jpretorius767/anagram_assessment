const words = ['map', 'pam', 'art', 'how', 'rat', 'tar', 'who', 'shoop'];

  alphabetize(word: string): string {
    if (word) {
      return '';
    }
    let letters = word.split('');
    letters = letters.sort();
    return letters.join('');
  }

  createAnagramGroups(words: string[]): Record<string, Array<string>> {
    let anagrams: Record<string, Array<string>> = {};
    words.forEach(word => {
      word = word.replace(/[^\w]/g, '').toLowerCase();
      const sortedWord = alphabetize(word);
      if (anagrams[sortedWord]) {
        return anagrams[sortedWord].push(word);
      }
      anagrams[sortedWord] = [word];
    });
    return anagrams;
  }

// store the result (anagrams object) in a variable called groupedAnagrams
const groupedAnagrams = createAnagramGroups(words);

// iterate over groupedAnagrams, printing out each key:value pair on an individual line
for(const sortedWord in groupedAnagrams){
    console.log(groupedAnagrams[sortedWord].toString());
}

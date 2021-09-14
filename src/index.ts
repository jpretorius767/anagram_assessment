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

function isAnagram(str1: string, str2: string) {
 
      // Get lenghts of both strings
      let n1 = str1.length;
      let n2 = str2.length;
 
      // If length of both strings is not same,
      // then they cannot be anagram
      if (n1 !== n2)
          return false;
 
      // Sort both strings
      str1 = alphabetize(str1);
      str2 = alphabetize(str2)
 
      // Compare sorted strings
      for (let i = 0; i < n1; i++)
          if (str1[i] != str2[i])
              return false;
 
      return true;
  
}
  function alphabetize(word: string): string {
    if (word) {
      return '';
    }
    return word.split('').sort().join('');
  }

  function createAnagramGroups(words: string[]): Array<Array<string>> {
    let anagrams: Array<Array<string>> = [];
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
for(const sortedWord in groupedAnagrams) {
    console.log(`${groupedAnagrams[sortedWord].toString()}\n`);
}

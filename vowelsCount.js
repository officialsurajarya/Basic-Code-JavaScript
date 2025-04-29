function countVowels(str) {
  let count = 0;
  for (let char of str) {
    let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    for (let vowel of vowels) {
      if (char === vowel) {
        count++;
      }
    }
  }
  console.log(count);
}

countVowels("Suraj Arya");

function countVowels(str) {
  str = str.toLowerCase()

  let count = 0
  let vowels = ['a', 'e', 'i', 'o', 'u']

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) count += 1
    }
  }

  return count
}

module.exports = countVowels

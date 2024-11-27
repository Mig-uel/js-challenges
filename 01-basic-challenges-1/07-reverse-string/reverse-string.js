function reverseString(str) {
  let reverse = ''

  for (let i = str.length; i > 0; i--) {
    reverse += str[i - 1]
  }

  return reverse
}

module.exports = reverseString

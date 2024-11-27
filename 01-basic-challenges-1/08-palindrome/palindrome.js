function isPalindrome(str) {
  let reversed = ''

  for (let i = str.length; i > 0; i--) {
    reversed += str[i - 1]
  }

  str = str.replace(/[^a-z0-9]/g, '')
  reversed = reversed.replace(/[^a-z0-9]/g, '')

  if (str === reversed) return true
  else return false
}

module.exports = isPalindrome

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '')

  let reversed = ''

  for (let i = str.length; i > 0; i--) {
    reversed += str[i - 1]
  }

  if (str === reversed) return true
  else return false
}

module.exports = isPalindrome

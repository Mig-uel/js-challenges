function titleCase(string) {
  const splitted = string.split(' ')
  const modified = []

  for (let i = 0; i < splitted.length; i++) {
    const cap = splitted[i][0].toUpperCase()
    const low = splitted[i].slice(1, splitted[i].length)

    modified.push(cap + low)
  }

  return modified.join(' ')
}

module.exports = titleCase

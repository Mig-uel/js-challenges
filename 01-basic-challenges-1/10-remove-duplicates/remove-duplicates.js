function removeDuplicates(arr) {
  const newArr = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) continue

    newArr.push(arr[i])
  }

  return newArr
}

module.exports = removeDuplicates

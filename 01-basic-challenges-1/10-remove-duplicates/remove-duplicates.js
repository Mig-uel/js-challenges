function removeDuplicates(arr) {
  const newArr = [arr[0]]

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false

    for (let j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        isDuplicate = true
        break
      }
    }

    if (!isDuplicate) newArr.push(arr[i])
  }

  return newArr
}

module.exports = removeDuplicates

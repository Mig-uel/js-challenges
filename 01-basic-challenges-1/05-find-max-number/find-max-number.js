function findMaxNumber(numbers) {
  let greatest = numbers[0]

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > greatest) greatest = numbers[i]
  }

  return greatest
}

module.exports = findMaxNumber

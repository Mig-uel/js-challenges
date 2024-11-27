function findMaxNumber(numbers) {
  let greatest = numbers[0]

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[0] > greatest) greatest = numbers[0]
  }

  return greatest
}

module.exports = findMaxNumber

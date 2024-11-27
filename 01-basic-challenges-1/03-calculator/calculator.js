function calculator(num1, num2, operator) {
  if (
    operator !== '+' &&
    operator !== '-' &&
    operator !== '*' &&
    operator !== '/'
  )
    throw new Error('Invalid operator')

  if (operator === '+') return num1 + num2

  if (operator === '-') return num1 - num2

  if (operator === '*') return num1 * num2

  if (operator === '/') return num1 / num2
}

module.exports = calculator

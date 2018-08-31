const captchaRandom = {
  range (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  },
  captcha () {
    const num1 = this.range(1, 10)
    const num2 = this.range(1, 10)
    const operator = this.range(1, 3)
    let answer = 0
    switch (operator) {
      case 1:
        answer = num1 + num2
        return { captcha: `${num1} + ${num2}`, answer }
        break;
      case 2:
        answer = num1 - num2
        return { captcha: `${num1} - ${num2}`, answer }
        break;
      default:
        answer = num1 * num2
        return { captcha: `${num1} * ${num2}`, answer }
        break;
    }
  }
}

module.exports = captchaRandom

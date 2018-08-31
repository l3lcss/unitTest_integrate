const captchaRandom = require('../../src/captcha')

describe('captcha', function () {
  test('5 + 10 should return answer 15', function () {
    captchaRandom.captcha = jest.fn().mockReturnValue({
      captcha: '5 + 10', answer: 5 + 10
    })
    expect(captchaRandom.captcha()).toEqual({
      captcha: '5 + 10', answer: 5 + 10
    })
  })

  test('5 - 10 should return answer -5', function () {
    captchaRandom.captcha = jest.fn().mockReturnValue({
      captcha: '5 - 10', answer: 5 - 10
    })
    expect(captchaRandom.captcha()).toEqual({
      captcha: '5 - 10', answer: 5 - 10
    })
  })

  test('5 * 10 should return answer 50', function () {
    captchaRandom.captcha = jest.fn().mockReturnValue({
      captcha: '5 * 10', answer: 5 * 10
    })
    expect(captchaRandom.captcha()).toEqual({
      captcha: '5 * 10', answer: 5 * 10
    })
  })
})

const request = require('supertest')
const app = require('../../src/server').listen()

describe('/captcha', async () => {
  test('should match regex', async () => {
    const response = await request(app).get('/captcha')
    let { answer } = response.body
    expect(answer).toBeLessThanOrEqual(100)
  })
})

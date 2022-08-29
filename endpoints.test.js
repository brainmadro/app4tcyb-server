const request = require('supertest')
const routes = require('./routes')

const api = request(routes);

describe('Routes', () => {
    test('should', async () => {
        await api.get('/ping')
        .expect(200)
    })
})
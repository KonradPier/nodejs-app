const request = require('supertest');
const { app, server } = require('./app');

afterAll(done => {
    if (server) {
        server.close(done);
    } else {
        done();
    }
});

describe('Express App', () => {
    test('GET / should return Hello, World JSON', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Hello, World! V2');
        expect(response.body).toHaveProperty('status', 'success');
        expect(response.body).toHaveProperty('hostname');
        expect(response.body).toHaveProperty('timestamp');
    });

    test('GET /health should return status OK and uptime', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('status', 'OK');
        expect(typeof response.body.uptime).toBe('number');
        expect(response.body).toHaveProperty('timestamp');
    });
});

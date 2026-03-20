const request = require('supertest');
const app = require('./app');

test('GET / returns welcome message', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toBe('Hello from CI/CD Pipeline! 🚀');
});

test('GET /health returns healthy', async () => {
  const res = await request(app).get('/health');
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe('healthy');
});
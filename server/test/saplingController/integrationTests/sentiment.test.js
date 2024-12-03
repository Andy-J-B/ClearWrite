const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const saplingController = require('../../../controller/saplingController');

jest.mock('axios');

const app = express();
app.use(bodyParser.json());
app.post('/tone', saplingController.Tone);

describe('Tone API', () => {
  it('should return tone analysis', async () => {
    const mockResponse = { data: { tone: 'positive' } };
    axios.post.mockResolvedValue(mockResponse);

    const response = await request(app)
      .post('/tone')
      .send({ text: 'Happy text' });

    expect(response.status).toBe(200);
    expect(response.body.tone).toBe('positive');
  });

  it('should handle errors', async () => {
    axios.post.mockRejectedValue(new Error('API Error'));

    const response = await request(app)
      .post('/tone')
      .send({ text: 'Happy text' });

    expect(response.status).toBe(400);
    expect(response.text).toBe('Error: Error: API Error');
  });
});
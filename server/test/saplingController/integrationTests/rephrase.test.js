const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const saplingController = require('../../../controller/saplingController');

jest.mock('axios');

const app = express();
app.use(bodyParser.json());
app.post('/rephrase', saplingController.Rephrase);

describe('Rephrase API', () => {
  it('should return rephrased text', async () => {
    const mockResponse = { data: { rephrased: 'Rephrased text' } };
    axios.post.mockResolvedValue(mockResponse);

    const response = await request(app)
      .post('/rephrase')
      .send({ text: 'Original text' });

    expect(response.status).toBe(200);
    expect(response.body.rephrased).toBe('Rephrased text');
  });

  it('should handle errors', async () => {
    axios.post.mockRejectedValue(new Error('API Error'));

    const response = await request(app)
      .post('/rephrase')
      .send({ text: 'Original text' });

    expect(response.status).toBe(400);
    expect(response.text).toBe('Error: Error: API Error');
  });
});
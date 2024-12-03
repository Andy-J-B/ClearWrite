const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const saplingController = require('../../../controller/saplingController');

jest.mock('axios');

const app = express();
app.use(bodyParser.json());
app.post('/ai-detect', saplingController.AiDetect);

describe('AiDetect API', () => {
  it('should return AI detection score', async () => {
    const mockResponse = { data: { score: 0.95, sentence_scores: [0.9, 1.0] } };
    axios.post.mockResolvedValue(mockResponse);

    const response = await request(app)
      .post('/ai-detect')
      .send({ text: 'Sample text' });

    expect(response.status).toBe(200);
    expect(response.body.overallScore).toBe(0.95);
    expect(response.body.sentenceScores).toEqual([0.9, 1.0]);
  });

  it('should handle errors', async () => {
    axios.post.mockRejectedValue(new Error('API Error'));

    const response = await request(app)
      .post('/ai-detect')
      .send({ text: 'Sample text' });

    expect(response.status).toBe(400);
    expect(response.text).toBe('Error: Error: API Error');
  });
});
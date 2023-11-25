import fs from 'fs';
jest.spyOn(fs, 'readFileSync').mockReturnValue('0 0 N\nM3 R1 M2 L1 M5');

import request from 'supertest';
import { app } from '../index';


describe('GET /', () => {
  test('responds with correct final position for valid input', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Final position: (2, 8, N)');
  });
});

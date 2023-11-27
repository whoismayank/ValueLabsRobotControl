import fs from 'fs';
import request from 'supertest';

jest.spyOn(fs, 'readFileSync').mockReturnValue('0 0 N\nM3 R1 M2 L1 M5');
import { moveForward, app} from '../index';
import { RobotState } from '../types'; // Importing types from types.ts

describe('moveForward', () => {
  test('moves north correctly', () => {
      const initialState = { x: 0, y: 0, heading: 'N' };
      const expectedState = { x: 0, y: 1, heading: 'N' };
      expect(moveForward(initialState, 1)).toEqual(expectedState);
  });

  test('moves east correctly', () => {
      const initialState = { x: 0, y: 0, heading: 'E' };
      const expectedState = { x: 1, y: 0, heading: 'E' };
      expect(moveForward(initialState, 1)).toEqual(expectedState);
  });

  test('moves south correctly', () => {
      const initialState = { x: 0, y: 1, heading: 'S' };
      const expectedState = { x: 0, y: 0, heading: 'S' };
      expect(moveForward(initialState, 1)).toEqual(expectedState);
  });

  test('moves west correctly', () => {
      const initialState = { x: 1, y: 0, heading: 'W' };
      const expectedState = { x: 0, y: 0, heading: 'W' };
      expect(moveForward(initialState, 1)).toEqual(expectedState);
  });

  test('moves north with multiple steps', () => {
      const initialState = { x: 0, y: 0, heading: 'N' };
      const expectedState = { x: 0, y: 3, heading: 'N' };
      expect(moveForward(initialState, 3)).toEqual(expectedState);
  });
});



describe('GET /', () => {
  test('responds with correct final position for valid input', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Final position: (2, 8, N)');
  });

});

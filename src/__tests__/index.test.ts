import fs from 'fs';
import request from 'supertest';

jest.spyOn(fs, 'readFileSync').mockReturnValue('0 0 N\nM3 R1 M2 L1 M5');
import { moveForward, RobotState, app} from '../index';

describe('moveForward', () => {
    test('moves north correctly', () => {
        const initialState: RobotState = { x: 0, y: 0, heading: 'N' };
        const expectedState = { x: 0, y: 1, heading: 'N' };
        expect(moveForward(initialState, 1)).toEqual(expectedState);
    });
});



describe('GET /', () => {
  test('responds with correct final position for valid input', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Final position: (2, 8, N)');
  });

});

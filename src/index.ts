import express from 'express';
import fs from 'fs';
import { RobotState } from './types'; // Importing types from types.ts

export const app = express();
const port: number = 8000;

const headings: string[] = ['N', 'E', 'S', 'W']; // North, East, South, West

export function moveForward(state: RobotState, steps: number): RobotState {
  let { x, y, heading } = state;
  for (let i = 0; i < steps; i++) {
    switch (heading) {
      case 'N': y = (y + 1) % 100; break;
      case 'E': x = (x + 1) % 100; break;
      case 'S': y = (y + 99) % 100; break;
      case 'W': x = (x + 99) % 100; break;
    }
  }
  return { x, y, heading };
}

function rotate(state: RobotState, direction: 'L' | 'R', times: number): RobotState {
  let index = headings.indexOf(state.heading);
  let newIndex = (direction === 'L' ? index - times : index + times) % headings.length;
  return { ...state, heading: headings[newIndex < 0 ? newIndex + headings.length : newIndex] };
}

function processCommands(commands: string, initialState: RobotState): RobotState {
  return commands.match(/(M|L|R)(\d*)/g)?.reduce((state, command) => {
    const action = command.charAt(0);
    const number = parseInt(command.slice(1)) || 1;
    return action === 'M' ? moveForward(state, number) : rotate(state, action as 'L' | 'R', number);
  }, initialState) || initialState;
}

app.get('/', (req, res) => {
  try {
    // const input = `0 0 N
    // M3 R1 M2 L1 M5`.split('\n');;
    const input = fs.readFileSync('src/input.txt', 'utf8').split('\n');

    console.log('Raw Input Lines:', input); // Log raw input lines
    const [initialPosition, commands] = input;
    console.log('Initial position',initialPosition)
    const [x, y, rawHeading] = initialPosition.split(' ');
    const heading = rawHeading.trim().toUpperCase();

    console.log(`Parsed Position: (${x}, ${y}, ${heading})`); // Add logging

    if (!headings.includes(heading)) {
      throw new Error('Invalid heading in input');
    }

    let initialState: RobotState = { x: parseInt(x), y: parseInt(y), heading };
    const finalState = processCommands(commands, initialState);
    res.send(`Final position: (${finalState.x}, ${finalState.y}, ${finalState.heading})`);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(`Error processing input: ${error.message}`);
    } else {
      res.status(500).send('An unknown error occurred');
    }
  }
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}



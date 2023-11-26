# ValueLabs Robot Control Application

## Overview

This application is a Node.js server written in TypeScript, designed for the ValueLabs Robot Control challenge. It simulates a robot moving in a 100x100 grid based on input commands and outputs the robot's final position.

The first line 0 0 N sets the initial position of the robot at the coordinates (0, 0) facing North (N).
The second line M3 R2 M2 L1 M is a sequence of commands:
M3 - Move forward 3 steps.
R2 - Rotate right twice (turning 180 degrees).
M2 - Move forward 2 steps.
L1 - Rotate left once (turning 90 degrees).
M - Move forward 1 step.

## Features

- Grid world simulation in a 100x100 matrix.
- Accepts commands for moving and rotating a robot within the grid.
- Wraps around the edges of the grid to maintain continuous movement.
- Reads input from a file and outputs the final position of the robot.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)

### Installation

1. Clone the repository:
    git clone https://github.com/whoismayank/ValueLabsRobotControl.git
    cd ValueLabsRobotControl    
2. Install the dependencies:
    npm install

### Install types for typescript
1. npm install --save-dev supertest @types/supertest
2. npm install --save-dev @types/jest @types/express
### Build the Application
    npm run build

### Run the Application
    npm run dev


2. The server will start on `http://localhost:8000`. Make a GET request to this URL to initiate the robot control simulation. The input should be provided in an `input.txt` file in the project root.

### Input File Format

Create an `input.txt` file in the root of the project with the following format:

- First Line: Initial position and heading of the robot (e.g., `0 0 N`).
- Second Line: Sequence of commands (e.g., `M3 R1 M2 L1 M5`).

Example `input.txt`:
0 0 N
M3 R1 M2 L1 M5

## Testing

Run tests using the following command:
    npm test


## Contributing

Contributions to the project are welcome. Please follow the standard fork-and-pull request workflow.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- Your Name - [hello.mahendrachoudhary@gmail.com](mailto:hello.mahendrachoudhary@gmail.com)
- Project Link: https://github.com/whoismayank/ValueLabsRobotControl



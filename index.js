"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const fs_1 = require("fs");
const inputFile = 'input.txt';
const data = (0, fs_1.readFileSync)(inputFile, 'utf-8').split('\n');
const moveRobot = (command) => {
    const moves = 'NESW';
    let idx = moves.indexOf(direction);
    for (let i = 0; i < command.length; i++) {
        const char = command[i];
        const isDigit = !isNaN(parseInt(char));
        if (char === 'M') {
            const steps = isDigit ? parseInt(command[++i]) : 1;
            if (direction === 'N')
                y = (y + steps) % 100;
            else if (direction === 'E')
                x = (x + steps) % 100;
            else if (direction === 'S')
                y = (y - steps + 100) % 100;
            else if (direction === 'W')
                x = (x - steps + 100) % 100;
        }
        else {
            const rotation = char === 'R' ? 1 : -1;
            idx = (idx + rotation + 4) % 4;
            direction = moves[idx];
        }
    }
};
const initialPosition = data[0].match(/([NSEW])(\d{2})/);
console.log(initialPosition);
//   let [_, direction, position] = initialPosition;
//   let [x, y] = position.split('').map(Number);
//   const commands = data[1];
//   moveRobot(commands);
//   console.log(`Final Position: (${x},${y}) facing ${direction}`);
// app.get('/', (req: Request, res: Response) => {
//     const inputFile = 'input.txt';
//     const data = readFileSync(inputFile, 'utf-8').split('\n');
//     const initialPosition = data[0].match(/([NSEW])(\d{2})/);
//     let [_, direction, position] = initialPosition;
//     let [x, y] = position.split('').map(Number);
//     console.log(`Final Position: (${x},${y}) facing ${direction}`);
//     const commands = data[1];
//     moveRobot(commands);
//     res.send('App is running');
// });
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

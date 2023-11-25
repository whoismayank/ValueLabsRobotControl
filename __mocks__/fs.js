
const fs = jest.createMockFromModule('fs');

// Mock implementation of readFileSync
fs.readFileSync = jest.fn().mockReturnValue('0 0 N\nM3 R1 M2 L1 M5');

module.exports = fs;

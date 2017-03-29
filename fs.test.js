test('fs readFileSync', () => {
  jest.resetModules();
  jest.mock('fs');
  const fs = require('fs');
  fs.readFileSync('package.json', 'utf8');
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
});

test('fs readFileSync with factory', () => {
  jest.resetModules();
  jest.mock('fs', () => ({
    readFileSync: jest.fn(() => 'DUMMY TEXT'),
  }));
  const fs = require('fs');
  const text = fs.readFileSync('package.json', 'utf8');
  expect(fs.readFileSync).toHaveBeenCalledTimes(1);
  expect(text).toBe('DUMMY TEXT');
});

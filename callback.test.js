const fs = require('fs');

test('async callback', (done) => {
  fs.readFile('package.json', 'utf8', (err, result) => {
    expect(err).toBeFalsy();
    expect(result).toContain('name');
    done()
  });
});

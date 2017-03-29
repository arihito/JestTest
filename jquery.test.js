const $ = require('jquery');

test('jquery test', () => {
  $('<h1>').text('Hello').appendTo('body');
  expect(document.body.innerHTML).toBe('<h1>Hello</h1>');
});

const findLuckyNumber = require('./index');

test('findLuckyNumber is a function', () => {
  expect(typeof findLuckyNumber).toEqual('function');
});


test('Find the lucky number', () => {
  expect(findLuckyNumber('++.++-.+--.--.')).toEqual(3);
});


test('Find the lucky number', () => {
  expect(findLuckyNumber('++.+++.++++.--.')).toEqual(2);
});

test('Find the lucky number', () => {
  expect(findLuckyNumber('+++.---.+++.--.++++.')).toEqual(0);
});

test('Find the lucky number', () => {
  expect(findLuckyNumber('...')).toEqual(null);
});

test('An empty string returns null', () => {
  expect(findLuckyNumber('')).toEqual(null);
});

// A superstitious bus driver is trying to find a lucky number for a lottery ticket. They do this by tracking the number of people riding their bus throughout the day.

// They count when people board, and when people depart. Immediately after each stop, the driver writes down the number of riders on the bus. At the end of the day, they cross out all numbers that appear more than once (assuming that they are not lucky). The first number they wrote down that is NOT crossed out is their lucky number.
// Nathan Fairhurst to Everyone (3:11 PM)
// Events of the day are described by a string of characters, where '+' means that someone boards the bus, a '-' means someone departs, and a '.' means a stop is complete. No other characters may appear. The string represents a complete day of driving; the bus will be empty (zero riders) at the start and empty at the end.

// All scheduled stops are included in the string, even if no one boards or departs. The string will not contain any errors, so the rider count will never drop below 0.

// Your code should determine the bus driver's lucky number, given such a string as input.

// As an example, consider the string "++.++-.+--.--.", where the lucky number is 3.
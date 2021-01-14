import Validator from '../validateUsername';

test('should validate user', () => {
  const received = new Validator('Super_123-Oleg');
  expect(received.validateUsername()).toBeTruthy();
});

test('should validate user with single letted', () => {
  const received = new Validator('A');
  expect(received.validateUsername()).toBeTruthy();
});

test('should not validate user cause unexpected symbol', () => {
  const received = new Validator('Super-Oleg_!A');
  expect(received.validateUsername()).toBeFalsy();
});

test('should not validate user cause start with wrong symbol', () => {
  const received = new Validator('_Super-Oleg_!A');
  expect(received.validateUsername()).toBeFalsy();
});

test('should not validate user cause end with wrong symbol', () => {
  const received = new Validator('Super-Oleg1');
  expect(received.validateUsername()).toBeFalsy();
});

test('should not validate user cause cyrillic is not allowed', () => {
  const received = new Validator('Super-Андрюша_A');
  expect(received.validateUsername()).toBeFalsy();
});

test('should not validate user cause too much numbers', () => {
  const received = new Validator('Super_1234-Oleg');
  expect(received.validateUsername()).toBeFalsy();
});

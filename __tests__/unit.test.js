// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Test for isPhoneNumber()
describe('isPhoneNumber()', () => {
  test('returns true for valid phone numbers', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('returns false for invalid phone numbers', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
    expect(functions.isPhoneNumber('123-45-6789')).toBe(false);
  });
});

// Test for isEmail()
describe('isEmail()', () => {
  test('returns true for valid emails', () => {
    expect(functions.isEmail('johnsdoe@gmail.com')).toBe(true);
    expect(functions.isEmail('jane_doe@yahoo.co')).toBe(true);
  });

  test('returns false for invalid emails', () => {
    expect(functions.isEmail('john.doegmail.com')).toBe(false);
    expect(functions.isEmail('jane_doe@yahoodotcom')).toBe(false);
  });
});

// Test for isStrongPassword()
describe('isStrongPassword()', () => {
  test('returns true for strong passwords', () => {
    expect(functions.isStrongPassword('StrongPass1')).toBe(true);
    expect(functions.isStrongPassword('another_Strong1')).toBe(true);
  });

  test('returns false for weak passwords', () => {
    expect(functions.isStrongPassword('1weak')).toBe(false);
    expect(functions.isStrongPassword('12345678')).toBe(false);
  });
});

// Test for isDate()
describe('isDate()', () => {
  test('returns true for valid dates', () => {
    expect(functions.isDate('12/31/2023')).toBe(true);
    expect(functions.isDate('1/1/2023')).toBe(true);
  });

  test('returns false for invalid dates', () => {
    expect(functions.isDate('2023/12/31')).toBe(false);
    expect(functions.isDate('313/12/2023')).toBe(false);
  });
});

// Test for isHexColor()
describe('isHexColor()', () => {
  test('returns true for valid hex colors', () => {
    expect(functions.isHexColor('#123ABC')).toBe(true);
    expect(functions.isHexColor('#789')).toBe(true);
  });

  test('returns false for invalid hex colors', () => {
    expect(functions.isHexColor('fsdf')).toBe(false);
    expect(functions.isHexColor('#XYZ')).toBe(false);
  });
});

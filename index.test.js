const { formatTitle, shortenBio, convertLength } = require('./public/utils');

let testData = {
  id: 1,
  firstName: 'Patten',
  lastName: 'Goforth',
  bio: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
  datetime: '2022-03-14 8:00:00',
  title: 'nulla ac',
  length: 65,
  floor: 5,
  roomNumber: 3,
};

test('checks that 2 is 2', () => {
  expect(2).toBe(2);
});

describe('formatTitle should', () => {
  test('checks that all words are capitalized in a title', () => {
    expect(formatTitle(testData.title)).toBe('Nulla Ac');
  });
  test('returns a string', () => {
    expect(typeof formatTitle(testData.title)).toBe('string');
  });
});

describe('shortenBio should', () => {
  test('remove all newlines from a bio', () => {
    expect(shortenBio(testData.bio).includes('\n')).not.toContain('\n');
  });
});

let a = { a: 1, b: 2 };
let b = { a: 1, b: 2 };
let c = a;
let d = { a: 1, b: 3 };

test('test that an object is an object', () => {
  expect(a).not.toEqual(d);
  expect(c).toBe(a);
});

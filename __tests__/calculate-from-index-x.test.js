import calcFromIndex from '../src/calculate-from-index-x';

describe('calcFromIndex', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof calcFromIndex).toBe('function');
  });

  it('should throw when target not undefined', function() {
    expect.assertions(3);
    expect(function() {
      calcFromIndex();
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      /* eslint-disable-next-line no-void */
      calcFromIndex(void 0);
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      calcFromIndex(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return the correct values for array-like objects', function() {
    expect.assertions(1);
    const subjects = [
      'abc',
      [1, 2, 3],
      {
        0: 1,
        1: 2,
        2: 3,
        length: 3,
      },
    ];

    /* eslint-disable-next-line no-void */
    const values = [-Infinity, -1, 0, 1, Infinity, NaN, void 0, null, '', '10', false, true];

    const exs = [0, 2, 0, 1, Infinity, 0, 0, 0, 0, 10, 0, 1];

    const expected = subjects.map(function(subject) {
      return values.map(function(value) {
        return calcFromIndex(subject, value);
      });
    });

    const actual = subjects.map(function() {
      return exs;
    });

    expect(actual).toStrictEqual(expected);
  });

  it('should return the correct values non array-like objects', function() {
    expect.assertions(1);
    const subjects = [
      1,
      true,
      function(a, b) {
        return b;
      },
      /abc/i,
      new Date(),
    ];

    /* eslint-disable-next-line no-void */
    const values = [-Infinity, -1, 0, 1, Infinity, NaN, void 0, null, '', '10', false, true];

    const expected = subjects.map(function() {
      return values.map(function() {
        return 0;
      });
    });

    const actual = subjects.map(function(subject) {
      return values.map(function(value) {
        return calcFromIndex(subject, value);
      });
    });

    expect(actual).toStrictEqual(expected);
  });
});

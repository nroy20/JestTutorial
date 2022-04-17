const sum = require('./addition')

test('check if addition adds two numbers', () => {
    expect(sum(1,2)).toBe(3);
    expect(sum(3,4)).not.toBe(3);
    expect(sum(5,6)).toBeLessThan(12);

})

//for more information about matchers: https://jestjs.io/docs/using-matchers
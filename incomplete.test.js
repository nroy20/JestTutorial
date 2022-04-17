const randomMath = require('./incomplete')

test('check for full coverage', () => {
    expect(randomMath(10)).toBe(50);
    expect(randomMath(150)).toBe(300);
})

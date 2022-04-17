const cloneArray = require('./clone')

test('check if array is cloned', () => {
    const correctArray = [1, 2, 3]
    expect(cloneArray(correctArray)).not.toBe(correctArray);
    expect(cloneArray(correctArray)).toEqual(correctArray);
})
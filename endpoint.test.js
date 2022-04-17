const getUserData = require('./endpoint')
const {
    GET_USER_DATA_INPUT,
    GET_USER_DATA_OUTPUT
  } = require('./mock-data');

test('check if get request returns data', () => {
    const response = getUserData(GET_USER_DATA_INPUT);
    expect(response).toEqual(GET_USER_DATA_OUTPUT);
})

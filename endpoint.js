const _ = require('lodash');

function getUserData(body) {
    const userData = body;

    // if for some reason, there is no user data to work with
    if (!userData) {
      return "Error";
    }
    //const dataToReturn = _.omit(userData, ['authID']);

    return userData//dataToReturn
}

module.exports = getUserData
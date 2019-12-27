const User = require('../models/User');

const generateUniqueUsername = async proposedName => {
  try {
    const user = await User.findOne({ username: proposedName });

    if (user) {
      proposedName += Math.floor(Math.random() * 100 + 1);
      return generateUniqueUsername(proposedName);
    }

    return proposedName;
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { generateUniqueUsername };

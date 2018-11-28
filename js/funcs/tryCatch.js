const rai = {};

const tryCatchTester = () => {
  try {
    rai.rai();
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = tryCatchTester;

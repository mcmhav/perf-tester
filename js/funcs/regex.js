const actualReg = /\/api\/metadata\/*/;

const regex = url => {
  return actualReg.test(url);
};

module.exports = regex;

const customReg = '/api/metadata/*';

const customMatcher = url => {
  const wildCardPos = customReg.indexOf('*');
  if (wildCardPos > 0) {
    return url.startsWith(customReg.substring(0, wildCardPos));
  } else if (wildCardPos === 0) {
    return url.endsWith(customReg.substring(wildCardPos + 1, customReg.length));
  } else {
    return url === customReg;
  }
};

module.exports = customMatcher;

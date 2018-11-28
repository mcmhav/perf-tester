const cTable = require('console.table');

const opts = {
  ITERATIONS:10 ** 8
}

const timeIt = ({ func, funcArgs = {}, info }, outputTable, options) => {
  const start = process.hrtime.bigint();
  for (var i = 0; i < options.ITERATIONS; i++) {
    func(funcArgs);
  }
  const done = process.hrtime.bigint();
  const diff = done - start;

  outputTable.push({
    functionName: func.name,
    'timeTaken (ms)': diff / 1000000n,
    'timeTaken (ns)': diff,
    iterations: options.ITERATIONS
  });
};

const timeArray = (functions, options = opts) => {
  const outputTable = [];

  functions.forEach(func => {
    timeIt(func, outputTable, options);
  });

  const table = cTable.getTable(outputTable);
  console.log(table);
};

module.exports = timeArray;

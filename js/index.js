const program = require('commander');
const pjson = require('./package.json');

const timer = require('./timer');

const regex = require('./funcs/regex');
const customMatcher = require('./funcs/customMatcher');
const ifTester = require('./funcs/if');
const tryCatchTester = require('./funcs/tryCatch');

function collect(val, memo) {
  memo.push(val);
  return memo;
}

program
  .version(pjson.version)
  .option('-i, --iterations <n>', 'Iterations', parseFloat, 10 ** 6)
  .option(
    '-f, --functionPath [value]',
    'Function to time, can use multiple times',
    collect,
    []
  )
  .parse(process.argv);

const missString =
  '/api/documentprofiles/edvardgrieg_EG_DOC_23380E-KVEST-342-O-VA-00002';
const hitString = '/api/metadata/edvardgrieg_EG_DOC_23380E-KVEST-342-O-VA-00002';

const options = {
  ITERATIONS: program.iterations
};

timer(
  [
    // { func: customMatcher, funcArgs: hitString },
    // { func: customMatcher, funcArgs: missString },
    // { func: regex, funcArgs: hitString },
    // { func: regex, funcArgs: missString },
    { func: ifTester },
    { func: tryCatchTester }
    // { func: createNewDateTime },
    // { func: createhrtime }
  ],
  options
);

// Until 67828a5 lands in React Native, we monkey-patch the CLI configuration
// to allow a 'vr' platform. This only needs to run after 'npm install'
const fs = require('fs');
const path = require('path');

const rn = require.resolve('react-native');
const resolver = path.resolve(
  rn.substr(0, rn.lastIndexOf(path.sep)),
  '..',
  '..',
  'packager',
  'defaults.js'
);

const fileContents = fs.readFileSync(resolver, 'utf8').replace(
  "['ios', 'android', 'windows', 'web']",
  "['ios', 'android', 'vr', 'windows', 'web']"
).replace(
  "'parse',",
  "'parse', 'react-vr',"
);
fs.writeFileSync(resolver, fileContents);

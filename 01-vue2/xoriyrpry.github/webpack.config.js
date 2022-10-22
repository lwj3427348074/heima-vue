const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/index1.js'),
  output: {
    filename: 'main1.js',
    path: path.resolve(__dirname, 'dist1'),
  },
};

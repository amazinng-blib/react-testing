import React from 'react';

const App = () => {
  return (
    <div>
      <h2>Learn React</h2>

      <h2>Ernest</h2>
    </div>
  );
};

export default App;

// # name: Node.js CI

// # on: [pull_request]

// # jobs:
// #   test:
// #     runs-on: Windows-latest

// #     strategy:
// #       matrix:
// #         node-version: [16.x]

// #     steps:
// #       - uses: actions/checkout@v2
// #       - name: Use Node.js ${{ matrix.node-version }}
// #         uses: actions/setup-node@v1
// #         with:
// #           node-version: ${{ matrix.node-version }}
// #       - name: Setup Node
// #         run: npm ci
// #       - name: tests
// #         run: npm test

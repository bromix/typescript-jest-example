module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  reporters: [
    'default',
    'buildkite-test-collector/jest/reporter'
  ],
  testLocationInResults: true
};
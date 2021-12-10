// index.test.js
const pluginTester = require('babel-plugin-tester').default
const myPlugin = require('./index')

pluginTester({
  plugin: myPlugin,
  tests: [
    {
      code: 'a**b',
      output: 'Math.pow(a, b);',
      title: '操作符'
    },
    {
      code: 'a**=b',
      snapshot: true,
      title: '赋值'
    }
  ]
})

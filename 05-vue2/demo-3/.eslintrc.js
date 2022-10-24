module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    // 代码中不允许出现console,在发布阶段报warn警告,开发阶段off关闭这个规则
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 代码中不允许出现debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 在方法的形参()之前,是否必须有空格
    'space-before-function-paren': ['warn', 'never']
  }
}

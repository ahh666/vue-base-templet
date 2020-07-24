module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    // 生产环境不允许debugger
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    // 忽略行结束格式 LF 和 CRLF
    'linebreak-style': [0, 'error', 'windows'],
    // 允许直接使用 require()
    'global-require': 0,
    // 函数入参直接使用
    'no-param-reassign': ['error', { props: false }],
    // 行尾不要分号
    semi: ['error', 'never'],
    // 允许import引入本地文件时不带后缀
    'import/extensions': 0,
    // 引入本地文件可以不用详细路径
    'import/no-unresolved': 0,
    // 组件名称必须是大驼峰
    'vue/name-property-casing': ['error', 'PascalCase'],
    // vue Html元素单标签关闭方式
    'vue/html-self-closing': [
      'error',
      {
        html: { normal: 'never', void: 'always' },
        svg: 'always',
        math: 'always',
      },
    ],
    // 组件在template内必须使用 PascalCase 格式
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: false,
      ignores: [],
    }],
    // 允许标识符以下划线开头
    'no-underscore-dangle': 0,
  },
}

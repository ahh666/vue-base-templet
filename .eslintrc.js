/*
 * @Description: Description
 * @Author: 艾欢欢
 * @Date: 2020-07-24 11:17:07
 * @LastEditTime: 2021-07-23 14:41:47
 * @LastEditors: 艾欢欢<ahh666@qq.com>
 * @FilePath: \vue-base-templet\.eslintrc.js
 */
module.exports = {
  root: true,

  globals: {
    process: true,
  },

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaFeatures: {
      // 支持装饰器
      legacyDecorators: true,
      jsx: true,
    },
  },

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  extends: ['plugin:vue/recommended', 'eslint:recommended'],
  plugins: ['babel', 'prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid', //  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
        bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
        eslintIntegration: true, // 让prettier使用eslint的代码格式进行校验
        htmlWhitespaceSensitivity: 'css', // 空格遵守CSS显示属性的默认值
        insertPragma: false,
        jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
        jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
        printWidth: 120, // 超过最大值换行
        proseWrap: 'preserve', // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: false, // 句尾不添加分号
        singleQuote: true, // 使用单引号代替双引号
        tabWidth: 2, // 缩进字节数
        trailingComma: 'all', // 在对象或数组最后一个元素后面是否加逗号
        useTabs: false, // 缩进不使用tab，使用空格
      },
    ],
    // 使用2个空格缩进
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true,
        ignoredNodes: ['ConditionalExpression'],
      },
    ],
    // 是否能使用debugger,开发可以，线上不可以
    'no-debugger': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    // switch必须提供 default
    'default-case': 'error',
    // 禁止扩展原生属性
    'no-extend-native': 'error',
    // 禁止一成不变的循环,防止代码出现死循环
    'no-unmodified-loop-condition': 'error',
    // 禁止在变量未声明之前使用
    'no-use-before-define': 'error',
    // 代码后不使用分号
    semi: ['error', 'never'],
    // 注释 // 或 /* 之后必须有一个空格
    'spaced-comment': ['error', 'always'],
    // 禁止重复导入模块，对于同一模块内内容，应一次导入
    'no-duplicate-imports': 'error',
    // 必须使用let 或 const, 不能使用var
    'no-var': 'error',
    // js中应使用单引号替代双引号
    quotes: ['error', 'single'],
    // 要求大括号内必须有空格
    'object-curly-spacing': ['error', 'always'],
    // 数组前后不需要添加空格
    'array-bracket-spacing': ['error', 'never'],
    // 箭头函数前后必须要有空格
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    // 代码中可出现console
    'no-console': 'off',
    // 正则中可以出现控制字符
    'no-control-regex': 'off',
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        // 可以声明未使用的h，方便jsx
        argsIgnorePattern: 'h',
      },
    ],
    // 行注释必须在行上面
    // 'line-comment-position': ['error', { position: 'above' }],
    // 一个函数最多能指定4个参数
    'max-params': ['error', { max: 4 }],
    // 构造函数必须首字母大写
    // "new-cap":['error', {"newIsCap": true} ],
    // vue 属性顺序
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT',
        ],
      },
    ],
    // 一行最多几个属性
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 5,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
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
    // 组件在template内必须使用 kebab-case 格式 // PascalCase
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    // template 内必须使用 ===
    'vue/eqeqeq': 'error',
    // scss deep 写法必须时 ::v-deep , 需要在这一处将 :v-deep 添加为例外
    // "selector-pseudo-element-no-unknown":["error","v-deep"],
    // 允许使用v-html
    'vue/no-v-html': 0,
    // 禁用隐式的eval() 比如 setTimeout('alert();', 100)
    'no-implied-eval': 'error',
    'no-inner-declarations': 'off',
  },
}

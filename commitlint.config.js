export default {
  // 继承常规提交规范
  extends: ['@commitlint/config-conventional'],

  // 自定义规则
  rules: {
    // 类型枚举，定义允许的提交类型
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复bug
        'docs', // 文档更新
        'style', // 代码格式化，不影响代码逻辑
        'refactor', // 重构代码
        'perf', // 性能优化
        'test', // 测试相关
        'build', // 构建系统或外部依赖项的更改
        'ci', // CI配置文件和脚本的更改
        'chore', // 其他不修改src或test文件的更改
        'revert', // 回滚之前的提交
        'wip', // 进行中的工作
        'workflow', // 工作流程改进
        'types', // 类型定义文件更改
      ],
    ],

    // 主题不能为空
    'subject-empty': [2, 'never'],

    // 主题长度限制
    'subject-max-length': [2, 'always', 100],

    // 主题不能以句号结尾
    'subject-full-stop': [2, 'never', '.'],

    // 主题格式（允许中文）
    'subject-case': [0],

    // 类型不能为空
    'type-empty': [2, 'never'],

    // 类型格式为小写
    'type-case': [2, 'always', 'lower-case'],

    // 头部最大长度
    'header-max-length': [2, 'always', 100],

    // 正文前需要空行
    'body-leading-blank': [1, 'always'],

    // 脚注前需要空行
    'footer-leading-blank': [1, 'always'],
  },

  // 自定义提示信息
  prompt: {
    messages: {
      type: '选择你要提交的类型:',
      scope: '选择一个提交范围 (可选):',
      customScope: '请输入自定义的提交范围:',
      subject: '填写简短精炼的变更描述:',
      body: '填写更加详细的变更描述 (可选)。使用 "|" 换行:',
      breaking: '列举非兼容性重大的变更 (可选)。使用 "|" 换行:',
      footerPrefixSelect: '选择关联issue前缀 (可选):',
      customFooterPrefix: '输入自定义issue前缀:',
      footer: '列举关联issue (可选) 例如: #31, #I3244:',
      confirmCommit: '是否提交或修改commit?',
    },
    types: [
      {
        value: 'feat',
        name: 'feat:     ✨ 新增功能',
        emoji: '✨',
      },
      {
        value: 'fix',
        name: 'fix:      🐛 修复缺陷',
        emoji: '🐛',
      },
      {
        value: 'docs',
        name: 'docs:     📝 文档变更',
        emoji: '📝',
      },
      {
        value: 'style',
        name: 'style:    💄 代码格式（不影响功能，例如空格、分号等格式修正）',
        emoji: '💄',
      },
      {
        value: 'refactor',
        name: 'refactor: ♻️  代码重构（不包括 bug 修复、功能新增）',
        emoji: '♻️',
      },
      {
        value: 'perf',
        name: 'perf:     ⚡️ 性能优化',
        emoji: '⚡️',
      },
      {
        value: 'test',
        name: 'test:     ✅ 添加疏漏测试或已有测试改动',
        emoji: '✅',
      },
      {
        value: 'build',
        name: 'build:    📦️ 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）',
        emoji: '📦️',
      },
      {
        value: 'ci',
        name: 'ci:       🎡 修改 CI 配置、脚本',
        emoji: '🎡',
      },
      {
        value: 'chore',
        name: 'chore:    🔨 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
        emoji: '🔨',
      },
      {
        value: 'revert',
        name: 'revert:   ⏪️ 回滚 commit',
        emoji: '⏪️',
      },
      {
        value: 'wip',
        name: 'wip:      🚧 开发中',
        emoji: '🚧',
      },
      {
        value: 'workflow',
        name: 'workflow: 📋 工作流程改进',
        emoji: '📋',
      },
      {
        value: 'types',
        name: 'types:    🏷️  类型定义文件更改',
        emoji: '🏷️',
      },
    ],
    useEmoji: true,
    scopes: [
      'root', // 根目录
      'core', // 核心功能
      'api', // API相关
      'ui', // 用户界面
      'config', // 配置文件
      'deps', // 依赖项
      'test', // 测试
      'build', // 构建
      'ci', // 持续集成
      'docs', // 文档
      'style', // 样式
      'refactor', // 重构
      'perf', // 性能
      'release', // 发布
    ],
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [
      { value: 'closed', name: 'closed:   ISSUES has been processed' },
    ],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultScope: '',
    defaultSubject: '',
  },
}

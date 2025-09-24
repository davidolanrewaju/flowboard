module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation
        'style', // Formatting, missing semi colons, etc
        'refactor', // Code change that neither fixes a bug nor adds a feature
        'test', // Adding tests
        'chore', // Maintenance
        'wip', // Work in progress
        'hotfix', // Critical fixes
        'build', // Build process
        'ci', // Continuous Integration
        'perf', // Performance improvements
        'revert', // Reverts a previous commit
      ],
    ],
    // Allow uppercase first letter in subject
    'subject-case': [0],
    // Allow longer subjects for your team
    'subject-max-length': [2, 'always', 60],
    // Require scope for certain types
    'scope-empty': [2, 'never', ['feat', 'fix']],
  },
};

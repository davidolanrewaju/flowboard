module.exports = {
  extends: ['@commitlint/config-conventional'],
  // Simplified rules for debugging
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'ci', 'build', 'revert']],
    // Subject must be lowercase
    'subject-case': [2, 'always', 'lower-case'],
    // Subject must not end with a period
    'subject-full-stop': [2, 'never', '.'],
    // Subject must be between 1 and 50 characters
    'subject-min-length': [2, 'always', 1],
    'subject-max-length': [2, 'always', 50],
    // Header (type + subject) must be max 72 characters
    'header-max-length': [2, 'always', 72],
    // Body should wrap at 100 characters
    'body-max-line-length': [2, 'always', 100],
    // Footer should wrap at 100 characters
    'footer-max-line-length': [2, 'always', 100],
    // Type must be lowercase
    'type-case': [2, 'always', 'lower-case'],
    // Scope must be lowercase (if provided)
    'scope-case': [2, 'always', 'lower-case'],
  },
};

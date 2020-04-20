module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': () => [0, "never"],
    'subject-case': () => [0, "never"],
  }
}

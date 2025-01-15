module.exports = {
  extends: ['@commitlint/config-conventional'],
  plugins: [''],
  rules: {
    'header-max-length': [0],
    'function-rules/header-max-length': [
      2,
      'always',
      (parsed: { header: string }) => {
        if (parsed.header.length > 100) {
          return [
            false,
            `the commit must not be longer than 100 characters, the current length is ${parsed.header.length}`,
          ];
        }
        if (
          !parsed.header.match(
            /^((feat)|(test)|(build)|(chore)|(ci)|(docs)|(fix)|(perf)|(refactor)|(style)): .+/gm,
          )
        ) {
          return [
            false,
            `the commit message must follow the pattern "type: message"`,
          ];
        }
        return [true];
      },
    ],
  },
};

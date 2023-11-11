module.exports = {
  extends: ["universe/native", "universe/shared/typescript-analysis"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "prettier/prettier": "off",
        "@typescript-eslint/array-type": "off",
      },
    },
  ],
};

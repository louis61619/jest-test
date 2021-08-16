module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    // 模塊別名配置
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  // 指定報告生成路徑
  collectCoverage: true,
  coverageDirectory: '<rootDir>/tests/unit/coverage'
  // 決定測試哪些
  // collectCoverageFrom: [
  //   'src/components/**/*.vue',
  //   'src/utils/**/*.ts',
  //   'src/store/modules/*.ts',
  //   '!src/utils/axios.ts',
  //   '!src/utils/notify.ts'
  // ]
}

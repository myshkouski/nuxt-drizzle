# Changelog


## v0.2.0

[compare changes](https://github.com/myshkouski/nuxt-drizzle/compare/v0.2.0-beta.2...v0.2.0)

### 💅 Refactors

- **module:** Use serverDir instead of srcDir for base directory resolution ([eca71e8](https://github.com/myshkouski/nuxt-drizzle/commit/eca71e8))

### 📖 Documentation

- Add Try it section with Stackblitz link and playground reference ([e609cd6](https://github.com/myshkouski/nuxt-drizzle/commit/e609cd6))

### ❤️ Contributors

- Alexei Myshkouski ([@myshkouski](https://github.com/myshkouski))

## v0.2.0-beta.2

[compare changes](https://github.com/myshkouski/nuxt-drizzle/compare/v0.2.0-beta.1...v0.2.0-beta.2)

### 📖 Documentation

- Update README and nuxt config to reference renamed fixture layer package ([d80df43](https://github.com/myshkouski/nuxt-drizzle/commit/d80df43))

### 🏡 Chore

- Rename fixture packages and bump nitro-drizzle to beta.6 ([3e077a1](https://github.com/myshkouski/nuxt-drizzle/commit/3e077a1))

### ❤️ Contributors

- Alexei Myshkouski ([@myshkouski](https://github.com/myshkouski))

## v0.2.0-beta.1

[compare changes](https://github.com/myshkouski/nuxt-drizzle/compare/v0.1.3...v0.2.0-beta.1)

### 🚀 Enhancements

- **module:** Add type template generation for shared declarations ([d077fcf](https://github.com/myshkouski/nuxt-drizzle/commit/d077fcf))
- **fixtures/nitro-api:** Migrate from useDatasource to useDialect with driver-specific implementations ([ce8a956](https://github.com/myshkouski/nuxt-drizzle/commit/ce8a956))
- **test:** Add comments field to e2e API test fixtures ([d6160c6](https://github.com/myshkouski/nuxt-drizzle/commit/d6160c6))
- **playground:** Add database driver configuration to nuxt config ([62087ec](https://github.com/myshkouski/nuxt-drizzle/commit/62087ec))

### 🩹 Fixes

- **playground:** Remove unpinned nuxt-drizzle dependency ([e5686cc](https://github.com/myshkouski/nuxt-drizzle/commit/e5686cc))
- **deps:** Update nitro-drizzle to 0.3.0-beta.2 ([d134375](https://github.com/myshkouski/nuxt-drizzle/commit/d134375))
- **config:** Correct github username casing in package urls ([2901a3e](https://github.com/myshkouski/nuxt-drizzle/commit/2901a3e))
- **deps:** Update nitro-drizzle to 0.3.0-beta.4 ([cead0f4](https://github.com/myshkouski/nuxt-drizzle/commit/cead0f4))
- **fixtures:** Update nitro-drizzle datasource config to use drivers array ([3e6ae9f](https://github.com/myshkouski/nuxt-drizzle/commit/3e6ae9f))
- **fixtures:** Correct catalog reference syntax in nitro-api package.json ([3ce14d8](https://github.com/myshkouski/nuxt-drizzle/commit/3ce14d8))
- **fixtures:** Update nitro-api drizzle configs to use drivers array and new baseDir ([16bf667](https://github.com/myshkouski/nuxt-drizzle/commit/16bf667))
- **config:** Exclude esbuild from minimum release age check ([2f96959](https://github.com/myshkouski/nuxt-drizzle/commit/2f96959))

### 💅 Refactors

- **deps:** Restructure pnpm catalogs into default and drivers groups ([e4b33bc](https://github.com/myshkouski/nuxt-drizzle/commit/e4b33bc))
- **fixtures:** Remove nitro-api fixture and migrate to Nitro layer composition ([b3e7776](https://github.com/myshkouski/nuxt-drizzle/commit/b3e7776))
- **test:** Migrate drizzle datasource config in e2e nuxt.config.ts to driver-based format ([ca8e85e](https://github.com/myshkouski/nuxt-drizzle/commit/ca8e85e))
- **playground:** Simplify nuxt config extends syntax ([eb9a9ef](https://github.com/myshkouski/nuxt-drizzle/commit/eb9a9ef))

### 📖 Documentation

- **readme:** Update configuration examples to reflect driver-based datasource config and add project structure ([4a1b2ca](https://github.com/myshkouski/nuxt-drizzle/commit/4a1b2ca))

### 🏡 Chore

- **playground:** Add dev:prepare script ([7f0f7d6](https://github.com/myshkouski/nuxt-drizzle/commit/7f0f7d6))
- **config:** Add oxfmt configuration ignoring CHANGELOG.md ([79ccbd7](https://github.com/myshkouski/nuxt-drizzle/commit/79ccbd7))
- **scripts:** Add fmt command using oxfmt ([4f68572](https://github.com/myshkouski/nuxt-drizzle/commit/4f68572))
- **package:** Add fmt:check script using oxfmt --check ([f7af5b9](https://github.com/myshkouski/nuxt-drizzle/commit/f7af5b9))
- **tooling:** Replace eslint with oxlint and oxfmt ([095952a](https://github.com/myshkouski/nuxt-drizzle/commit/095952a))
- Remove npmrc and update pnpm configuration ([7f02a01](https://github.com/myshkouski/nuxt-drizzle/commit/7f02a01))

### 🤖 CI

- **publish:** Move module build step after test run ([ca4da6c](https://github.com/myshkouski/nuxt-drizzle/commit/ca4da6c))
- **release:** Enable npm provenance and explicit latest tag ([c91f5be](https://github.com/myshkouski/nuxt-drizzle/commit/c91f5be))
- Split publish workflow into test and publish jobs with branch triggers ([9fb756d](https://github.com/myshkouski/nuxt-drizzle/commit/9fb756d))

### ❤️ Contributors

- Alexei Myshkouski ([@myshkouski](https://github.com/myshkouski))

## v0.1.3

[compare changes](https://github.com/Myshkouski/nuxt-drizzle/compare/v0.1.2...v0.1.3)

### 💅 Refactors

- **fixtures:** Remove prepare script from nitro-api" ([c4b21af](https://github.com/Myshkouski/nuxt-drizzle/commit/c4b21af))
- Clarify ts-expect-error comments and suppress vue lint rule ([18e50c9](https://github.com/Myshkouski/nuxt-drizzle/commit/18e50c9))

### 🤖 CI

- **publish:** Build module and run dev:prepare in workflow ([e3d09b6](https://github.com/Myshkouski/nuxt-drizzle/commit/e3d09b6))

### ❤️ Contributors

- Alexei Myshkouski ([@Myshkouski](https://github.com/Myshkouski))

## v0.1.2

[compare changes](https://github.com/Myshkouski/nuxt-drizzle/compare/v0.1.1...v0.1.2)

### 💅 Refactors

- **fixtures:** Remove prepare script from nitro-api ([926663f](https://github.com/Myshkouski/nuxt-drizzle/commit/926663f))

### ❤️ Contributors

- Alexei Myshkouski ([@Myshkouski](https://github.com/Myshkouski))

## v0.1.1


### 🚀 Enhancements

- Implement nitro-drizzle based server integration ([120776e](https://github.com/Myshkouski/nuxt-drizzle/commit/120776e))

### 💅 Refactors

- Rename module to nuxt-drizzle ([5335fd6](https://github.com/Myshkouski/nuxt-drizzle/commit/5335fd6))
- **module:** Use resolveModule for server plugin resolution ([3825513](https://github.com/Myshkouski/nuxt-drizzle/commit/3825513))

### 🏡 Chore

- Initial project setup ([bfccea5](https://github.com/Myshkouski/nuxt-drizzle/commit/bfccea5))
- **release:** Streamline release script via changelogen push ([8044e60](https://github.com/Myshkouski/nuxt-drizzle/commit/8044e60))

### ✅ Tests

- **e2e:** Remove prepare script from test fixture ([6d638ed](https://github.com/Myshkouski/nuxt-drizzle/commit/6d638ed))

### 🤖 CI

- **workflows:** Run pnpm setup before node setup ([fd11cb5](https://github.com/Myshkouski/nuxt-drizzle/commit/fd11cb5))
- **workflows:** Add publish workflow and remove standalone ci ([cb84172](https://github.com/Myshkouski/nuxt-drizzle/commit/cb84172))

### ❤️ Contributors

- Alexei Myshkouski ([@Myshkouski](https://github.com/Myshkouski))


<!--
Get your module up and running quickly.

Find and replace all on all files (CMD+SHIFT+F):
- Name: My Module
- Package name: nuxt-drizzle
- Description: My new Nuxt module
-->

# nuxt-drizzle

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]
[![Nuxt][nuxt-src]][nuxt-href]

A [Nuxt](https://nuxt.com) module that brings [Drizzle ORM](https://orm.drizzle.team) to the Nuxt server layer, built on top of [`nitro-drizzle`](https://www.npmjs.com/package/nitro-drizzle).

`nuxt-drizzle` is a thin Nuxt integration layer around [`nitro-drizzle`](https://www.npmjs.com/package/nitro-drizzle). It wires Drizzle into Nitro's server runtime — handling config discovery, migration execution, type generation, server virtual modules, and asset bundling — so you can work with one or many Drizzle datasources directly inside your Nuxt server routes and plugins.

- 🧩 First-class [`nitro-drizzle`](https://www.npmjs.com/package/nitro-drizzle) integration for Nuxt
- 🗄️ Multiple datasources (e.g. `sqlite`, `postgresql`, `mysql`) in a single app
- 🚀 Automatic migrations on server init (`migrateOnInit`)
- 🔌 Configurable connectors and drivers (e.g. `pglite`, `sqlite`)
- 🧠 Typed `useDatasource()` access from server routes and Nitro plugins
- 🛠️ Zero-config type templates and virtual modules generated on the fly

## Project Structure

```
.
├── fixtures/nuxt-app/    # Fixture Nuxt app used as the base for the playground and e2e tests
├── playground/           # Runnable Nuxt app for local development and trying the module
├── test/e2e/             # End-to-end tests for datasource functionality
├── src/                  # Module source
└── dist/                 # Built module output
```

- **`fixtures/nuxt-app/`** — A fixture Nuxt app that demonstrates the module with two datasources (`content` using sqlite, `users` using pglite). It extends `@nitro-drizzle/fixtures-blog-api-legacy-layer` for API routes and uses `@nuxt/ui` for the frontend. Both the playground and e2e tests extend this fixture.
- **`playground/`** — A runnable Nuxt app that extends the fixtures app with `install: true`. It overrides datasource drivers to use in-memory drivers (`:memory:` / `memory://`) for local development. Run `pnpm run dev` from the repo root to start it.
- **`test/e2e/`** — End-to-end tests that extend the fixtures app and verify datasource functionality via `$fetch`.

## Quick Setup

Install the module to your Nuxt application with one command:

```bash
npx nuxt module add nuxt-drizzle
```

Then register it in `nuxt.config.ts` and configure your datasource drivers via `runtimeConfig`:

```ts
export default defineNuxtConfig({
  modules: ["nuxt-drizzle"],
  runtimeConfig: {
    drizzle: {
      users: {
        driver: "pglite",
        pglite: {
          dataDir: "./data/users",
        },
      },
      content: {
        driver: "sqlite",
        sqlite: {
          url: "./data/content.db",
        },
      },
    },
  },
});
```

Define a datasource with `defineConfig` from `nitro-drizzle/config`:

```ts
// server/drizzle/users/drizzle-pglite.config.ts
import { defineConfig } from "nitro-drizzle/config";

export default defineConfig(
  {
    strict: true,
    dialect: "postgresql",
    schema: ["./pg/schema/users.ts"],
    out: "./pg/migrations",
  },
  import.meta.url,
);
```

Use it from a server route via `nitro-drizzle/runtime`:

```ts
// server/api/v1/users.get.ts
import { useDatasource } from "nitro-drizzle/runtime";

export default defineEventHandler(async (event) => {
  await event.context.drizzle.waitReady();

  const { database, schema } = await useDatasource("users");
  const users = await database.select().from(schema.users).limit(10);

  return { users };
});
```

That's it! You can now use `nuxt-drizzle` in your Nuxt app ✨

> Under the hood, all database wiring, migrations, and runtime helpers come from [`nitro-drizzle`](https://www.npmjs.com/package/nitro-drizzle). See its docs for the full configuration reference (`nitro-drizzle/config`, `nitro-drizzle/runtime`, `nitro-drizzle/utils`).

## Local Development

Run the playground app to try the module locally:

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Start the playground dev server
pnpm run dev
```

The playground at `playground/` extends `fixtures/nuxt-app` and uses in-memory drivers for quick iteration.

### Fixtures

The fixture app at `fixtures/nuxt-app/` provides a full Nuxt app with two datasources and UI pages. It is used as the base for both the playground and e2e tests.

### End-to-End Tests

Run the e2e tests to verify datasource functionality:

```bash
pnpm run test
```

## Contribution

<details>
  <summary>Local development</summary>

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm run dev:prepare

# Develop with the playground
pnpm run dev

# Build the playground
pnpm run dev:build

# Run Vitest
pnpm run test
pnpm run test:watch

# Run type checks
pnpm run test:types

# Run ESLint
pnpm run lint

# Format code
pnpm run fmt

# Check formatting
pnpm run fmt:check

# Release new version
pnpm run release
```

</details>

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-drizzle/latest.svg?style=flat&colorA=020420&colorB=00DC82
[npm-version-href]: https://npmjs.com/package/nuxt-drizzle
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-drizzle.svg?style=flat&colorA=020420&colorB=00DC82
[npm-downloads-href]: https://npm.chart.dev/nuxt-drizzle
[license-src]: https://img.shields.io/npm/l/nuxt-drizzle.svg?style=flat&colorA=020420&colorB=00DC82
[license-href]: https://npmjs.com/package/nuxt-drizzle
[nuxt-src]: https://img.shields.io/badge/Nuxt-020420?logo=nuxt
[nuxt-href]: https://nuxt.com

import path from "node:path";

export default defineNuxtConfig({
  modules: ["nuxt-drizzle"],
  drizzle: {
    baseDir: path.resolve(import.meta.dirname, "./server/db/drizzle"),
    migrations: {
      migrateOnInit: true,
    },
    datasources: {
      content: {
        drivers: ["sqlite"],
      },
      users: {
        drivers: ["pglite"],
      },
    },
  },
  runtimeConfig: {
    drizzle: {
      content: {
        driver: "",
        sqlite: {
          url: ":memory:",
        },
        d1: {
          binding: "content",
        },
      },
      users: {
        driver: "sqlite",
        postgresql: {
          url: "",
        },
        pglite: {
          dataDir: "memory://",
        },
        d1: {
          binding: "users",
        },
      },
    },
  },
});

import path from "node:path";

export default defineNuxtConfig({
  modules: ["nuxt-drizzle"],
  drizzle: {
    baseDir: path.resolve(import.meta.dirname, "./server/drizzle"),
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
});

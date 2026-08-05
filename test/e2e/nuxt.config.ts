export default defineNuxtConfig({
  extends: ["../../fixtures/nuxt-app"],
  runtimeConfig: {
    drizzle: {
      content: {
        driver: "sqlite",
        pglite: {
          dataDir: "memory://",
        },
        sqlite: {
          url: ":memory:",
        },
      },
      users: {
        driver: "pglite",
        pglite: {
          dataDir: "memory://",
        },
        sqlite: {
          url: ":memory:",
        },
      },
    },
  },
  compatibilityDate: "latest",
});

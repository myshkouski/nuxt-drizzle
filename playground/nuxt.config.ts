export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  extends: ["../fixtures/nuxt-app"],
  runtimeConfig: {
    drizzle: {
      content: {
        pglite: {
          dataDir: "memory://",
        },
        sqlite: {
          url: ":memory:",
        },
      },
      users: {
        pglite: {
          dataDir: "memory://",
        },
        sqlite: {
          url: ":memory:",
        },
      },
    },
  },
  devtools: { enabled: true },
});

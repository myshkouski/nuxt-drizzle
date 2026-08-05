import { defu } from "defu";

import { serverDir as baseLayerServerDir } from "nitro-drizzle-blog-api-legacy-layer";
import { name as BASE_LAYER_ID } from "nitro-drizzle-blog-api-legacy-layer/package.json";
import { fileURLToPath } from "node:url";

// The config extends fixture from `nitro-drizzle` repository.
// Layer feature is not documented well for `nitro`, so it hacky way to dedupe config and seeds for datasources.
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  nitro: {
    extends: [fileURLToPath(import.meta.resolve(BASE_LAYER_ID))],
  },
  hooks: {
    // `nitro.esbuild` property passed in `defu` that merges configurations instead of overriding.
    // Use hook to override `nitro.options.esbuild.options.exclude`.
    "nitro:config"(nitroConfig) {
      // ensure esbuild options is an object
      const esbuildConfig = defu(nitroConfig.esbuild, {
        options: {} as { exclude: readonly string[] },
      });

      // replace default `exclude: [/node_modules/]` to exclude Nitro layer from node_modules
      esbuildConfig.options.exclude = [new RegExp(`/node_modules/(.+/)?(?!${BASE_LAYER_ID})/`)];

      nitroConfig.esbuild = esbuildConfig;

      nitroConfig.scanDirs ||= [];
      nitroConfig.scanDirs.push(baseLayerServerDir);
    },
  },

  modules: ["@nuxt/ui"],
});

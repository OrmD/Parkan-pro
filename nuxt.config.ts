// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    baseURL: "/Parkan-pro/",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "shadcn-nuxt", "@nuxt/image", "@nuxt/fonts"],
  fonts: {
    families: [{ name: "Inter", provider: "google" }],
  },
  shadcn: {
    prefix: "ui",
    componentDir: "./components/ui",
  },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  icon: {
    serverBundle: {
      collections: ["uil", "mdi", "lucide"],
    },
  },
});

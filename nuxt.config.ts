export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxt/ui'],
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.Supabase_URL,
      supabaseAnonKey: process.env.Supabase_KEY,
    },
  },
  compatibilityDate: '2025-03-13',
})
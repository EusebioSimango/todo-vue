// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/styles/main.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ['@pinia/nuxt'],
	pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      'mapState',
      'mapActions',
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
	imports: {
    dirs: ['store', 'plugins'],
  },
})

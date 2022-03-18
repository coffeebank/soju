import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      instanceInfo: {
        hosterName: 'a friendly contributor',
        hosterCode: 'https://github.com/coffeebank/soju',
        hosterContact: 'sojumail [@] catdev.anonaddy.com',
        hosterLicense: 'https://github.com/coffeebank/soju/blob/master/LICENSE',
      },
      access_token: '',
      copyYear: '',
      spotifyData: [],
      spotifyMethod: 'api',
    }
  },
  mutations: {
    copyYear (state, data) {
      state.copyYear = data
    },
    access_token (state, data) {
      state.access_token = data
    },
    spotifyData (state, data) {
      state.spotifyData = data
    },
    spotifyMethod (state, data) {
      state.spotifyMethod = data
    }
  }
})

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(store)
app.mount('#app')

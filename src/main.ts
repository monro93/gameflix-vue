import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { createHead } from 'unhead'

import './assets/main.css'

const app = createApp(App)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const head = createHead()

app.use(createPinia())
app.use(router)

app.mount('#app')


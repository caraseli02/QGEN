import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './router';

//element dark mode https://element-plus.org/en-US/guide/dark-mode.html#dark-mode
import 'element-plus/theme-chalk/dark/css-vars.css'
import './assets/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

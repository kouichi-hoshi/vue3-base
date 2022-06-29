import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/foundation.css'
import './assets/css/main.scss'
import router from './router'

const app = createApp(App)
app.use(router).mount('#app')

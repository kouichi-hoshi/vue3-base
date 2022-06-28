import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/foundation.css'
import './assets/css/main.scss'
import router from './router'
import scrollIn from './functions/scrollIn.js'

const app = createApp(App)
app.directive('scrollIn', {
  mounted(el, binding) {
    scrollIn(el, binding)
  }
})

app.use(router).mount('#app')

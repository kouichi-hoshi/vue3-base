import { createApp } from 'vue'
import App from './App.vue'
import scroll from './functions/vScroll.js'
import './assets/css/foundation.css'
import './assets/css/main.scss'
import router from './router'

const app = createApp(App)
app.directive('scroll', {
  beforeMount(el) {
    scroll(el)
  }
})

app.use(router).mount('#app')

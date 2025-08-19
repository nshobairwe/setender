import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// TailwindCSS styles
import './assets/main.css'

// PrimeVue
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)

app.mount('#app')

import { createApp } from 'vue'
import Notifications from '@kyvg/vue3-notification'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(Notifications, { componentName: 'AppNotifications' })
app.mount('#app')

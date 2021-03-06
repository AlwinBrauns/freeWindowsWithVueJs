import { createApp } from 'vue'
import App from './App.vue'
import Window from './components/window/Window'
import WindowBody from './components/window/WindowBody'
import WindowHeader from './components/window/WindowHeader'

const app = createApp(App);
app.component('window', Window);
app.component('window-body', WindowBody);
app.component('window-header', WindowHeader);

app.mount('#app')

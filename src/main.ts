import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus'
import 'element-plus/dist/index.css'
import { i18n } from './i18n'

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { size: 'small', zIndex: 3000, locale: zhCn })
  .use(i18n)
  .mount('#app')

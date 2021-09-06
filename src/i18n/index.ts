import { createI18n } from 'vue-i18n'
import LANGZH from './language/zh'
import LANGEN from './language/en'

const i18n = createI18n({
  locale: localStorage?.getItem('language') === 'en-us' ? 'en' : 'zh',
  messages: {
    en: LANGEN,
    zh: LANGZH
  }
})

export { i18n }

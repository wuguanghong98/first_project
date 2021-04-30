import Vue from 'vue'
import VueI18n from 'vue-i18n'

import zh from  './base/zh'
import en from './base/en'

Vue.use(VueI18n)

export default new VueI18n({
//使用的默认语言为‘zh’
  locale: 'zh',
  messages: {
    zh: {
      ...zh
    },
    en: {
      ...en
    }
  }
})
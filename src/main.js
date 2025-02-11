// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
// import myIcons from './core/icons'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import VueAxios from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import themePluginConfig from '../config/themePluginConfig'
import VueDebounce from 'vue-debounce'
import FlagIcon from 'vue-flag-icon'
import { FormModel } from 'ant-design-vue'
import InputTag from 'vue-input-tag'
import './plugins/GlobalFunctions'
import './plugins/Converters'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
// import './mock'

import bootstrap from './core/bootstrap'
import './core/lazy_use'
import './permission' // permission control
import './utils/filter' // global filter
import './global.less'

Vue.config.productionTip = false

// Vue.prototype.$myIcons = myIcons
// mount axios to `Vue.$http` and `this.$http`
Vue.use(FormModel)
Vue.use(VueAxios)
Vue.use(FlagIcon)
Vue.use(VueDebounce, {
  defaultTime: '700ms'
})
Vue.component('pro-layout', ProLayout)
Vue.component('page-header-wrapper', PageHeaderWrapper)
Vue.component('input-tag', InputTag)

window.umi_plugin_ant_themeVar = themePluginConfig.theme

new Vue({
  router,
  store,
  i18n,
  created: bootstrap,
  render: h => h(App)
}).$mount('#app')

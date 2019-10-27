// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
// process.env.MOCK && require('@/mock')
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import axios from '@/api/http'
import VueAxios from 'vue-axios'

Vue.use(ElementUI)
Vue.use(VueAxios,axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
//将一个空的Vue实例放到根组件下，所有的子组件都能调用
window.vm = new Vue({
  el: '#app',
  ////自定义的事件总线对象，用于父子组件的通信
  data(){
	  return {
		  Bus:new Vue({

		  })
	  }
  },
  router,
	store,
  components: { App },
  template: '<App/>'
})

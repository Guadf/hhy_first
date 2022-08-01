import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import './assets/less/index.less'
import store from './store/index'
import http from 'axios'
import './api/mock'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = http
Vue.prototype.$confirm = ElementUI.MessageBox.confirm
Vue.prototype.$message = ElementUI.Message

router.beforeEach((to, from, next) => {
  store.commit('getToken')
  const token = store.state.user.token
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') { 
      next({name:'home'})
  }else {
    next()
  }
})


new Vue({
  render: h => h(App),
  store,
  router,
  created() {
    this.$store.commit('addMenu', router)
  }
}).$mount('#app')

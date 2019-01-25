import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/css/base.css' /*引入公共样式*/
import {
  log
} from './libs/tools'
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()

Es6Promise.polyfill()
Vue.config.productionTip = false

Vue.prototype.log = log;

Vue.use(iView);

router.beforeEach((to, from, next) => {
  console.log(to.path === '/login')
 

  switch (to.path) {
    case '/login':
    case '/changePas':
      store.commit('setIsLoginModel', true);
      break;
    default:
      store.commit('setIsLoginModel', false);
      break;
  }
  store.commit('setCurrentPage', to.path.substring(1));


  next();


  if (to.path === '/login') {
    console.log('是登陆页面')

  } else {
    console.log('非登陆页面')
    console.log('查看登陆状态：'+store.state.user.isLogin)
    if (!store.state.user.isLogin) {
      router.push({
        path: "/login"
      });
    }
  }
})
router.afterEach((to, from, next) => {

});




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用store
  components: {
    App
  },
  template: '<App/>'
})

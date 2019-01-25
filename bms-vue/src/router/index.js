import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'   //默认页面
// 订单管理
import orderManage from './complate/orderManage'
// 权限管理
import privilegeManage from './complate/privilegeManage'
// 登陆管理
import login from './complate/loginManage'

Vue.use(Router);

let defaultArr = [{
  path: '/',
  component: index,
}]

let routerArr = defaultArr.concat(orderManage,privilegeManage,login);

export default new Router({
    routes:routerArr
})

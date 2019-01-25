
// import login from "@/page/loginManage/login" //登陆页面
let router = [{
  path: '/login',
  name:'login',
  component: resolve => require(['@/page/loginManage/login'], resolve),
},{
    path: '/changePas',
    name:'changePas',
    component: resolve => require(['@/page/loginManage/changePas'], resolve),
  }]

export default router

// import orlderList from "@/page/orderManage/orderList"   //订单列表

let router = [{
  path: '/orderList',
  name:'orderList',
  component: resolve => require(['@/page/orderManage/orderList'], resolve),
}]

export default router

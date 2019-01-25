// import setPrivilege from "@/page/privilegeManage/setPrivilege" //权限配置
// import roleList from "@/page/privilegeManage/roleList" //角色列表
// import roleDefault from "@/page/privilegeManage/roleDefault" //角色默认权限


let router = [{
  path: '/setPrivilege',
  name:'setPrivilege',
  component: resolve => require(['@/page/privilegeManage/setPrivilege'], resolve),
}, {
  path: '/roleList',
  name:'roleList',
  component: resolve => require(['@/page/privilegeManage/roleList'], resolve),
}, {
  path: '/roleDefault',
  name:'roleDefault',
  component: resolve => require(['@/page/privilegeManage/roleDefault'], resolve),
}]


export default router

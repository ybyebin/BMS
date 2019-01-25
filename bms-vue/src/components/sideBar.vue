<template>
  <div v-if="!isLoginModel" class="side-left bg">
    <Sider hide-trigger class="bg">
      <Menu :active-name="currentPage" class="bg" theme="light" width="auto" @on-select="routerTo">
        <Submenu v-for="(item,index) in sideData" :key="index" :name="index+1">
          <template slot="title">{{item.title}}</template>
          <MenuItem
            class="bg-ivu-menu"
            v-for="(items,indexs) in item.detail"
            :key="indexs"
            :name="items.name"
          >{{items.title}}</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      activeName: "orderList",
      sideData: [
        {
          title: "订单管理",
          detail: [
            {
              title: "订单列表",
              name: "orderList"
            },
            {
              title: "订单评论",
              name: "basePageTwo"
            }
          ]
        },

        {
          title: "权限管理",
          detail: [
            { title: "权限配置", name: "setPrivilege" },
            {
              title: "角色列表",
              name: "roleList"
            }
          ]
        },
        // {
        //   title: "财务管理",
        //   detail: [{ title: "权限配置", name: "setPrivilege" }]
        // },
        // {
        //   title: "员工管理",
        //   detail: [{ title: "权限配置", name: "setPrivilege" }]
        // },
        // {
        //   title: "积分商城",
        //   detail: [{ title: "权限配置", name: "setPrivilege" }]
        // },
        // {
        //   title: "用户管理",
        //   detail: [{ title: "权限配置", name: "setPrivilege" }]
        // }
      ]
    };
  },
  computed: {
    isLoginModel() {
      return this.$store.state.isLoginModel;
    },
    currentPage(){
        return this.$store.state.currentPage;
    },
    user(){
        return this.$store.state.user;
    }

  },
  mounted() {},
  methods: {
    routerTo(name) {
      console.log(name);
      this.$router.push({
        path: "/" + name,
        query: {}
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.side-left {
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 200px;
  overflow-x: hidden;
  //   background: #f5f7f9;
  border-right: 1px solid #dcdee2;
}
.bg {
  background: #515a6e !important;
  color: #ffffff;
  .bg-ivu-menu {
    color: #ffffff !important;
  }
}
.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
  background-color: #2d8cf0 !important;
}
</style>

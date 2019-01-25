<template>
  <div id="app">
    <Header/>
    <SideBar/>
    <Footer/>
   
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div class="side">
      <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" @on-select="routerTo">
        <Submenu v-for="(item,index) in sideData" :key="index" :name="index">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            {{item.title}}
          </template>
          <MenuItem
            v-for="(items,indexs) in item.detail"
            :key="indexs"
            :name="items.name"
          >{{items.title}}</MenuItem>
        </Submenu>
      </Menu>
    </div>
    -->
    <div class="body" :class="{'body-absolute':!isLoginModel}">
      <router-view>
      <!-- 这里是不被缓存的视图组件，比如 page3 -->
    </router-view>
    </div>
  </div>
</template>
<script>
import Header from "./components/header";
import Footer from "./components/footer";
import SideBar from "./components/sideBar";
export default {
  name: "App",
  components: {
    Header,
    SideBar,
    Footer
  },
  data() {
    return {};
  },
  computed: {
    isLoginModel() {
      return this.$store.state.isLoginModel;
    }
  },

  created() {},
  methods: {
    routerTo(name) {
      this.$router.push({
        path: "/" + name,
        query: {}
      });
    }
  }
};
</script>

<style scoped lang="less">
.body {
  right: 0;
  z-index: 998;
  width: auto;
  overflow: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  background: #fff;
}
.body-absolute {
  position: absolute;
  top: 64px;
  bottom: 44px;
  left: 200px;
  padding: 15px;
  z-index: 1;
}
</style>

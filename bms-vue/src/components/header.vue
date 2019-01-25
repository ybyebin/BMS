<template>
  <div>
    <div v-if="!isLoginModel" class="header height64">
      <div class="header-menu height64">
        <div class="header-logo height64">
          <!-- <img src="../../static/image/logo.png" alt=""> -->
          <div>后台管理系统</div>
        </div>
        <div class="header-nav height64">
          <div class="item cursor">
            <div>
              <Icon type="ios-contact"/>
              <span>王大锤</span>
              <Icon type="md-arrow-dropdown"/>
              <div class="item-nav">
                <ul>
                  <li>管理员</li>
                  <li>我的信息</li>
                  <li @click="logOut">退出登陆</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="item">
            <span>管理员</span>
          </div>
          <div class="item" v-text="date"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { timeformat } from "../libs/tools.js";
export default {
  props: {},
  data() {
    return {
      date: ""
    };
  },
  computed: {
    isLoginModel() {
      return this.$store.state.isLoginModel;
    }
  },
  mounted() {
    this.dateNow();
  },
  methods: {
    dateNow() {
      this.date = timeformat(new Date(), "yyyy-MM-dd", true);
    },
    // 退出登陆
    logOut() {
      this.$store.commit("setUser", JSON.stringify({ isLogin: false }));
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.height64 {
  height: 64px;
}
.header {
  background: #515a6e;
  padding: 0 30px;
  padding-left: 0;
  font-size: 14px;
}
.header-logo {
  width: 200px;
  line-height: 64px;
  text-align: center;
  border-radius: 3px;
  float: left;
  position: relative;
  overflow: hidden;
  color: #ffffff;
  // background: #5b6270;
  font-size: 20px;
}

.header-menu {
  display: block;
  margin: 0;
  padding: 0;
  outline: 0;
  list-style: none;
  color: #515a6e;
  position: relative;
  z-index: 900;
}

.header-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
  color: #ffffff;
  //   background: red;

  .item {
    float: right;
    height: 100%;
    // background: gray;
    padding: 0 10px;
    line-height: 64px;
    text-align: center;
    position: relative;
    i {
      font-size: 20px;
    }
    .item-nav {
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      background: #ffffff;
      box-sizing: border-box;
      border-radius: 4px;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
      display: none;
      z-index: 99;

      li {
        list-style: none;
        line-height: normal;
        padding: 5px;
        color: #515a6e;
      }
      li:hover {
        background: #f3f3f3;
      }
    }
  }
  .item:hover {
    .item-nav {
      display: block;
    }
  }
  .cursor {
    cursor: pointer;
  }
}
</style>

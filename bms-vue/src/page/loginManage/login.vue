<template>
  <div class="login ">
    <div class="box base-show">
      <section class="main ">
        <div class="top">
          <!-- <img class="logo" src="../../assets/images/logo.png"> -->
          <p class="title">后台管理系统</p>
        </div>
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <Form-item prop="user">
            <Input type="text" v-model="formInline.user" placeholder="用户名">
              <!-- <Icon type="ios-person-outline" slot="prepend"></Icon> -->
              <Icon type="ios-person" slot="prepend"/>
            </Input>
          </Form-item>
          <Form-item prop="password" @keydown.enter.native="handleSubmit('formInline')">
            <Input type="password" v-model="formInline.password" placeholder="密码">
              <Icon type="ios-lock" slot="prepend"/>
            </Input>
          </Form-item>
          <Form-item>
            <Button type="primary" @click="handleSubmit('formInline')" :loading="loading" long>登录</Button>
          </Form-item>
        </Form>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loading: false,
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请填写用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请填写密码",
            trigger: "blur"
          },
          {
            type: "string",
            // min: 5,
            // message: "密码长度不能小于5位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          let parameter = {
            username: this.formInline.user,
            password: this.formInline.password
          };
          this.loading = true;
          this.$Message.success("登陆成功");
          setTimeout(() => {
            this.loading = false;
            this.$store.commit('setUser',JSON.stringify({isLogin:true}));
            this.$router.push({
              path: "/",
              query: {}
            });
          }, 1000);
        }
      });
    }
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background: #2c3a4a;
  background-size: 10px 10px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  .box {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    z-index: 9;
    width: 400px;
    height: 300px;
    border: 1px solid #ebebeb;
    background: #fff;
    border-radius: 4px;
    section.main {
      width: 330px;
      margin: 0px auto;
      .top {
        width: 100%;
        height: 50px;
        margin: 20px auto;
        margin-bottom: 30px;
        // .logo {
        //   height: 100%;
        //   max-height: 100%;
        //   float: left;
        // }
        .title {
          line-height: 50px;

          font-size: 24px;
          font-weight: bold;
          color: #4a6487;
          text-align: center;
        }
      }
    }
    i {
      font-size: 18px;
    }
  }
}
</style>

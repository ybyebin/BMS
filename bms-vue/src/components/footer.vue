<template>
  <div>
    <div v-if="!isLoginModel" class="footer ">
        <div>
            @北京蓝犀牛信息技术有限公司所有
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
    },
  },
  mounted() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footer{
    position: fixed;
    left: 200px;
    right: 0;
    bottom: 0;
    height: 44px;
    line-height: 44px;
    padding: 0 15px;
    background-color: #f1f1f1;
    z-index: 2;
    text-align: center;
}
</style>

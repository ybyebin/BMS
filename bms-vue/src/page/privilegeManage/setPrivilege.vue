<template>
  <div>
    <Divider orientation="left">
      <h2>配置权限</h2>
    </Divider>

    <div class="current-user">
      <p>
        <span>编辑用户:</span>
        <span>XXXXX</span>
      </p>
      <p>
        <Checkbox v-model="allCheck" @on-change="allCheckAll">全选</Checkbox>
      </p>
    </div>

    <Card class="card" v-for="(item, index) in privilegeData" :key="index">
      <div slot="title">
        <div class="card-title">
          <div>{{item.name}}</div>
          <div>
            <Checkbox
              :indeterminate="item.indeterminate"
              :value="item.checkAll"
              @click.prevent.native="handleCheckAll(item)"
            >全选</Checkbox>
          </div>
        </div>
      </div>
      <div>
        <CheckboxGroup v-model="item.checkAllGroup" @on-change="checkAllGroupChange(item)">
          <Checkbox v-for="(data,index) in item.data" :label="data.name" :key="index"></Checkbox>
        </CheckboxGroup>
      </div>
    </Card>

    <!-- <Card>
      <div slot="title">
        <div class="card-title">
          <div>订单权限管理</div>
          <div>
            <Checkbox
              :indeterminate="orderManage.indeterminate"
              :value="orderManage.checkAll"
              @click.prevent.native="handleCheckAll"
            >全选</Checkbox>
          </div>
        </div>
      </div>
      <div>
        <CheckboxGroup v-model="orderManage.checkAllGroup" @on-change="checkAllGroupChange">
          <Checkbox v-for="(item,index) in orderManage.data" :label="item.name" :key="index"></Checkbox>
        </CheckboxGroup>
      </div>
    </Card>-->
  </div>
</template>

<script>
export default {
  name: "setprivilege",
  components: {},
  data() {
    return {
      allCheck: false, //所有全选
      // 权限列表
      privilegeData: [
        {
          //订单 相关权限
          id: "orderManage",
          name: "订单管理权限",
          indeterminate: true,
          checkAll: false,
          checkAllGroup: ["订单列表"],
          data: [
            {
              checked: false,
              name: "订单列表"
            },
            {
              checked: false,
              name: "在线下单"
            },
            {
              checked: false,
              name: "报价列表"
            },
            {
              checked: false,
              name: "未分配订单"
            },
            {
              checked: false,
              name: "异常订单"
            },

            {
              checked: false,
              name: "订单评论"
            },
            {
              checked: false,
              name: "订单推送日志"
            },
            {
              checked: false,
              name: "订单投诉列表"
            },
            {
              checked: false,
              name: "用户申诉列表"
            },
            {
              checked: false,
              name: "司机申诉列表"
            }
          ]
        },
        {
          //用户 相关权限
          id: "userManage",
          name: "用户管理权限",
          indeterminate: true,
          checkAll: false,
          checkAllGroup: [],
          data: [
            {
              checked: false,
              name: "用户列表"
            },
            {
              checked: false,
              name: "添加用户"
            },
            {
              checked: false,
              name: "添加角色"
            },
            {
              checked: false,
              name: "添加市场"
            }
          ]
        },
        {
          //用户 财务相关权限
          id: "",
          name: "财务管理权限",
          indeterminate: true,
          checkAll: false,
          checkAllGroup: [],
          data: [
            {
              checked: false,
              name: "充值处理"
            },
            {
              checked: false,
              name: "订单流水查询"
            },
            {
              checked: false,
              name: "财务总揽"
            }
          ]
        },
        {
          //用户 员工管理权限
          id: "",
          name: "员工管理权限",
          indeterminate: true,
          checkAll: false,
          checkAllGroup: [],
          data: [
            {
              checked: false,
              name: "员工列表"
            },
            {
              checked: false,
              name: "添加员工"
            }
          ]
        },
        {
          //用户 相关权限
          id: "",
          name: "积分商城管理权限",
          indeterminate: true,
          checkAll: false,
          checkAllGroup: [],
          data: [
            {
              checked: false,
              name: "积分查询"
            },
            {
              checked: false,
              name: "商品管理"
            },
            {
              checked: false,
              name: "牛币查询"
            },
            {
              checked: false,
              name: "牛币商品管理"
            },
            {
              checked: false,
              name: "商品审核管理"
            }
          ]
        }
      ]
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},

  methods: {
    // 所有权限全选
    allCheckAll(data) {
      this.privilegeData.forEach(element => {
        if (data) {
          element.data.forEach(ele => {
            let name = ele.name;
            let checkAllGroup = element.checkAllGroup;
            if (!(checkAllGroup.indexOf(name) > -1)) {
              checkAllGroup.push(name);
            }
            
          });

         
        } else {
          element.checkAllGroup = [];
        }


         this.log(element.checkAllGroup);
      });
    },

    //  单个模块全选
    handleCheckAll(item) {
      if (item.indeterminate) {
        item.checkAll = false;
      } else {
        item.checkAll = !item.checkAll;
      }
      item.indeterminate = false;

      if (item.checkAll) {
        item.data.forEach(element => {
          let name = element.name;
          let checkAllGroup = item.checkAllGroup;
          if (!(checkAllGroup.indexOf(name) > -1)) {
            checkAllGroup.push(name);
          }
        });
      } else {
        item.checkAllGroup = [];
        this.allCheck = false;
      }
      this.log(item);
    },
    checkAllGroupChange(item) {
      console.log(JSON.stringify(item, null, 2));

      let length = item.data.length;
      let checkedLength = item.checkAllGroup.length;
      if (checkedLength === length) {
        item.indeterminate = false;
        item.checkAll = true;
      } else {
        this.allCheck = false;
        if (checkedLength.length > 0) {
          item.indeterminate = true;
          item.checkAll = false;
        } else {
          item.indeterminate = false;
          item.checkAll = false;
        }
      }
    }
  }
};
</script>

<style scoped lang="less">
.current-user {
  margin: 20px 0;
  font-size: 16px;
}
.card {
  margin-bottom: 20px;
}
.card-title {
  display: flex;
  div:last-child {
    flex: 1;
    text-align: right;
  }
}
</style>

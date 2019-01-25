<template>
  <div class="wrapper">
    <Divider orientation="left">
      <h2>订单列表</h2>
    </Divider>

    <div class="export">
      <Button type="primary">导出查询数据</Button>
      <Button type="primary">导出查询数据(高级)</Button>
    </div>

    <div class="search-condition">
      <div>
        <div>
          <span class="title">会员姓名:</span>
          <Input placeholder="查找会员姓名" class="not-date-input"/>
        </div>
        <div>
          <span class="title">会员手机号:</span>
          <Input placeholder="会员手机号" class="not-date-input"/>
        </div>
        <div>
          <span class="title">发货人手机号:</span>
          <Input placeholder="发货人手机号" class="not-date-input"/>
        </div>
      </div>
      <div>
        <div>
          <span class="title">订单编号:</span>
          <Input placeholder="订单编号" class="not-date-input"/>
        </div>
        <div>
          <span class="title">发货人姓名:</span>
          <Input placeholder="发货人姓名" class="not-date-input"/>
        </div>
        <div>
          <span class="title">订单司机:</span>
          <Input placeholder="订单司机" class="not-date-input"/>
        </div>
      </div>

      <div>
        <div>
          <span class="title">下单时间-开始:</span>
          <DatePicker type="date" placeholder="选择时间"></DatePicker>
        </div>
        <div>
          <span class="title">下单时间-结束:</span>
          <DatePicker type="date" placeholder="选择时间"></DatePicker>
        </div>
      </div>
      <div>
        <div>
          <span class="title">发货时间-开始:</span>
          <DatePicker type="date" placeholder="选择时间"></DatePicker>
        </div>
        <div>
          <span class="title">发货时间-结束:</span>

          <DatePicker type="date" placeholder="选择时间"></DatePicker>
        </div>

        <Button type="primary">查询</Button>
      </div>
    </div>
    <div class="search-conditions">
      <div v-for="(item,index) in conditions" :key="index" class="item">
        <div>
          <span>{{item.title}}</span>
        </div>

        <div class="detail">
          <span
            v-for="(data,index) in item.data"
            :key="index"
            :class="{checked:data.checked}"
          >{{data.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderList",
  components: {},
  data() {
    return {
      conditions: [
        {
          title: "订单类型",
          checked: {},
          data: [
            {
              name: "不限",
              checked: true
            },
            {
              name: "拉货",
              checked: false
            },
            {
              name: "搬家",
              checked: false
            },
            {
              name: "日式搬家",
              checked: false
            },
            {
              name: "办公室搬迁",
              checked: false
            },
            {
              name: "长途搬家(国内)",
              checked: false
            },
            {
              name: "长途搬家(国际)",
              checked: false
            },
            {
              name: "搬家小时工",
              checked: false
            }
          ]
        },
        {
          title: "车辆类型",
          checked: {},
          data: [
            {
              name: "不限",
              checked: true
            },
            {
              name: "小面",
              checked: false
            },
            {
              name: "金杯",
              checked: false
            },
            {
              name: "大面包",
              checked: false
            },
            {
              name: "4.2米厢货",
              checked: false
            },
            {
              name: "小厢货",
              checked: false
            }
          ]
        },
        {
          title: "服务类型",
          checked: {},
          data: [
            {
              name: "不限",
              checked: true
            },
            {
              name: "预约服务",
              checked: false
            },
            {
              name: "马上用车",
              checked: false
            }
          ]
        },
        {
          title: "下单来源",
          checked: {},
          data: [
            {
              name: "不限",
              checked: true
            },
            {
              name: "网站",
              checked: false
            },
            {
              name: "后台",
              checked: false
            },
            {
              name: "android(搬家)",
              checked: false
            },
            {
              name: "ios(搬家)",
              checked: false
            },
            {
              name: "H5(搬家)",
              checked: false
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

  methods: {}
};
</script>

<style scoped lang="less">
.wrapper {
  // font-size: 14px;
}
.export {
  text-align: right;
}
.search-condition {
  margin-top: 20px;
  padding-left: 10px;

  > div {
    display: flex;

    margin-bottom: 20px;
    > div {
      padding-right: 20px;
    }
  }
  .not-date-input {
    width: 166px;
  }
  .title {
    display: inline-block;
    min-width: 80px;
  }
}
.search-conditions {
  margin-top: 20px;
  padding-left: 10px;
  .item {
    display: flex;
    margin-bottom: 10px;
    > div:nth-child(2) {
      flex: 1;
      padding-left: 10px;
    }

    .detail {
      color: #2d8cf0;
      span {
        display: inline-block;
        padding: 0 3px;
        cursor: pointer;
        margin-right: 3px;
      }
      span.checked,
      span:hover {
        color: #fff;
        background: #2d8cf0;
      }
    }
  }
}
</style>

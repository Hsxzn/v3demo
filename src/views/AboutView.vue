<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="main"></div>
    <van-skeleton title avatar :row="3" />
  </div>
</template>
<script lang="ts">
import { defineComponent, nextTick } from "vue";
// Toast
import { Toast, Skeleton } from "vant";
import "vant/es/toast/style";
import * as echarts from "echarts";

export default defineComponent({
  name: "HomeView",
  components: {
    [Skeleton.name]: Skeleton,
  },
  created() {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
    });

    nextTick(() => {
      this.createEcharts();
    });
  },
  methods: {
    createEcharts() {
      const main: HTMLElement = document.getElementById("main") as HTMLElement;
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(main);
      // 绘制图表
      myChart.setOption({
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
  },
});
</script>
<style lang="less">
#main {
  width: 500px;
  height: 500px;
}
</style>

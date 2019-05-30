<template>
  <div>
    <!-- 头部 -->
    <bili-header></bili-header>
    <!-- 导航栏 -->
    <navMenu></navMenu>
    <!-- 正文部分 -->
    <router-view></router-view>

    <!-- 侧边栏 -->
  </div>
</template>
<script>
import index from "./components/index/index.vue";

export default {
  components: {
    index
  }
};
</script>
<style lang="less" scoped>

</style>

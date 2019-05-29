<template>
  <div>
    <!-- 头部 -->
    <bili-header></bili-header>
    <!-- 导航栏 -->
    <navMenu></navMenu>
    <!-- 正文部分 -->
    <index></index>
    <!-- 侧边栏 -->

    <section class="bili-wrapper"></section>
    <div class="placeholder"></div>
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
.placeholder {
  height: 4000px;
}
</style>

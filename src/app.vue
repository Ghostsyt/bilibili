<template>
  <div>
    <!-- 头部 -->
    <bili-header></bili-header>
    <!-- 导航栏 -->
    <navMenu></navMenu>
    <!-- 正文部分 -->
    <section class="bili-wrapper">
      <chiefRecommend></chiefRecommend>
      <popularize></popularize>
    </section>
  </div>
</template>
<script>
import biliHeader from "./components/header.vue";
import navMenu from "./components/nav-menu.vue";
import chiefRecommend from "./components/chief-recommend.vue";
import popularize from "./components/home_popularize.vue";
export default {
  components: {
    biliHeader,
    navMenu,
    chiefRecommend,
    popularize
  }
};
</script>
<style lang="">
</style>
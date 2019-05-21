<template>
  <div>
    <!-- 头部 -->
    <bili-header></bili-header>
    <!-- 导航栏 -->
    <navMenu></navMenu>
    <!-- 正文部分 -->
    <section class="bili-wrapper">
      <chiefRecommend></chiefRecommend>
    </section>
  </div>
</template>
<script>
import biliHeader from "./components/header.vue";
import navMenu from "./components/nav-menu.vue";
import chiefRecommend from "./components/chief-recommend.vue";

export default {
  components: {
    biliHeader,
    navMenu,
    chiefRecommend
  }
};
</script>
<style lang="">
</style>
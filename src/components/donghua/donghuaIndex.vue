<template>
  <div class="DonghuaIndex-container">
    <biliHeader></biliHeader>
    <navMenu></navMenu>
    <chiefRecomment></chiefRecomment>
    <zonghe></zonghe>
    <videoFloorM></videoFloorM>
  </div>
</template>
<script>
import biliHeader from "../../subcomponents/header.vue";
import navMenu from "../../subcomponents/nav-menu.vue";
import zonghe from "./zonghe.vue";
import videoFloorM from "./video-floor-m.vue";
export default {
  components: {
    biliHeader,
    navMenu,
    zonghe,
    videoFloorM
  }
};
</script>
<style lang="less" >
.DonghuaIndex-container {
  margin: 0 auto;
}
</style>

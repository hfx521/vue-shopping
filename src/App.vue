<script setup>

</script>

<template>
  <!-- 一级路由出口组件 -->
  <RouterView></RouterView>
  <div class="test">
    test scss
  </div>
</template>


<style lang="scss" scoped>
.test {
    color:$priceColor;
}
</style>

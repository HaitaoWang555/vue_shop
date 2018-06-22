/* vue组件 */
<template>
  <div class="loading">
    <img src="../assets/images/loading.png" alt="">
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.loading {
  position: relative;
  margin-top: -44px;
}
.loading::before {
  content: "";
  position: absolute;
  background: #f2f2f2;
  top: -50px;
  left: 0;
  width: 100%;
  height: 50px;
  box-shadow: 0 1px 4px 2px rgba(0, 0, 0, 0.12)
}
img{
  width: 100%;
}
</style>

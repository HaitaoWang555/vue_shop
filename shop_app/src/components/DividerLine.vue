/* vue组件 */
<template>
  <div class="dividerLine" :style="{background:bgColor}">

  </div>
</template>

<script>
export default {
  name: 'dividerLine',
  props: {
    bgColor: {
      bgColor: 'blue'
    }
  }
}
</script>

<style scoped>
.dividerLine {
  margin: 0 auto;
  width: 100%;
  height: 8.3px;
}
</style>

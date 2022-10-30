<template>
  <div class="footer">
    <span>&copy; {{`${this.$appName} ${new Date().getFullYear()}`}}</span>
  </div>
</template>

<script>
export default {
  inject: ['$appName']
}
</script>

<style scoped lang="less">
.footer {
  position: absolute;
  width: 100%;
  padding: 10px 0px;
  bottom: 10px;
  font-size: 14px;
}
</style>

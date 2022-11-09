<template>
  <div class="footer">
    <div class="orientation">orientation: {{vm.mq.current}}</div>
    <span>&copy; {{`${vm.$appName} ${new Date().getFullYear()}`}}</span>
  </div>
</template>

<script>
export default {
  inject: ['$appName', 'mq'],
  computed: {
    vm () {
      return this
    }
  }
}
</script>

<style scoped lang="less">
@import '@/assets/variables.less';

.footer {
  position: absolute;
  width: 100%;
  padding: 20px 0px;
  bottom: 0px;
  font-size: 14px;
  background-color: @main-color;
}
</style>

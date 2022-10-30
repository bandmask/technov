<template>
  <div id="app">
    <div id="nav">
      <router-link to="/gallery">gallery</router-link>
    </div>
    <router-view class="component-content" />
    <appFooter></appFooter>
    <div class="orientation">orientation: {{this.mq.current}}</div>
  </div>
</template>

<script>
import appFooter from '@/modules/footer/appFooter.vue'

export default {
  inject: ['mq'],
  components: { appFooter }
}
</script>

<style lang="less">
@import '@/assets/variables.less';

body {
  margin: 0;

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: @accent-color;

    #nav {
      position: absolute;
      display: flex;
      justify-content: space-between;

      width: 300px;
      top: 20px;
      left: 50px;

      padding: 10px;

      a {
        font-weight: bold;
        color: @main-color;

        &.router-link-exact-active {
          color: @accent-color;

          &:hover {
            color: @main-color;
          }
        }
      }
    }

    .component-content {
      padding: 20px 0px;
    }

    h1,
    h2,
    h3 {
      display: inline-block;
      margin: 10px 0px;
    }

    h3 {
      font-style: italic;
      margin-bottom: 0px;
    }

    p {
      margin: 5px 0px;
    }
  }
}
</style>

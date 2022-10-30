<template>
  <div class="comp">
    <div class="greeting">I am an example component</div>
    <img src="@/assets/logo.png" alt="assets-logo" />
    <button v-on:click="inc()">{{count < 9 ? 'test me!' : 'CAREFUL! dont break me' }}</button>
        <div>{{count}}</div>
        <div v-if="count == 0">awww.. you broke me :/</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  mounted () {
    this.count = 1
  },
  methods: {
    inc () {
      this.count = (this.count + +1) % 10
    }
  }
}
</script>

<style lang="less">
.comp {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  max-height: 500px;
  img {
    max-width: 100px;
  }
}
</style>

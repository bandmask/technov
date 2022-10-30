<template>
  <div>
    <p>I am an internal module</p>
    <exampleModuleComponent />
  </div>
</template>

<script>
import exampleModuleComponent from '@/modules/lazyModule/components/lazyComponent.vue'
export default {
  components: { exampleModuleComponent }
}
</script>

<style>

</style>

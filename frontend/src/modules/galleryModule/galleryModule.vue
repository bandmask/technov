<template>
  <div>
    <gallery-comp :images="vm.images" class="gallery" />
  </div>
</template>

<script>
import galleryComp from '@/components/galleryComp.vue'
 import images from '@/assets/images/images.js'

export default {
  name: 'gallery',
  components: { galleryComp },
  data () {
    return {
      
    }
  },
  computed: {
    vm () {
      return this
    },
    images () {
      return images
    }
  }
}
</script>

<style scoped lang="less">

</style>

<template>
  <div :class="vm.mq.current"
       class="gallery-view">
    <transition-group tag="div"
                      class="gallery">
      <div v-for="(image, $index) in vm.slides"
           :key="$index"
           v-show="image === vm.activeImage"
           class="gallery-image">
        <img :alt="image.name"
             :src="image.src"
             :title="image.description" />
      </div>
    </transition-group>
    <div v-show="!vm.single()" class="gallery-controls">
      <button @click="vm.previous"
              class="gallery-control previous">
        &lt;
      </button>
      <button @click="vm.next"
              class="gallery-control next">
        &gt;
      </button>
    </div>
    <div v-show="!vm.single()" class="gallery-pagination">
      <div v-for="(image, $index) in vm.slides"
           :key="$index"
           @click="vm.setActive($index)"
           :class="{'active': image === vm.activeImage}"
           class="pagination">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['mq'],
  props: ['images'],
  data () {
    return {
      slides: [],
      activeImage: {}
    }
  },
  mounted () {
    this.slides = this.images
    this.activeImage = this.slides[0]
  },
  computed: {
    vm () {
      return this
    }
  },
  methods: {
    single () {
      return this.slides.length === 1
    },
    next () {
      let index = this.slides.indexOf(this.activeImage)
      ++index >= this.slides.length && (index = 0)
      this.setActive(index)
    },
    previous () {
      let index = this.slides.indexOf(this.activeImage)
      --index < 0 && (index = this.slides.length - 1)
      this.setActive(index)
    },
    setActive (index) {
      this.activeImage = this.slides[index]
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/assets/variables.less';

.gallery-view {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  margin: 0px auto;
  border-radius: 5px;
  cursor: cell;
  transition: background-color 2s linear;

  .gallery {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 400px;

    .gallery-image {
      position: relative;
      display: flex;
      flex: 0 0 500px;
      justify-content: center;
      align-items: center;
      height: 100%;
      border-radius: 5px;

      img {
        border-radius: 2px;
        height: 300px;
        transition-duration: 1.1s;
      }
    }
  }

  &:hover {
    background-color: rgba(204, 204, 204, 0.6);
    .gallery-image {
      img {
        transform: scale(1.1);
        box-shadow: 0px 0px 30px 0px rgba(50, 50, 50, 0.7);
      }
    }
    .gallery-controls {
      opacity: 1;
    }
  }

  .gallery-controls {
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: none;
    transition-duration: 1.5s;

    .gallery-control {
      position: absolute;
      display: block;
      background-color: rgba(0, 0, 0, 0.1);
      color: rgb(0, 0, 0);
      border: none;
      font-size: 16px;
      height: 100%;
      width: 80px;
      top: 0px;
      bottom: 0;
      outline: none;
      pointer-events: all;
      cursor: pointer;

      &.next {
        right: 0px;
      }

      &.previous {
        left: 0px;
      }
    }
  }
  .gallery-pagination {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30px;
    left: 0;
    right: 0;
    bottom: 0;

    .pagination {
      display: inline-block;
      margin: 0 10px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 1px solid #fff;
      cursor: pointer;

      &.active {
        background-color: #fff;
      }
    }
  }
}
</style>

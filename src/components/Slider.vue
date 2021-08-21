<template>
  <div class="carousel">
    <slot></slot>
    <button class="next" @click="next">next</button>
    <button class="prev" @click="prev">prev</button>
  </div>
</template>

<script>

export default {
  name: "Slider",
  components: {},
  data() {
    return {
      pics: [{src: '@/assets/slider/pic1.jpg'}, {src: '@/assets/slider/pic2.jpg'}, {src: '@/assets/slider/pic3.jpg'}],
      src1: "@/assets/slider/pic1.jpg"
    }
  },
  methods: {
    next() {
      this.$emit('next')
    },
    prev() {
      this.$emit('prev')
    }
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
}
button {
  position: absolute;
  height: 40px;
  width: 50px;
  top: calc(50% - 20px);
}
button:focus, button:hover {
  cursor: pointer;
  outline: none;
}
.next {
  right: 0;
}
.prev {
  left: 0;
}
</style>
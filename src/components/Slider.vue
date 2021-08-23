<template>
  <div class="carousel">
    <slot></slot>
    <button class="next" @click="next"></button>
    <button class="prev" @click="prev"></button>
  </div>
</template>

<script>

export default {
  name: "Slider",
  components: {},
  props: ['interval'],
  data() {
    return {
      pics: [{src: '@/assets/slider/pic1.jpg'}, {src: '@/assets/slider/pic2.jpg'}, {src: '@/assets/slider/pic3.jpg'}],
      src1: "@/assets/slider/pic1.jpg",
      intervalFunc: null,
      timeCounter: 0,
    }
  },
  methods: {
    next() {
      this.$emit('next')
      this.timeCounter = 0
    },
    prev() {
      this.$emit('prev')
      this.timeCounter = 0
    },
    nextAtTime() {
      this.intervalFunc = setInterval(() => {
        if (this.timeCounter <= this.interval) {
          this.timeCounter += 100
        } else {
          this.timeCounter = 0
          this.next();
        }
      }, 100)
    }
  },
  mounted() {
    this.nextAtTime()
  },
  unmounted() {
    clearInterval(this.intervalFunc)
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  margin: auto;
  width: 1200px;
  height: 300px;
  overflow: hidden;
}

button {
  position: absolute;
  text-decoration: none;
  background-color: rgba(0,0,0,0);
  border: 0;
  background-repeat : no-repeat;
  height: 32px;
  width: 32px;
  top: calc(50% - 16px);
  transition: ease-in-out .3s;
  opacity: 20%;
}

button:hover {
  cursor: pointer;
  transition: ease-in-out .3s;
  opacity: 50%;
}

.next {
  right: 3%;
  background-image: url("../assets/slider/arrow_right.png");

}

.prev {
  left: 3%;
  background-image: url("../assets/slider/arrow_left.png");
}
</style>
<template>
  <transition :name="direction" mode="in-out">
    <div v-show="visibleSlide === index" class="carousel-item">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Slider-item",
  props: ['visibleSlide', 'index', 'direction']
}
</script>

<style scoped>
.carousel-item {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}

.left-enter-active {
  animation: leftInAnimation 2.5s ease-in-out;
}

.left-leave-active {
  animation: leftOutAnimation 2.5s ease-in-out;
}

@keyframes leftInAnimation {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes leftOutAnimation {
  from {
    transform: translateX(0);
 }
  to {
    transform: translateX(-100%);
  }
}

.right-enter-active {
  animation: rightInAnimation 2.5s ease-in-out;
}

.right-leave-active {
  animation: rightOutAnimation 2.5s ease-in-out;
}

@keyframes rightInAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes rightOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
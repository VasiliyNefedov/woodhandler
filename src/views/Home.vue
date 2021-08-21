<template>
  <div class="home">
    <div class="slider">banner/slider</div>
    <div class="header"><h1>WOODHANDLER - экологичная эстетика!</h1></div>
    <div class="product-pic-container">product pictures</div>
    <div class="product-header"><h2>Вдохновляющая фраза о товаре</h2></div>
    <article class="product-description"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dicta nobis
      rerum! Aliquid architecto dolore, dolorem ea, enim eum exercitationem expedita fuga ipsam laborum modi neque quia
      sit ullam unde. Aliquam aliquid aperiam consequuntur cumque eaque eveniet ipsum minus pariatur quibusdam vel! Ad
      dolores ducimus excepturi perferendis, rem totam veritatis!</p>
    </article>
    <div class="btn-container">
      <button class="btn">ЗАКАЗАТЬ</button>
    </div>
    <div class="banner">banner</div>
    <div class="reviews-header"><h2>Отзывы</h2></div>
    <div class="reviews-container">some reviews</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style>
.slider {
  margin: 10px 0;
  width: 100%;
  height: 300px;
  background: #ccc;
}

.header {
  margin: 100px 0;
}

.product-pic-container {
  height: 300px;
  background: #ccc;
}

.product-header {
  margin: 50px 0;
}

.btn-container {
  margin: 50px 0;
}

.btn {
  height: 30px;
  width: 200px;
  letter-spacing: 3px;
  border:  #42b983;
  border-radius: 50px;
  background: #42b983;
  cursor: pointer;
}
.btn:hover {
  transition: ease 0.3s;
  background: rgba(126, 236, 186, 0.96);
}
.banner {
  height: 300px;
  background: #ccc;
}
.reviews-header {
  margin: 50px 0;
}
.reviews-container {
  height: 300px;
  background: #ccc;
}
</style>
<template>
  <div class="logo-container">
    <img alt="Vue logo" src="@/assets/logo_home.svg" class="logo">
  </div>
  <div id="nav">
    <router-link to="/">Главная</router-link>
    |
    <router-link to="/manufacturing">Производство</router-link>
    |
    <router-link to="/blog">Блог</router-link>
    |
    <router-link to="/reviews">Отзывы</router-link>
    |
    <router-link to="/delivery">Доставка и оплата</router-link>
    |
    <router-link to="/contacts">Контакты</router-link>
  </div>
  <router-view/>
  <footer class="footer">
    
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  margin: 0 220px;
  padding: 90px 0;
  /*max-height: 240px;*/
}

#nav a {
  font-family: Cocogoose Pro;
  font-size: larger;
  /*font-weight: bold;*/
  color: #2c3e50;

}

#nav a.router-link-exact-active {
  color: #42b983;
}

.logo-container {
  position: absolute;
}

.logo {
  width: 200px;
}

.footer {
  height: 120px;
  background: #594c3c;
}

@font-face {
  /*// название шрифта(чтобы не запутаться лучше указать название папки со шрифтом)*/
  font-family: "Cocogoose Pro";
  /*// адрес шрифта и тип*/
  src: url("./Fonts/Cocogoose Pro.ttf") format("truetype");
  font-style: normal;
  font-weight: normal;
}
@media screen and (min-width: 1920px) {
  #nav a {
    font-size: 1.5em;
  }
}
</style>

<template>
  <nav-bar></nav-bar>
  <!-- <p>{{ $t("main.welcome", { company: "Lokalise" }) }}</p> -->
  <main>
    <router-view> </router-view>
  </main>

  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from "./components/NavBar.vue";
// import HomePage from './components/HomePage.vue'
export default {
  name: "App",
  components: {
    // HelloWorld
    NavBar,
    // HomePage
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
}
.navbar {
  height: 80px;
}
ul {
  list-style-type: none;
  display: flex;
  width: 40%;
  justify-content: space-around;
  font-weight: 1000;
  padding: 0;
  font-size: 15px;
}
.logo {
  height: 60px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
li {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
</style>

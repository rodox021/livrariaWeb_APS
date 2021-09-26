<template>
  <div id="app">
    <Header title="Aplication" />
    <Menu />
    <Content />
    <Footer />
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Header from "./template/Header.vue";
import Menu from "./template/Menu.vue";
import Content from "./template/Content.vue";
import Footer from "./template/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Menu,
    Content,
    Footer,
    //HelloWorld
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
}

body {
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header"
    "menu"
    "content"
    "footer";

  grid-template-rows: 100px 50px 1fr 30px;
  grid-template-columns: 1fr;
}
</style>

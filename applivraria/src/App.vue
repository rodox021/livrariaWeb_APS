<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <main>
      <router-view />
    </main>
    <footer>

    </footer>
  </div>
</template>
<script>
import Header from "../src/components/Header.vue";
export default {
  name: "App",
  components: { Header },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



    header {
        display: flex;
        padding: 10px;
        background-color: blueviolet;
        /*justify-content: space-around;*/
        align-items: center;

    }

    a {
        color: white;
        text-decoration: none;

    }
    a:hover{
        color: #30d96b;
        text-decoration: none;
    }

    header>i.logo {
        margin-right: 20px;
        color: white;
    }

    .logouser {
        display: flex;
        margin-right: 100px;
        align-items: center;

    }

    .logouser>i {
        margin-right: 5px;
    }

    header a {
        flex-grow: 1;
        color: white;

    }

    .input-search {
        display: flex;
        flex-grow: 1;
        margin-right: 50px;

    }

    input[type=text] {
        width: 100%;
        box-sizing: border-box;
        border: 2px solid #ccc;
        border-radius: 4px;
        font-size: 14px;
        background-color: white;
        /*background-image: url(searchicon.png);*/
        /*background-position: 10px 10px;*/

        /*background-repeat: no-repeat;*/
        padding: 12px 20px 12px 40px;

    }

    .menu {
        grid-area: menu;
        background-color: #FFFFFF;
    }


    main {
        grid-area: main;
        background-color: #f2f2f2;
    }

  
</style>

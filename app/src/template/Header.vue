<template>
  <header class="header">
    <router-link to="/" class="logo">
      <img class="logo-img" src="@/assets/logo.png" alt="" />
      <h3>Libraries next</h3>
    </router-link>
    <div class="form-group input">
      <input
        type="text"
        class="form-control"
        id="input-busca"
        placeholder="Buscar"
      />
    </div>
    <div class="logouser">
      <i class="fa fa-user fa-3x"></i>
      <div>
        <router-link to="/login">Logins</router-link> <br />
        <router-link to="/cadastro">cadastra-se</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style scoped>
.header {
  background: linear-gradient(
    to right,
    var(--bg-color-primary),
    var(--bg-color-secondary)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  /*  background: -webkit-linear-gradient(
    to right,
    #3c1053,
    #ad5389
  );  */ /* Chrome 10-25, Safari 5.1-6 */
  /* background: linear-gradient(
    to right,
    #3c1053,
    #ad5389
  ); */ /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 0px 10px 0px 10px;
  color: var(--color-text-primary);
  grid-area: header;
  display: flex;
  justify-content: start;
  /* ustify-content: space-between; */
}
.input {
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-left: 30px;
  margin-right: 30px;
}
.logouser {
  display: flex;
  align-items: center;
  width: 150px;
}
.logouser i {
  margin-right: 10px;
}

.logo {
  display: flex;
  align-items: center;
}
.logo-img {
  height: 100%;
}
a {
  color: var(--text-color-primary);
  text-decoration: none;
}
a:hover {
  color: black;
  font-size: 20px;
}
</style>

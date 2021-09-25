<template>
  <header class="header">
    <a class="logo">
      <i class="fa fa-book fa-4x">Libraries next</i>
    </a>
    <form class="navbar-form navbar-left" action="">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          id="Busca"
          placeholder="Buscar"
        />
        <div class="input-group-btn">
          <button class="btn btn-default" id="btnBusca" type="submit">
            <i class="glyphicon glyphicon-search"></i>
          </button>
        </div>
      </div>
    </form>
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
  background: #ad5389; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #3c1053,
    #ad5389
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #3c1053,
    #ad5389
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 10px;
  color: var(--color-text-primary);
  grid-area: header;
  display: flex;
  justify-content: start;
  align-content: center;
}
.logo {
}
</style>

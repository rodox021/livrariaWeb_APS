<template>
  <nav class="menu">
    <div class="menu-bar">
      <div class="menu-dropdown">
        Categoria <i class="fa fa-caret-down fa-lg"></i>
      </div>

      <a href="">Lançamentos</a>
      <router-link to="/videopromo">Video Promo</router-link>
      <a href="">E-Books</a>
    </div>
    <div class="content-dropdown" id="md">
      <a href="">Lançamentos</a>
      <a href="">Video Promo</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "menu",
};
</script>

<style>
.menu {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding-left: 100px;
  /* grid-area: menu;
  display: flex;
  align-items: center; */
}
.menu .menu-bar {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
}

.menu .menu-bar a {
  color: black;

  text-decoration: none;
  padding: 10px;
  /* margin: 20px; */
  margin-right: 20px;
}
.menu .menu-bar a:hover {
  font-weight: bold;
  color: var(--bg-color-primary);
  background-color: rgba(0, 0, 0, 0.2);
}

.menu-dropdown {
  cursor: pointer;
  margin-right: 20px;
}
.menu-dropdown > i {
  margin-left: 20px;
  cursor: pointer;
}
.content-dropdown {
  position: absolute;
  min-width: 200px;
  padding: 10px;

  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  display: flex;
  flex-direction: column;

  visibility: hidden;
  opacity: 1;
  transition: visibility 0s, opacity 0.5s linear;
}

.menu-dropdown:hover ~ .content-dropdown {
  color: red;
  visibility: visible;
}
</style>

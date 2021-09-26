<template>
  <nav class="menu">
    <div class="menu-bar">
      <button @click="HideMenu" class="btn menu-dropdown">
        Categoria<i :class="icon"></i>
      </button>

      <a href="">Lançamentos</a>
      <router-link to="/videopromo">Video Promo</router-link>
      <a href="">E-Books</a>
    </div>
    <div class="content-dropdown" :class="visible ? 'hidden' : ''">
      <a href=""><i class="fa fa-gamepad text-warning"></i> Games</a>
      <a href=""><i class="fa fa-video-camera text-success"></i> Filmes</a>
      <a href=""><i class="fa fa-music text-success"></i> Musica</a>
      <a href=""><i class="fa fa-laptop text-primary"></i> Informatica</a>
      <a href=""> <i class="fa fa-heart text-danger"></i> Romance</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "menu",
  data: function () {
    return {
      visible: true,
      icon: "fa fa-caret-down fa-lg",
    };
  },
  created() {},
  methods: {
    HideMenu() {
      this.visible = !this.visible;
      this.icon = this.visible
        ? "fa fa-caret-down fa-lg"
        : "fa fa-caret-up fa-lg";
    },
  },
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

  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  display: flex;
  flex-direction: column;
}
.content-dropdown a {
  padding: 10px;
  text-decoration: none;
  border-bottom: 1px var(--bg-color-deep) solid;
  color: black;
}
.content-dropdown a:hover {
  color: var(--color-text-primary);
  background-color: var(--bg-color-primary);
}
.content-dropdown a > i {
  margin-right: 10px;
}

.hidden {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}
.menu-dropdown:hover {
  color: white !important;
  background-color: blueviolet;
}
</style>

<template>
  <div>
    <header class="header">
      <i class="logo fa fa-book fa-4x"></i>

      <a href="./index.html">
        <h1>Libraries next</h1>
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
            <button
              class="btn btn-default"
              id="btnBusca"
              type="submit"
              onclick="buscar()"
            >
              <i class="glyphicon glyphicon-search"></i>
            </button>
          </div>
        </div>
      </form>

      <div class="logouser">
        <i class="fa fa-user fa-2x"></i>
        <div>
          <a href="../newhtml.html">Login ou</a> <br />
          <a href="">cadastra-se</a>
        </div>
      </div>
    </header>
    <nav class="menu">
      <ul class="nav navbar-nav">
        <li class="active"><a style="color: black" href="#">CATEGORIAS</a></li>
        <li><a style="color: black" href="#">LANÇAMENTOS</a></li>
        <li>
          <a style="color: black" href="/videoPromo.html">VIDEO PROMOCIONAL</a>
        </li>
        <li><a style="color: black" href="#">MAIS VENDIDOS!</a></li>

        <!--     <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Dropdown</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Link 1</a>
                    <a class="dropdown-item" href="#">Link 2</a>
                    <a class="dropdown-item" href="#">Link 3</a>
                </div>
            </li> -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>

<style>
</style>

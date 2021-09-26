<template>
  <div class="content">
    <form class="form-horizontal caixa">
      <!-- Login -->
      <h2>Faça Login</h2>
      <div class="form-group">
        <label class="control-label col-md-12" for="email">Email:</label>

        <div class="col-md-12">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="Ex:joão@gmail.com"
          />
        </div>
      </div>

      <div class="form-group">
        <label class="control-label col-md-10 o" for="pwd">Senha:</label>

        <div class="col-md-10">
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Senha"
          />
        </div>
      </div>

      <div class="form-group">
        <div class="checkbox ck">
          <label><input type="checkbox" /> Lembre de mim</label>
        </div>
      </div>

      <div class="form-group bt">
        <button type="submit" class="btn btn-primaray">Continue</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content div {
  width: 100%;
}

.caixa {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  width: 70vh;
  height: 50vh;
  /*box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;*/
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px 10px 10px 10px;
  background-color: var(--bg-color-primary);
}

.caixa label {
  color: white;
}

.caixa h2 {
  color: white;
}

.ck {
  display: flex;
  justify-content: start;
}

.bt button {
  width: 100%;
  background-color: var(--color-text-primary);
}
</style>

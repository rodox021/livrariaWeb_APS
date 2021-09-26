<template>
  <div class="princial">
    <div class="caixa">
      <form class="form-group">
        <div class="form-group col-md-12">
          <label for="nome">Nome Completo</label>
          <input type="text" class="form-control" placeholder="Seu nome" />
        </div>

        <div class="form-group col-md-12">
          <label for="email">Endereço de email</label>
          <input type="email" class="form-control" placeholder="Seu email" />
        </div>
        <div class="form-group col-md-12">
          <label for="pwd">Senha</label>
          <input
            type="password"
            class="form-control"
            id="pwd"
            placeholder="Senha"
          />
        </div>
        <div class="form-group col-md-12">
          <label for="confirmpws">Confirme a senha</label>
          <input
            type="password"
            class="form-control"
            id="confirmpws"
            placeholder="Confirme a Senha"
          />
        </div>

        <button type="submit" class="btn">Cadastrar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.caixa {
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;

  /*box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;*/

  /* background-color: var(--bg-color-primary); */
}
.caixa form {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px 10px 10px 10px;
  width: 70%;
  padding: 20px;
}
.caixa div {
  margin-bottom: 30px;
}
.btn {
  background-color: var(--bg-color-secondary);
  color: var(--color-text-primary);
}
.btn:hover {
  background-color: var(--bg-color-primary);
  color: var(--color-text-primary);
}
</style>

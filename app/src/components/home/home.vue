<template>
  <div class="home">
    <h1><i class="fa fa-home fa-4x"></i></h1>
    <h2>{{ BoasVindas() }} caro leitor!!</h2>
    <h3>Divista-se</h3>
  </div>
</template>

<script>
export default {
  name: "home",
  data: function () {
    return {
      msg: null,
    };
  },

  methods: {
    BoasVindas() {
      var now = new Date();

      var hour = now.getHours();
      if (hour > 6 && hour < 12) {
        this.msg = "Bom Dia";
      } else if (hour > 12 && hour < 18) {
        this.msg = "Boa tarde";
      } else if (hour > 18) {
        this.msg = "Boa Noite";
      }

      return this.msg;
    },
    mounted() {
      this.BoasVindas();
    },
  },
};
</script>

<style>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.home h2,
.home h3 {
  font-weight: bold;
  color: blueviolet;
}
</style>

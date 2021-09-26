<template>
  <footer class="footer">
    ₢ Denvolvido com Am<i class="fa fa-heart"></i>r
  </footer>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style>
.footer {
  background: linear-gradient(
    to right,
    var(--bg-color-primary),
    var(--bg-color-secondary)
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  grid-area: footer;

  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

footer i {
  color: red;
}
</style>

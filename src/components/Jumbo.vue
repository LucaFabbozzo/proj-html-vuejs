  <script>
  export default {
    name: 'Jumbo'
  }
  </script>

<template>
  <div class="jumbo">
    <h1>Jumbotron</h1>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
  .jumbo {
    background-color: $top-background;
  }
</style>
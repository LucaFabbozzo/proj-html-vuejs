  <script>
  export default {
    name: 'Jumbo'
  }
  </script>

<template>
  <div class="jumbo">
    <div class="container w-75 m-auto">
      <h1>Jumbotron</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
  .jumbo {
    background-color: $top-background;
    height: 750px;
  }
</style>
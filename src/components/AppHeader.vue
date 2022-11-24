  <script>
  export default {
    name: 'AppHeader'
  }
  </script>

<template>
  <header>
    <div class="container w-75 m-auto">
      <h1>Header</h1>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
  header {
    background-color: $top-background;
    height: 70px;
  }

</style>
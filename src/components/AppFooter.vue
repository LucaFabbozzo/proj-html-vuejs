  <script>
  export default {
    name: 'AppFooter'
  }
  </script>

<template>
  <footer>
    <div class="container w-75 m-auto">
      <h1>Footer</h1>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
footer {
  background-color: $footer-background;
  color: #ffffff;
  height: 530px;
}
</style>
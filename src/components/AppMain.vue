  <script>
  import TopMain from './TopMain.vue';
export default {
  name: 'AppMain',
  components: {TopMain}
  }
  </script>

<template>
  <main>
    <div class="container w-75 m-auto">
      <TopMain />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
  main {
    background-color: $main-background;
  }
</style>
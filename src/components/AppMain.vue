  <script>
import TopMain from './TopMain.vue';
import CenterMain from './CenterMain.vue';
export default {
  name: 'AppMain',
  components: {TopMain, CenterMain}
  }
  </script>

<template>
  <main>
    <div class="container w-75 m-auto">
      <TopMain />
      <CenterMain />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
  main {
    background-color: $main-background;
  }
</style>
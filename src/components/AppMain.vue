<script>
import TopMain from './TopMain.vue';
import CenterMain from './CenterMain.vue';
import BottomMain from './BottomMain.vue';
export default {
  name: 'AppMain',
  components: { TopMain, CenterMain, BottomMain }
}
</script>

<template>
  <main>
    <div class="container-lf">
      <TopMain />
      <CenterMain />
      <BottomMain />
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;

main {
  background-color: $main-background;

  .container-lf {
    width: 75%;
    margin: 0 auto;
  }
}

// media query

@media screen and (max-width: 568px) {
  main {
    .container-lf {
      width: 50%;
    }
  }

}
</style>
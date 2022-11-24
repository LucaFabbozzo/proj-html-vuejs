
  <script>
import AppHeader from './components/AppHeader.vue'
import Jumbo from './components/Jumbo.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
  export default {
  name: 'App',
   components: {AppHeader, Jumbo, AppMain, AppFooter}
  }
  </script>

<template>
    <AppHeader />
    <Jumbo />
    <AppMain />
    <AppFooter />
</template>

<style lang="scss">
@use './styles/general.scss'
  

</style>
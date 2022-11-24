
  <script>
import AppHeader from './components/AppHeader.vue'
import Jumbo from './components/Jumbo.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import BottomFooter from './components/BottomFooter.vue'
  export default {
  name: 'App',
   components: {AppHeader, Jumbo, AppMain, AppFooter, BottomFooter}
  }
  </script>

<template>
    <AppHeader logo="logo" />
    <Jumbo />
    <AppMain />
    <AppFooter />
    <BottomFooter />
</template>

<style lang="scss">
@use './styles/general.scss'
  

</style>
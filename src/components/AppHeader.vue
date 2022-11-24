  <script>
  import {store} from '../data/store'
  export default {
  name: 'AppHeader',
  props: {
      logo: String
  },
  data() {
    return {
      store
      }
    }
  }
  </script>

<template>
  <header>
    <div class="container w-75 m-auto d-flex align-items-center justify-content-between h-100">
      <div class="logo">
        <img src="../assets/img/logo-dark.png" alt="logo">
      </div>
      <nav>
        <ul>
          <li v-for="(menus, index) in store.navbar" :key="index">{{menus}}</li>
        </ul>
      </nav>
      <div class="icons">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-brands fa-github"></i>
        <i class="fa-brands fa-stack-overflow"></i>
        <i class="fa-regular fa-user"></i>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
  header {
    background-color: $top-background;
    height: 70px;
  .logo {
    img {
      width: 130px;
    }
  }   
  nav {
    ul {
      display: flex;
      justify-content: space-between;
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        text-transform: uppercase;
        padding-left: 40px;
      }
    }
    }
  .icons {
    width: 180px;
    display: flex;
    justify-content: space-evenly;
  }
 
  }
</style>
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
          <li 
          v-for="(menus, index) in store.navbar" 
          :key="index"
          :class="{'active' : menus.active}"
          >{{menus.label}}<i v-if="menus.items" class="fa-solid fa-chevron-down"></i>
        </li>
        </ul>
      </nav>
      <div class="icons">
        <i class="fa-solid fa-magnifying-glass null"></i>
        <i class="fa-brands fa-github color"></i>
        <i class="fa-brands fa-stack-overflow color"></i>
        <i class="fa-regular fa-user color"></i>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
  header {
    background-color: $top-background;
    height: 70px;
  .active {
    color: #2F55D4;
  }
  .logo {
    cursor: pointer;
    img {
      width: 160px;
      padding-right: 30px;
    }
  }   
  nav {
   min-width: 380px;
    ul {
      display: flex;
      justify-content: space-between;
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: bold;
        cursor: pointer;
        i {
          font-size: 0.8rem;
          margin-left: 5px;
        }
      }
    }
    }
  .icons {
    width: 180px;
    display: flex;
    justify-content: space-evenly;
      i.color {  
      padding: 12px;
      background-color: #E4E9F8;
      border-radius: 10px;
      cursor: pointer;
      color: $secondary-color;  
    }
      i.null {
        color: #8997AA;
        padding: 12px;
      }
    }
  }
</style>
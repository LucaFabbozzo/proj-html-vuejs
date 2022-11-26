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
          ><a :class="{'active' : menus.active}" href="#">{{menus.label}}<i v-if="menus.items" class="fa-solid fa-chevron-down"></i></a>
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
    ul {
      margin: 0;
      padding: 0;
      li {
        display: inline-block;
        list-style: none;
        padding: 0 20px;
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: bold;
        cursor: pointer;
        a {
          text-decoration: none;
          color: #3c4858;
        }
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
    & i.color:hover {
      background-color: $secondary-color;
      color: #E4E9F8;
    }
      i.null {
        color: #8997AA;
        padding: 12px;
      }
    }
  }

  // media query

  @media screen and (max-width: 1050px) {
    nav {
      display: none;
    }
  }

</style>
  <script>
  import {store} from '../data/store'
  export default {
  name: 'AppFooter',
  data() {
    return {
        store
      }
    }
  }
  </script>

<template>
  <footer>
    <div class="container w-75 m-auto">
      <div class="top d-flex py-5">
        <div class="landrick d-flex flex-column align-items-start w-50">
          <img src="../assets/img/logo-light.png" alt="logo-footer">
          <p>Start working with Landrick that can provide everything you need to generate awareness, drive, traffic, connect.</p>
          <div class="icons d-flex">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
        <div class="company d-flex flex-column align-items-start w-25">
          <h4>Company</h4>
          <ul>
            <li v-for="(company, index) in store.companyNavbar" :key="index"><i class="fa-solid fa-chevron-right"></i>{{company}}</li>
          </ul>
        </div>
        <div class="usefull-links d-flex flex-column align-items-start w-25">
          <h4>Usefull Links</h4>
          <ul>
            <li v-for="(usefull, index) in store.usefullNavbar" :key="index"><i class="fa-solid fa-chevron-right"></i>{{usefull}}</li>
          </ul>
        </div>
        <div class="newsletter d-flex flex-column align-items-start w-25">
          <h4>Newsletter</h4>
          <p>Sign up and receive the latest tips via email.</p>
          <form>
            <label for="">Write your email</label>
            <input type="text" placeholder="Your email:">
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    </footer>

    
  
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
footer {
  background-color: $footer-background;
  color: #ffffff;
  height: 100%;
  border-bottom: 1px solid #26304F;
  p, label {
    font-size: 0.9rem;
    color: #adb5bd;
  }
  h4 {
    font-size: 1.1rem;
    padding-bottom: 5px;
  }
  ul {
    padding: 0;
    margin: 0;
    i {
      font-size: 0.7rem;
      padding-right: 10px;
    }
    li {
    list-style: none;
    font-size: 0.9rem;
    padding-bottom: 5px;
    color: #adb5bd;
    cursor: pointer;
  }
  }
  
  .landrick {
    img {
     width: 135px;
     padding-bottom: 30px;
    }
    p {
      padding-bottom: 30px;
      padding-right: 110px;
    }
   .icons i {
    color: #adb5bd;
    background-color: $footer-background;
    padding: 8px;
    margin-right: 10px;
    border: 1px solid #adb5bd;
    border-radius: 8px;
   }
  }

  .newsletter {
    input, 
    button {
      width: 250px;
      padding: 8px 10px;
      border-radius: 10px;
    }
    button {
      background-color: #232E52;
      color: #2f55d4;
      border: none;
      box-shadow: 1px 1px 4px 0px rgba($color: #2f55d4, $alpha: 1.0);

    }
    input {
      border: none;
      margin-top: 10px;
      margin-bottom: 15px;
      background-color: #27314f;
    }
    input::placeholder {
      color: white;
      font-size: 0.8rem;
    }
  }

}

</style>
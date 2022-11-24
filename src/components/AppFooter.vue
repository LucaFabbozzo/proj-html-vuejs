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
            <i class="fa-brands fa-square-instagram"></i>
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
      <div class="bottom d-flex justify-content-between align-items-center">
        <p>&copy;2020 Landrick. Design with &hearts; by Shreetthemes</p>
        <div class="credit d-flex">
          <img src="../assets/img/american-ex.png" alt="mastercard">
          <img src="../assets/img/discover.png" alt="mastercard">
          <img src="../assets/img/master-card.png" alt="mastercard">
          <img src="../assets/img/paypal.png" alt="mastercard">
          <img src="../assets/img/visa.png" alt="mastercard">
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
  p {
    font-size: 0.9rem;
    color: #adb5bd;
  }
  .landrick {
    img {
     width: 135px;
    }
   .icons {
    color: #adb5bd;
   }
  }

  .bottom {
    border-top: 1px solid #adb5bd;
    height: 90px;
    img {
      width: 35px;
    }
  }

}
</style>
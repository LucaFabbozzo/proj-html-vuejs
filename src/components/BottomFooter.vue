  <script>
  export default {
   name: 'BottomFooter'
  }
  </script>
<template>
        <footer>
          <ul>
            <li>
              <a href=""><i class="fa-solid fa-arrow-up"></i></a>
            </li>
          </ul>
          <div class="container w-75 bottom d-flex justify-content-between align-items-center">
            <p>&copy; 2020 Landrick. Design with ❤️ by Shreetthemes</p>
            <div class="credit d-flex">
              <img src="../assets/img/american-ex.png" alt="mastercard">
              <img src="../assets/img/discover.png" alt="mastercard">
              <img src="../assets/img/master-card.png" alt="mastercard">
              <img src="../assets/img/paypal.png" alt="mastercard">
              <img src="../assets/img/visa.png" alt="mastercard">
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
      min-width: 600px;
      font-size: 0.9rem;
      color: #adb5bd;
     }
     ul {
      float: right;
      margin-top: 30px;
      margin-right: 30px;
      li {
        list-style: none;
       i {
      color: #adb5bd;
      background-color: #2f55d4;
      padding: 10px;
      border-radius: 8px;
      font-size: 0.8rem;
      }
      }
     }
   .bottom {
    height: 90px;
    img {
      width: 35px;
      margin-right: 5px;
    }
  }
  }
</style>
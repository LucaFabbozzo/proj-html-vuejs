  <script>
  export default {
    name: 'Jumbo'
  }
  </script>

<template>
  <div class="jumbo">
    <div class="container d-flex py-5 w-75 m-auto">
        <div class="left">
          <span>Development</span>
          <h1>A complete<br>Developer Tolset</h1>
          <p>Launch your campaign and benefits from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
          <button>Get Started</button>
          <button>Documentation</button>
          <p>Current Version: v2.6.0</p>
        </div>
        <div class="right">
          <img src="../assets/img/about.png" alt="about">
        </div>
    </div>
  </div>
  <div class="clients">
    <div class="container d-flex justify-content-between align-items-center h-100 w-75">
      <img src="../assets/img/amazon.svg" alt="amazon">
      <img src="../assets/img/google.svg" alt="google">
      <img src="../assets/img/lenovo.svg" alt="lenovo">
      <img src="../assets/img/paypal.svg" alt="paypal">
      <img src="../assets/img/shopify.svg" alt="shopify">
      <img src="../assets/img/spotify.svg" alt="spotify">
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
  .jumbo {
    background-color: $top-background;
    height: 100%;
    border-bottom: 1px solid #edeff2;
    h1 {
      font-weight: 900;
      font-size: 2.8rem;
      padding-top: 20px;
      padding-bottom: 15px;
    }
    p {
      color: #8492a6;
    }
    span {
      color: $secondary-color;
      background-color: $btn-backgray;
      padding: 4px 10px;
      font-size: 0.7rem;
      font-weight: bold;
      border-radius: 10px;
    }
    img {
      min-width: 450px;
    }
    .left {
      min-width: 250px;
      max-width: 520px;
      padding-right: 30px;
      padding-top: 140px
    }
    .right {
      padding-top: 60px;
    }
  }
      .clients {
        height: 105px;
        background-color: #F8F9FC;
      img {
        width: 70px;
      }
    }
</style>
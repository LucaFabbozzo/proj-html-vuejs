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
          <button class="btn-blue">Get Started</button>
          <button class="btn-white">Documentation</button>
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
@use '../styles/partials/mixin' as *;
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
      width: 450px;
    }
    .btn-blue {
        @include btnBlue;
        margin-right: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 130;
      }
    & .btn-blue:hover {
      background-color: #2443AB
    }
    .btn-white {
      @include btnWhite;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    .left {
      min-width: 350px;
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
        min-width: 1000px;
        background-color: #F8F9FC;
        margin-bottom: 110px;
      img {
        width: 70px;
      }
    }

    // media query

    @media screen and (max-width: 1050px) {
      .jumbo {
              .left {
                  min-width: 400px;
                  max-width: 440px;
                }
              .right {
                img {
                  padding-top: 100px;
                  width: 300px;
                }
              }
          .clients {
            min-width: 600px;
          }   
      }

    }
</style>
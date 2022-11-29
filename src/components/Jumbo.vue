<script>
export default {
  name: 'Jumbo'
}
</script>

<template>
  <div class="jumbo">
    <i class="fa-solid fa-gear"></i>
    <div class=" container-lf">
      <div class="left">
        <span>Development</span>
        <h1>A complete<br>Developer Tolset</h1>
        <p>Launch your campaign and benefits from our expertise on designing and managing conversion centered bootstrap4
          html page.</p>
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

  .container-lf {
    display: flex;
    width: 75%;
    margin: 0 auto;
  }

  .fa-gear {
    color: $secondary-color;
    background-color: #ffffff;
    padding: 15px;
    font-size: 1rem;
    margin-top: 80px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    cursor: pointer;
  }

  h1 {
    font-weight: 900;
    font-size: 2.8rem;
    padding-top: 20px;
    padding-bottom: 15px;
  }

  p {
    color: #8492a6;
    font-size: 1.1rem;
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
    width: 480px;
    margin-left: 30px;
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

  & .btn-white:hover {
    background-color: #edeff2;
  }

  .left {
    min-width: 540px;
    max-width: 560px;
    padding-top: 80px;
  }

  .right {
    padding-top: 20px;
  }
}

.clients {
  height: 105px;
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
      padding-top: 30px;
    }

    .right {
      img {
        padding-top: 0px;
        width: 300px;
      }
    }

    .clients {
      min-width: 400px;
    }
  }
}

@media screen and (max-width: 810px) {
  .jumbo {
    .left {
      min-width: 270px;
      max-width: 300px;
      padding-top: 70px;
    }
  }

}

@media screen and (max-width: 568px) {
  .jumbo {
    .container-lf {
      width: 50%;
      flex-wrap: wrap;
    }
  }

  .clients {
    img {
      width: 44px;
    }
  }

}
</style>
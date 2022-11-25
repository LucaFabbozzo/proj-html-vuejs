  <script>
  export default {
    name: 'TopMain'
  }
  </script>

<template>
  <section class="main-top">
    <h3>Key Features</h3>
    <p>Start Working with <spam class="blue">Landrick</spam> that can provide everything you need to generate <br> awareness, drive traffic, connect</p>
    <div class="cards d-flex">
      <div class="square">
        <i class="fa-solid fa-layer-group top"></i>
        <h4>Modular</h4>
        <p>Composed in a pseudo-Latin<br>language which more or less<br> corresponds.</p>
        <p class="blue">Read More <i class="fa-solid fa-chevron-right bottom"></i></p>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixin' as *;
  .main-top {
    h3 {
      font-weight: 700;
      padding-bottom: 20px;
    }
    p {
      color: $primary-font;
      padding-bottom: 30px;
    }
    h4 {
      font-size: 1.1rem;
      padding-top: 20px;
    }
    .square {
      min-width: 245px;
      max-width: 260px;
      border: 1px solid #F6F6F7;
      padding: 10px 20px;
      margin-bottom: 80px;
      border-radius: 8px;
      i.bottom {
        font-size: 0.7rem;
        margin-left: 5px;
      }
      i.top {
        background-color: $btn-backgray;
        color: $secondary-color;
        padding: 15px;
        border-radius: 8px;
      }
      p {
        padding-bottom: 5px;
      }
      .blue {
        color: $secondary-color;
      }
    }
  }


</style>
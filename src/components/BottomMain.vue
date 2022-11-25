  <script>
  export default {
  name: 'BottomMain'
  }
  </script>

<template>
  <section class="main-bottom">
    <div class="top">
      <h3>Our Rates for developer from landrick team</h3>
      <p>Start working with <span>Landrick</span> that can provide everything you need to generate<br>awareness, drive traffic, connect</p>
    </div>
    <div class="bottom">
      <h3>Want to be among the first to find out?</h3>
      <p>Start working with <span>Landrick</span> that can provide everything you need to generate<br>awareness, drive traffic, connect</p>
      <form>
        <input type="text" name="" id="" placeholder="Email Address">
        <button>Get Started</button>
      </form>
    </div>
  </section>
</template>


<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixin' as *;
.main-bottom {
   h3 {
  @include h3;
  }
   p {
   @include p;
  }
  span {
    color: $secondary-color;
  }
  .top,
  .bottom {
  text-align: center;
  padding-bottom: 55px;
  min-width: 600px;
  form {
   min-width: 600px;
   width: 650px;
   margin: 0 auto;
   padding: 10px 20px;
   border-radius: 25px;
   border: 1px solid #F6F6F7;
   padding: 0;
    input {
      width: 500px;
      border: none;
      padding: 10px 20px;
      border-radius: 25px; 
      margin-right: 5px;
    }
    button {
      @include btnBlue;
      width: 130px;
      border-radius: 30px;
    }
  }
  }
}

</style>
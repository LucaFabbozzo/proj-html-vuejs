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
    <div class="center d-flex justify-content-between">
      <div class="box">
        <span>Basic</span>
        <h4>&dollar;9.00</h4>
        <p>Per Month</p>
        <p>All the basics for businesses that are just getting started</p>
        <div class="line"></div>
        <ul>
          <li><i class="fa-regular fa-circle-check"></i>Full Access</li>
          <li><i class="fa-regular fa-circle-check"></i>Enhaced Security</li>
          <li><i class="fa-regular fa-circle-check"></i>Source Files</li>
          <li><i class="fa-regular fa-circle-check"></i>1 Domain Free</li>
          <li><i class="fa-regular fa-circle-check"></i>Enhaced Security</li>
        </ul>
        <button class="btn-blue">Buy Now</button>
        <p>* No credit card required</p>
      </div>
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
  .center {
    padding-bottom: 100px;
    font-size: 1rem;
   .box {
     min-width: 345px;
     width: 345px;
     border: 1px solid #F6F6F7;
     padding: 12px 23px;
     border-radius: 10px;
     span {
      display: inline-block;
      color: $secondary-color;
      font-size: 1rem;
      background-color: $btn-backgray;
      padding: 10px 20px;
      margin-bottom: 15px;
      margin-top: 10px;
      border-radius: 20px;

     }
     .line {
      width: 100%;
      height: 1px;
      background-color: #F6F6F7;
      margin-bottom: 10px;
     }
     .btn-blue {
      @include btnBlue;
      width: 300px;
      margin-bottom: 10px;
     }
     & .btn-blue:hover {
      background-color: #2443AB;
     }
     ul {
      margin: 0;
      padding: 0;
      list-style: none;
      margin-bottom: 25px;
      li {
        color: $primary-font;
        line-height: 2;
        i {
          color: $secondary-color;
          margin-right: 10px;
        }
      }
     }
   }
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
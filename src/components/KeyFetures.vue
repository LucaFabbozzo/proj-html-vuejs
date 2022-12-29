<script>
  export default {
    name: 'KeyFeatures'
  }
  </script>

<template>
    <div class="cards d-flex justify-content-between">
      <div class="square left">
        <i class="fa-solid fa-layer-group top"></i>
        <h4>Modular</h4>
        <p>Composed in a pseudo-Latin<br>language which more or less<br> corresponds.</p>
        <p class="blue">Read More <i class="fa-solid fa-chevron-right bottom"></i></p>
      </div>
      <div class="square middle-left">
        <i class="fa-solid fa-desktop top"></i>
        <h4>Responsive</h4>
        <p>Composed in a pseudo-Latin<br>language which more or less<br> corresponds.</p>
        <p class="blue">Read More <i class="fa-solid fa-chevron-right bottom"></i></p>
      </div>
      <div class="square middle-right">
        <i class="fa-solid fa-users-viewfinder top"></i>
        <h4>Customizable</h4>
        <p>Composed in a pseudo-Latin<br>language which more or less<br> corresponds.</p>
        <p class="blue">Read More <i class="fa-solid fa-chevron-right bottom"></i></p>
      </div>
      <div class="square right">
        <i class="fa-solid fa-arrows-up-down-left-right top"></i>
        <h4>Scalable</h4>
        <p>Composed in a pseudo-Latin<br>language which more or less<br> corresponds.</p>
        <p class="blue">Read More <i class="fa-solid fa-chevron-right bottom"></i></p>
      </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixin' as *;


p {
  color: $primary-font;
  padding-bottom: 30px;
}

h4 {
  font-size: 1.1rem;
  padding-top: 20px;
}

.cards {
   .square {
     width: 250px;
     height: 300px;
     border: 1px solid #F6F6F7;
     padding: 10px 20px;
     margin-bottom: 80px;
     border-radius: 8px;
     cursor: pointer;
     transition: 0.5s all;


     &.square:hover {
       transform: scale(1.07);
       transform-origin: bottom;
     }


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

   .left {
     background-image: none;
     background-size: cover;
   }

   & .left:hover {
     background-image: url('../assets/img/layer-group-solid.svg');
   }

   .middle-left {
     background-image: none;
     background-size: cover;
   }

   & .middle-left:hover {
     background-image: url('../assets/img/desktop-solid.svg');
   }

   .middle-right {
     background-image: none;
     background-size: cover;
   }

   & .middle-right:hover {
     background-image: url('../assets/img/users-viewfinder-solid.svg');
   }

   .right {
     background-image: none;
     background-size: cover;
   }

   & .right:hover {
     background-image: url('../assets/img/up-down-left-right-solid.svg');
   }
 }
</style>
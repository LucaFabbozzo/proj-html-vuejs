  
<script>
export default {
  name: 'CenterMain'
}
</script>

<template>
  <section class="main-center d-flex justify-content-between">
    <div class="left">
      <h3>Build tools and<br>extensive documentation</h3>
      <p>You can combine all the Landrick templates into a single one, you can take a <br>component from the Application
        theme and use it in the Website.</p>
      <ul>
        <li><i class="fa-regular fa-circle-check"></i>Digital Marketing Solution for Tomorrow</li>
        <li><i class="fa-regular fa-circle-check"></i>Our Talented & Esperienced Marketing Agency</li>
        <li><i class="fa-regular fa-circle-check"></i>Created your own skin to match your brand</li>
      </ul>
      <button class="btn-blue">Read More<i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <div class="right">
      <img src="../assets/img/1.png" alt="#">
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixin' as *;

.main-center {
  padding-top: 50px;
  padding-bottom: 100px;

  h3 {
    @include h3;
  }

  p {
    @include p;
  }

  .left {
    min-width: 550px;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-right: 20px;

    ul {
      padding: 0;
      list-style: none;
      padding-bottom: 10px;

      li {
        @include p;

        i {
          color: $secondary-color;
          margin-right: 10px;
        }
      }
    }

    button {
      @include btnBlue;

      i {
        margin-left: 8px;
        font-size: 0.8rem;
      }
    }

  }

  .right {
    img {
      max-width: 450px;
      min-width: 430px;
    }
  }
}

// media query

@media screen and (max-width: 1050px) {
  .main-center {
    .left {
      min-width: 350px;
    }

    .right {
      img {
        max-width: 300px;
        min-width: 280px;
        padding-top: 50px;
      }
    }
  }

}


@media screen and (max-width: 810px) {
  .main-center {
    .left {
      min-width: 320px;
      min-width: 0px;
      padding-top: 0px;
      padding-bottom: 0px;
      padding-right: 70px;
    }
  }
}

@media screen and (max-width: 568px) {
  .main-center {
    flex-wrap: wrap;

    .left {
      padding-right: 0px;
    }
  }
}
</style>
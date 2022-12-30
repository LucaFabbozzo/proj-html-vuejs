<script>
import { store } from '../data/store';
import Rates from './Rates.vue'
export default {
  name: 'BottomMain',
  components: {Rates},
  data() {
    return {
      store
    }
  }
}

</script>

<template>
  <section class="main-bottom">
    <div class="top">
      <h3>Our Rates for developer from landrick team</h3>
      <p>Start working with <span>Landrick</span> that can provide everything you need to generate<br>awareness, drive
        traffic, connect</p>
    </div>
    <!-- stampo i box dinamicamente tramite i miei dati in store ed il ribbon se true o false -->
    <Rates />
    <div class="bottom">
      <h3>Want to be among the first to find out?</h3>
      <p>Start working with <span>Landrick</span> that can provide everything you need to generate<br>awareness, drive
        traffic, connect</p>
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


  .top,
  .bottom {
    text-align: center;
    padding-bottom: 55px;
    min-width: 600px;

    span {
      font-weight: bold;
    }

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

      input:focus {
        outline: none;
      }

      button {
        @include btnBlue;
        width: 130px;
        border-radius: 30px;
      }

      button:hover {
        background-color: #2443AB;
      }
    }
  }
}

//**************** MEDIA *****************/


@media screen and (max-width: 810px) {
    .bottom {
      form {
        min-width: 450px;
        width: 455px;

        input {
          width: 300px;
        }
      }
    }
  }


@media screen and (max-width: 568px) {
  .main-bottom {

    .top,
    .bottom {
      min-width: 300px;

      form {
        min-width: 310px;
        width: 100px;

        input {
          width: 140px;
        }
      }
    }
  }
}
</style>






<script>
import {store} from '../data/store'
  export default {
  name: 'Rates',
  data() {
    return {
      store
    }
    }
  }
  </script>

<template>
  <div class="center d-flex justify-content-between">
    <div class="box" v-for="(rate, index) in store.rates" :key="index">
      <div v-if="rate.best" class="ribbon"><span>Best</span></div>
      <span>{{ rate.plan }}</span>
      <h4>&dollar;{{ rate.prize }}</h4>
      <p>{{ rate.paid }}</p>
      <p>{{ rate.description }}</p>
      <!-- stampo dinamicamente la lista -->
      <ul>
        <li v-for="(lists, index) in rate.list" :key="index"><i class="fa-regular fa-circle-check"></i>{{ lists }}
        </li>
      </ul>
      <button class="btn-blue">{{ rate.button }}</button>
      <p v-if="rate.creditCard">* No credit card required</p>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixin' as *;
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
    }
.box {
       min-width: 290px;
       max-width: 315px;
       border: 1px solid #F6F6F7;
       padding: 12px 23px;
       border-radius: 10px;
       cursor: pointer;
       border-bottom: 3px solid $primary-font;
       transition: 0.5s all;
       position: relative;
  
       &.box:hover {
         transform: scale(1.04);
         border-bottom: 3px solid $secondary-color;
         box-shadow: 0px 1px 9px rgba($color: $primary-font, $alpha: 1.5);
       }
  
  
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
         width: 95%;
         text-align: center;
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
  
       // ribbon
       .ribbon {
         width: 133px;
         height: 154px;
         position: absolute;
         top: -4px;
         right: -4px;
         overflow: hidden;
       }
  
       .ribbon span {
         position: absolute;
         left: 37px;
         bottom: 91px;
         transform: rotate(48deg);
         width: 136px;
         background: #F17424;
         padding: 3px 0;
         color: #fff;
         text-align: center;
         font-size: 14px;
         box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
       }
     }



//**************** MEDIA *****************/

@media screen and (max-width: 1050px) {

    .center {
      width: 50%;

      .box {
        min-width: 260px;
        margin: 10px;
      }
    }


}

@media screen and (max-width: 810px) {
    .center {
      .box {
        min-width: 180px;
      }
    }

  }


@media screen and (max-width: 568px) {

    .center {
      flex-wrap: wrap;

      .box {
        min-width: 270px;
      }
    }
  }
</style>
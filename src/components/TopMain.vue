<script>
import { store } from '../data/store'
export default {
  name: 'TopMain',
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <section class="main-top">
    <h3>Key Features</h3>
    <p>Start Working with <span class="blue">Landrick</span> that can provide everything you need to generate <br>
      awareness, drive traffic, connect.</p>
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
    <div class="text-center down">
      <p class="blue">Quickstart</p>
      <h3>Awesome isn't it? Let's dive in!</h3>
      <p>Start working with Landrick that can provide everything you need to generate<br>awareness, drive traffic,
        connect</p>
      <div class="box">
        <div class="items d-flex">
          <!-- stampo dinamicamente la lista con la classe active attivata-->
          <ul>
            <li v-for="(items, index) in store.quickStartNavbar" :key="index" :class="{ 'active': items.active }"><a
                href="#">{{ items.label }}</a></li>
          </ul>
        </div>
        <p class="install"><span class="green">$</span>npm install <span class="green">-g</span>claps.js</p>
      </div>
      <div class="checked">
        <span><i class="fa-regular fa-circle-check"></i>Organize your data</span>
        <span><i class="fa-regular fa-circle-check"></i>Work with any team</span>
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

  span {
    color: $secondary-color;
  }

  .cards {
    .square {
      min-width: 190px;
      width: 200px;
      height: 300px;
      border: 1px solid #F6F6F7;
      padding: 10px 20px;
      margin-bottom: 80px;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.5s all;
      position: relative;


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
  }


  .square:after {
    font-family: FontAwesome;
    position: absolute;
    font-size: 140px;
    top: 40%;
    left: 58%;
    margin: -90px 0 0 -92px;
    color: #2F55D4;
    opacity: 0.05;
    z-index: 1;
  }

  .left:after {
    content: '\f5fd';
  }

  .middle-left:after {
    content: '\f390';
  }

  .middle-right:after {
    content: '\e595';
  }

  .right:after {
    content: '\f0b2';
  }



  .down {
    p.blue {
      color: $secondary-color;
      padding: 0;
    }

    .checked {
      text-align: start;
      width: 65%;
      margin: 0 auto;
      margin-bottom: 50px;

      span {
        color: $primary-font;
        font-size: 0.9rem;
        margin-right: 25px;

        i {
          color: #2eca8b;
          margin-right: 5px;
        }
      }
    }

    .box {
      background-color: #3c4858;
      border-radius: 8px;
      width: 65%;
      min-width: 500px;
      margin: 0 auto;
      margin-bottom: 10px;

      span.green {
        color: #2eca8b;
        margin-right: 5px;
      }
    }

    p.install {
      width: 95%;
      margin: 0 auto;
      text-align: start;
      padding-top: 10px;
      padding-bottom: 15px;
    }

    ul {
      margin: 0 auto;
      padding: 0;
      display: flex;
      justify-content: space-between;
      width: 95%;
      margin-top: 20px;
      margin-bottom: 5px;
      background-color: #4F5A68;
      border-radius: 8px;
      border: 1px solid #5B6473;

      .active {
        background-color: #3c4858;
      }

      li {
        list-style: none;
        width: 20%;
        height: 100%;
        padding: 5px 10px;
        border-radius: 6px;
        cursor: pointer;

        a {
          text-decoration: none;
          color: #ffffff;
        }
      }

      & li:hover {
        background-color: #3c4858;
      }
    }
  }
}


// media query
@media screen and (max-width: 1050px) {
  .main-top {
    .cards {
      flex-wrap: wrap;

      .square {
        min-width: 280px;
      }
    }

    .down {
      p {
        font-size: 0.8rem;
      }

      ul {
        li {
          font-size: 0.8rem;
        }
      }

      .box {
        width: 100%;
        min-width: 10px;
      }
    }
  }
}


@media screen and (max-width: 568px) {}
</style>
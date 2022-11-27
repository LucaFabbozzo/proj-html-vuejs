<script>
import { store } from '../data/store'
import BottomFooter from './BottomFooter.vue';
export default {
  name: 'AppFooter',
  components: { BottomFooter },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <footer>
    <div class="container w-75 m-auto">
      <div class="top d-flex py-5">
        <div class="landrick d-flex flex-column align-items-start w-50">
          <img src="../assets/img/logo-light.png" alt="logo-footer">
          <p>Start working with Landrick that can provide everything you need to generate awareness, drive, traffic,
            connect.</p>
          <div class="icons d-flex">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
        <div class="company d-flex flex-column align-items-start w-25">
          <h4>Company</h4>
          <ul>
            <li v-for="(company, index) in store.companyNavbar" :key="index"><i class="fa-solid fa-chevron-right"></i><a
                href="">{{ company }}</a></li>
          </ul>
        </div>
        <div class="usefull-links d-flex flex-column align-items-start w-25">
          <h4>Usefull Links</h4>
          <ul>
            <li v-for="(usefull, index) in store.usefullNavbar" :key="index"><i class="fa-solid fa-chevron-right"></i><a
                href="#">{{ usefull }}</a></li>
          </ul>
        </div>
        <div class="newsletter d-flex flex-column align-items-start w-25">
          <h4>Newsletter</h4>
          <p>Sign up and receive the latest tips via email.</p>
          <form>
            <div class="font-user">
              <label for="">Write your email<span>*</span></label>
              <input type="text" placeholder="Your email:">
              <i class="fa-regular fa-envelope"></i>
            </div>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  </footer>
  <BottomFooter />


</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;

footer {
  background-color: $footer-background;
  color: #ffffff;
  height: 100%;
  border-bottom: 1px solid #26304F;

  p,
  label {
    font-size: 0.9rem;
    color: #adb5bd;
  }

  h4 {
    font-size: 1.1rem;
    padding-bottom: 5px;
  }

  ul {
    padding: 0;
    margin: 0;

    i {
      font-size: 0.7rem;
      padding-right: 10px;
    }

    li {
      list-style: none;
      font-size: 0.9rem;
      padding-bottom: 5px;
      color: #adb5bd;
      cursor: pointer;

      a {
        text-decoration: none;
        color: #adb5bd;
      }
    }
  }

  .landrick {
    min-width: 300px;

    img {
      width: 135px;
      padding-bottom: 30px;
    }

    p {
      padding-bottom: 30px;
      padding-right: 110px;
    }

    .icons i {
      color: #adb5bd;
      background-color: #202942;
      padding: 7px 8px;
      margin-right: 5px;
      border: 1px solid #adb5bd;
      border-radius: 8px;
      width: 31px;
      height: 30px;
      line-height: 15px;
      cursor: pointer;
    }

    & i:hover {
      background-color: $primary-font;
      color: $secondary-color;
    }
  }

  .company {
    min-width: 100px;
  }

  .usefull-links {
    min-width: 160px;
  }

  .newsletter {
    min-width: 260px;

    span {
      color: #E53F52;
      margin-left: 2px;
    }

    input,
    button {
      width: 250px;
      padding: 8px 10px;
      border-radius: 10px;
    }

    button {
      background-color: #232E52;
      color: #223881;
      border: none;
      box-shadow: 1px 1px 4px 0px rgba($color: #2f55d4, $alpha: 1.0);
    }

    & button:hover {
      background-color: #364883;
    }

    .font-user {
      position: relative;
    }

    .font-user i {
      position: absolute;
      left: 15px;
      top: 47px;
      color: $primary-font;
    }

    input {
      border: none;
      margin-top: 10px;
      margin-bottom: 15px;
      background-color: #27314f;
      padding-left: 40px;
    }

    input::placeholder {
      color: white;
      font-size: 0.8rem;
    }
  }

}

// media query

@media screen and (max-width: 1050px) {
  footer {
    .landrick {
      min-width: 200px;

      p {
        padding-right: 40px;
      }
    }
  }
}
</style>



<!-- 
<!DOCTYPE html> 
<html> 
  
<head>
    <link rel="stylesheet" href= 
"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> 
      
    <style> 
      
        /* Assign full width inputs*/ 
        input[type=text], 
        input[type=password] { 
            width: 100%; 
            padding: 12px 40px; 
            margin: 8px 0; 
            display: inline-block; 
            border: 1px solid #ccc; 
            box-sizing: border-box; 
        } 
          
        /* Set a style for the buttons*/ 
        button { 
            background-color: #4CAF50; 
            color: white; 
            padding: 14px 20px; 
            margin: 8px 0; 
            border: none; 
            cursor: pointer; 
            width: 100%; 
        } 
  
        /* Set a hover effect for the button*/ 
        button:hover { 
            opacity: 0.8; 
        } 
  
        /* Set extra style for the cancel button*/ 
        .container { 
            padding: 16px; 
        } 
      
        .fontuser {
            position: relative;
        }
          
        .fontuser i{
            position: absolute;
            left: 15px;
            top: 40px;
            color: gray;
        }
          
        .fontpassword {
            position: relative;
        }
          
        .fontpassword i{
            position: absolute;
            left: 15px;
            top: 40px;
            color: gray;
        }
    </style> 
</head>
  
<body> 
    <div class="container"> 
        <div class="fontuser">
            <label><b>Username</b></label> 
            <input type="text" 
                    placeholder="Enter Username"
                    name="uname" required> 
            <i class="fa fa-user fa-lg"></i>
        </div>
          
        <div class="fontpassword">
            <label><b>Password</b></label> 
            <input type="password"
                    placeholder="Enter Password"
                    name="psw" required> 
            <i class="fa fa-key fa-lg"></i>
        </div>     
          
        <button type="submit">Login</button> 
        <input type="checkbox" checked="checked">
                Remember me 
    </div> 
</body> 
  
</html> -->
<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-inverse fixed-top">
  <div class="container-fluid">
    <ul class="nav navbar-nav">
      <li id="home"><router-link :to="{ name: 'Home' }">HOME</router-link></li>
      <li id="about"><router-link to="/about">ABOUT</router-link></li>
      <li id="portfolio"><router-link to="/portfolio">PORTFOLIO</router-link></li>
      <li id="pricing"><router-link to="/pricing">PRICING</router-link></li>
      <li id="contact"><router-link to="/contact">CONTACT</router-link></li>
    </ul>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="https://twitter.com/Peterthegotoguy"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
      <li><a href="https://github.com/Crowmeleon"><i class="fa fa-github-square" aria-hidden="true"></i></a></li>
    </ul>
  </div>
  <div class="underline">
    <div id="underline"></div>
  </div>
</nav>
<div class="mobile-nav">
  <nav role="navigation">
    <div id="menuToggle">
      <!--
      A fake / hidden checkbox is used as click reciever,
      so you can use the :checked selector on it.
      -->
      <input id = "check" type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
      <ul id="menu">
        <li id="home"><router-link :to="{ name: 'Home' }">HOME</router-link></li>
        <li id="about"><router-link to="/about">ABOUT</router-link></li>
        <li id="portfolio"><router-link to="/portfolio">PORTFOLIO</router-link></li>
        <li id="pricing"><router-link to="/pricing">PRICING</router-link></li>
        <li id="contact"><router-link to="/contact">CONTACT</router-link></li>
      </ul>
    </div>
  </nav>
</div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function(){
    this.$nextTick(function(){

      $('#menu li').on('click', function(){
        $('#check').prop('checked', false);
      });

      var underline = $('#underline');
      var home = $('#home');
      var about = $('#about');
      var pricing = $('#pricing');
      var contact = $('#contact');
      var portfolio = $('#portfolio');
      var url = this.$route.path;

      function underlineTran(item, amount){
        item.on('click', function(){
          underline.css({'margin-left':amount});
          $('body').scrollTop(0);
        })
      }

      underlineTran(about, '123px');
      underlineTran(home, '33px');
      underlineTran(portfolio, '240px');
      underlineTran(pricing, '360px');
      underlineTran(contact, '470px');

      if(url == '/about'){
        underline.css({'margin-left':'123px'});
      }
      if(url == '/pricing'){
        underline.css({'margin-left':'360px'});
      }
      if(url == '/contact'){
        underline.css({'margin-left':'470px'});
      }
      if(url == '/portfolio'){
        underline.css({'margin-left':'240px'});
      }
      if(url == '/'){
        underline.css({'margin-left':'33px'});
      }
    });
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url('https://fonts.googleapis.com/css?family=Special+Elite');
@import url('https://fonts.googleapis.com/css?family=Cormorant');
html{
  overflow-x: hidden;
  margin-top:0px;
}
.underline{
  width:500px;
  height:10px;
}
#underline{
  width:50px;
  height:3px;
  margin-left:33px;
  transition:0.3s;
  background-color:#fff;
}
h1, h2, h3, a, li{
  font-family: 'Montserrat', sans-serif;
}
p{
  font-family: 'Cormorant', serif;
  font-size:22px;
}
.jumbotron{
  margin-top:-20px;
}
.jumbotron h1{
  text-align:center;
}
.jumbotron p{
  text-align:center;
}
.header{
  position:absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  top:120px;
  margin:auto;
  width:50%;
  padding:20px;
  background-color:rgba(255,255,255,0.9);
  border:solid 3px rgba(0,0,0,0.3);
  -webkit-border-radius:10px;
  -moz-border-radius:10px;
  -ex-border-radius:10px;
}
.header h1{
  font-size:60px;
  text-align:center;
}
.header p{
    text-align: center;
}
.navbar{
  margin-top:20px;
  border-radius:0px !important;
  position: fixed !important;
  width:100% !important;
  z-index:2 !important;
  background-color:rgba(0,0,0,0.7) !important;
}
.navbar-inverse .navbar-nav>li>a{
  color:#fff !important;
  font-size:18px;
  font-weight:bold;
  transition:0.3s;
}
.navbar-inverse .navbar-nav>li>a:hover{
  color:#9d9d9d !important;
}
.main-container{
padding:60px;
}
h2 span{
  font-weight: bold;
}
h2{
  color:#46888D;
  margin-bottom:4%;
}
i{
  right:40px !important;
  position:absolute;
  font-size:27px !important;
}
.port-btn{
width:150px;
height:50px;
line-height:50px;
background-color:#46888D;
font-size:22px;
text-align:center;
color:white;
-webkit-border-radius: 12px;
-moz-border-radius: 12px;
border-radius: 12px;
cursor: pointer;
margin:40px 0px 40px 0px;
transition:0.3s;
-webkit-touch-callout: none;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
.port-btn p{
  font-family: 'Montserrat', sans-serif;
}
a:hover{
  text-decoration: none !important;
}
.port-btn:hover{
  background-color:#8DBEC1;
  box-shadow: 0px 5px 5px #999;
  text-decoration:none !important;
}
.mobile-nav{
  padding:30px 0px 30px 30px;
  background-color:#46888D !important;
}
#menuToggle input
{
  display: block;
  width: 40px;
  height: 32px;
  position: absolute;
  top: 22px;
  left: 22px;

  cursor: pointer;

  opacity: 0; /* hide this */
  z-index: 999; /* and place it over the hamburger */

  -webkit-touch-callout: none;
}

/*
 * Just a quick hamburger
 */
#menuToggle span
{
  display: block;
  width: 33px;
  height: 4px;
  margin-bottom: 5px;
  position: relative;

  background: #cdcdcd;
  border-radius: 3px;

  z-index: 5;

  transform-origin: 4px 0px;

  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
}

#menuToggle span:first-child
{
  transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2)
{
  transform-origin: 0% 100%;
}

/*
 * Transform all the slices of hamburger
 * into a crossmark.
 */
#menuToggle input:checked ~ span
{
  opacity: 1;
  transform: rotate(45deg) translate(-2px, -1px);
  background: #232323;
}

/*
 * But let's hide the middle one.
 */
#menuToggle input:checked ~ span:nth-last-child(3)
{
  opacity: 0;
  transform: rotate(0deg) scale(0.2, 0.2);
}

/*
 * Ohyeah and the last one should go the other direction
 */
#menuToggle input:checked ~ span:nth-last-child(2)
{
  opacity: 1;
  transform: rotate(-45deg) translate(0, -1px);
}
#menu
{
  position: absolute;
  width: 110%;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  z-index:1;

  background: #ededed;
  list-style-type: none;
  -webkit-font-smoothing: antialiased;
  /* to stop flickering of text in safari */

  transform-origin: 0% 0%;
  transform: translate(-100%, 0);

  transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
}

#menu li
{
  padding: 10px 0;
  font-size: 22px;
  text-align:center;
}

/*
 * And let's fade it in from the left
 */
#menuToggle input:checked ~ ul
{
  transform: scale(1.0, 1.0);
  opacity: 1;
}

@media only screen and (max-width: 692px){
  .navbar-inverse{
    display:none !important;
  }
}
@media only screen and (min-width: 692px){
  nav{
    display:show !important;
  }
  .mobile-nav{
    display:none;
  }
}
</style>

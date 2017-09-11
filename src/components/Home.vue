<template>
  <div class="home">
    <div class="jumbotron">
      <div class="header-container">
        <h1>Peter B. Martinez</h1>
        <h3 class="typewriter">Your Local Web Developer</h3>
      </div>
    </div>
    <div class="row header-second">
      <div class="col-md-offset-3 col-md-6 header-quote-container">
        <h3 class="quote">What separates design from art is that design is meant to be… <span>functional.</span></h3>
      </div>
    </div>
        <div class="main-container">
          <div class="row about">
            <div class="col-md-6 about-img">
              <img class="img-responsive"  src="../assets/peter.jpg" alt="Peter B. Martinez">
            </div>
            <div class="col-md-6 about-content">
              <h2>Who is <span>Peter</span>?</h2>
              <p>Something about looking at a blank webpage always stirs up the creativity in me.  The idea that I could make anything I want and knowing that there are no limits, brings absolute joy to my heart.  I have always been passionate about development and design. I put the maximum amount of effort in every project. </p>
            </div>
          </div>
          <h2>Here are a couple of pieces from my <span>Portfolio</span></h2>
          <div class="row tiles">
            <div class="col-md-4">
              <div class="container">
                <img src="../assets/portfolio-item-one.png" alt="iSmile Dentists" class="img-responsive">
                <a href="http://www.ismiledentists.com/"><div class="overlay">
                  <div class="text">View Piece</div>
                </div></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="container">
                <img src="../assets/portfolio-item-three.png" alt="iSmile Dentists" class="img-responsive">
                <a href="http://avonlakedental.com/"><div class="overlay">
                  <div class="text">View Piece</div>
                </div></a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="container">
                <img src="../assets/portfolio-item-two.png" alt="iSmile Dentists" class="img-responsive">
                <a href="http://tykingdds.com/"><div class="overlay">
                  <div class="text">View Piece</div>
                </div></a>
              </div>
            </div>
          </div>
          <a href="#/portfolio">
            <div class="port-btn btn-center">
            <p>View Portfolio</p>
            </div>
          </a>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Peter Martinez the lovable dude'
    }
  },
  mounted: function() {
    this.$nextTick(function(){
      var underline = $('#underline');
      var portfolio = $('.port-btn');
      portfolio.on('click', function(){
        underline.css({'margin-left':'240px'});
        $('body').scrollTop(0);
      });
      $('.home').hide();
      $('.home').fadeIn('slow');
    });
  }
}
</script>

<style scoped>
.jumbotron{
  margin-top:0px;
}
.content p{
  font-size: 16px;
  line-height: 32px;
  text-align: center;
}
.content img{
  max-height:300px;
  margin:auto;
  /* Safari 3-4, iOS 1-3.2, Android 1.6- */
  -webkit-border-radius: 12px;

  /* Firefox 1-3.6 */
  -moz-border-radius: 12px;

  /* Opera 10.5, IE 9, Safari 5, Chrome, Firefox 4, iOS 4, Android 2.1+ */
  border-radius: 12px;
}
content h3{
  text-align:center;
    color:#46888D;
    font-weight:bold;
    line-height:45px;
}
.divider{
  width:20px;
  height:5px;
  background-color:#46888D;
  margin:auto;
  margin-top:15px;
  margin-bottom:10px;
}
.tile{
  margin: auto !important;
  height:265px;
}
.about{
  margin-top:3%;
  padding:40px 20px 100px 20px;
}
.about-content p{
  line-height:32px;
  text-align: justify;
  padding:0px 10% 0px 0px;
}
.about-content h2{
  color:#46888D;
  text-align:left;
}
.about-img img{
  max-width:300px;
  margin:auto;
}
.container {
  position: relative;
  width:400px;
}

.overlay {
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.5);
  overflow: hidden;
  width: 100%;
  height:0;
  transition: .5s ease;
}
h2 span{
  font-weight: bold;
}
h3 span{
  font-weight: bold;
}
h2{
  color:#46888D;
  margin-bottom:3%;
}
.container:hover .overlay {
  bottom: 0;
  height: 100%;
}

.text {
  white-space: nowrap;
  color: white;
  font-size: 20px;
  position: absolute;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
.skill-set{
  text-align:center;
}
.quote{
  color:#fff;
  font-size:35px;
  text-align: center;
  line-height:60px;
}
.header-quote-container{
  margin-top:-9em;
  background-color:#8dbec1;
  padding:30px;
}
.typewriter {
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid #fff; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  font-family: 'Special Elite', cursive;
  width:400px;
  color:#fff;
  z-index:1;
  animation:
    typing 1.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 29% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  400px { border-color: #fff; }
}

.jumbotron{
  background-color: #46888D;
  padding-top:100px;
  margin-bottom:0px;
  height:33em;
}

.jumbotron h1{
  color:#fff;
  text-shadow: 2px 2px 15px #000;
}
.jumbotron h3{
  margin-top:2em;
  text-align:center;
}
.header-container{
  position:relative;
}
.header-second{
  height:25em;
  background-image: url('../assets/headerimg.jpg');
  background-attachment:fixed;
  background-repeat: no-repeat;
  background-size: 150%;
  background-position:bottom;
}
.btn-center{
  width:220px;
  margin:45px auto;
}



</style>

<template lang="html">
  <div class="portfolio">
    <div class="jumbotron">
      <h1>Portfolio</h1>
      <h3>I'd say some of my best work</h3>
    </div>
    <div class="port-content-container">
      <div class="row main-container">
        <div class="col-md-6">
          <img class="img-thumbnail" src="../assets/reactweather.png" alt="Portfolio Item One">
        </div>
        <div class="col-md-6 content">
          <h3>Weather Application</h3>
          <p>A Small project I created using the React Framework, this hooks into the OpenWeatherMap Api, allowing for you to check the tempature in all the cities arund the world. </p>
          <p><span>Technologies Used:</span></p>
          <ul>
            <li>React Js</li>
            <li>Foundation</li>
            <li>CSS3</li>
            <li>OpenWeatherMap</li>
          </ul>
          <a href="http://serene-ravine-83090.herokuapp.com/#/?_k=0ou32d">
            <div class="port-btn">
            <p>View Site</p>
            </div>
          </a>
        </div>
      </div>
      <div class="row main-container">
        <div class="col-md-6">
          <img class="img-thumbnail" src="../assets/banyan.png" alt="Portfolio Item Four">
        </div>
        <div class="col-md-6 content">
          <h3>Banyan Reviews</h3>
          <p>A Reviews platform that allows for people who do not have a Facebook and or Google account to leave reviews on ther'e local Dental Offices.</p>
          <p><span>Technologies Used:</span></p>
          <ul>
            <li>ASP MVC 5</li>
            <li>jQuery</li>
            <li>CSS3</li>
            <li>Google Maps API</li>
          </ul>
          <a href="https://review.banyan.com/Banyan">
            <div class="port-btn btn-right">
            <p>View Site</p>
            </div>
          </a>
        </div>
      </div>
      <div class="row main-container">
        <div class="col-md-6">
          <img class="img-thumbnail" src="../assets/portfolio-item-one.png" alt="Portfolio Item Two">
        </div>
        <div class="col-md-6 content">
          <h3>iSmile Dentists</h3>
          <p>A Dental Office Conglomerate with 16 dental practice locations.</p>
          <p><span>Technologies Used:</span></p>
          <ul>
            <li>Wordpress</li>
            <li>jQuery</li>
            <li>CSS3</li>
          </ul>
          <a href="http://www.ismiledentists.com/">
            <div class="port-btn btn-right">
            <p>View Site</p>
            </div>
          </a>
        </div>
      </div>
      <div class="row main-container">
        <div class="col-md-6">
          <img class="img-thumbnail" src="../assets/portfolio-item-two.png" alt="Portfolio Item Three">
        </div>
        <div class="col-md-6 content">
          <h3>Ty King DDS</h3>
          <p>Single Location Dental Office</p>
          <p><span>Technologies Used:</span></p>
          <ul>
            <li>Wordpress</li>
            <li>jQuery</li>
            <li>CSS3</li>
          </ul>
          <a href="http://tykingdds.com/">
            <div class="port-btn btn-right">
            <p>View Site</p>
            </div>
          </a>
        </div>
      </div>
      <div class="row main-container">
        <div class="col-md-6">
          <img class="img-thumbnail" src="../assets/portfolio-item-three.png" alt="Portfolio Item Four">
        </div>
        <div class="col-md-6 content">
          <h3>Avon Lake Dental</h3>
          <p>Single Location Dental Office</p>
          <p><span>Technologies Used:</span></p>
          <ul>
            <li>Wordpress</li>
            <li>jQuery</li>
            <li>CSS3</li>
          </ul>
          <a href="http://avonlakedental.com/">
            <div class="port-btn btn-right">
            <p>View Site</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  mounted: function(){
    this.$nextTick(function(){
      $('.portfolio').hide();
      $('.portfolio').fadeIn('slow');
    });
  }
}
</script>

<style scoped>
.jumbotron{
  height:20em;
  background-color: #46888D;
  color:white;
}
.jumbotron h1{
  margin-top:1em;
  text-shadow: 2px 2px 15px #000;
}
.jumbotron h3{
  text-align:center;
  color:white;
}
img{
  float:right;
}
ul li{
  list-style: none;
  padding-left:0px;
    font-family: 'Cormorant', serif;
    font-size:20px;
    font-weight:bold;
}
span{
  font-weight:bold;
}
h3{
  color:#46888D;
}
img{
  max-width:600px;
}
.content{
  max-width:600px;
  padding-top:30px;
}
</style>

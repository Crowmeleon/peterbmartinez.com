<template lang="html">
  <div class="pricing">
    <div class="jumbotron">
      <h1>Pricing</h1>
      <h3>Quality over Quantity</h3>
    </div>
    <div class="row main-container">
      <div class="col-md-4 service-item">
        <img class="img-responsive" src="../assets/ServiceOne.png" alt="">
        <h3>Fast Loading</h3>
        <p>A website needs to be fast, this allows for a higher ranking in search engines, therefore I preffer using the latest in frame works such as Vue Js, Angular and React, while compiling all the code to meet googles standards, although if you preffer using Wordpress I can accomodate for that as well.</p>
      </div>
      <div class="col-md-4 service-item">
        <img class="img-responsive" src="../assets/ServiceTwo.png" alt="">
        <h3>Responsive</h3>
        <p>About 70% of all websites on the internet do not have a mobile firendly website. This is a huge problem causing these select websites to drop in ranking in SEO.  That is why I build all of my websites to be mobile responsive and check googles standard before shipping to verify it meets its requirments.</p>
      </div>
      <div class="col-md-4 service-item">
        <img class="img-responsive" src="../assets/ServiceThree.png" alt="">
        <h3>Web Design</h3>
        <p>The average person who visits a website only stays from a couple of seconds up to a couple of minutes.  Thats a small windows for a user to soak up information.  Thats where Good design and content placement comes in. I follow the current trends in terms of design which makes a huge diffrent in retaining traffic.</p>
      </div>
    </div>
    <div class="row main-container">
      <div class="col-md-6 pricing-table">
        <div class="price-title">
          <h3>Maintaining Existing Website</h3>
          <p>If you have a website you are currently needing updates and or optimizations, I can get that taken care of for you including hosting and unlimited revisions</p>
        </div>
        <div class="price-items">
          <p class="price">$40 <span class="price-text">/Month</span></p>
          <hr>
          <ul>
            <li>Transfer</li>
            <li>Unlimited monthly changes & updates</li>
            <li>Custom Features (Upon Request)</li>
          </ul>
        </div>
      </div>
      <div class="col-md-6 pricing-table">
        <div class="price-title">
          <h3>New Website</h3>
          <p>Built from the Ground up following the standard of google, which are of course Fast Loading and Responsive.<br>(includes hosting and maintenance)</p>
        </div>
        <div class="price-items">
          <p class="price">$75 <span class="price-text">/Month</span></p>
          <hr>
          <ul>
            <li>Up to 10 Pages</li>
            <li>Unlimited monthly changes & updates</li>
            <li>Social media integration</li>
            <li>Custom Features (Upon Request)</li>
            <li>Optimized for search engines</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function(){
    this.$nextTick(function(){
      $('.pricing').hide();
      $('.pricing').fadeIn('slow');
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
h3{
  color:#46888D;
  text-align:center;
}
img{
  max-height:200px;
  margin:auto;
}
.service-item{
  padding:0px 50px;
  text-align:justify;
}
.price{
  text-align:center;
  font-size:60px;
  font-weight:bold;
}
ul li{
  list-style: none;
  text-align:left;
  line-height:40px;
  font-size:20px;
  margin-left:20%;
}
.price-title{
  background-color:#f5f5f5;
}
.price-title h3{
  padding:20px 0px;
  background-color:#46888D;
  color:#fff;
}
.price-title p{
  padding:20px;
}
.price-text{
  font-size:25px;
}
.pricing-table{

}
</style>

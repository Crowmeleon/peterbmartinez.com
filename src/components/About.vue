<template lang="html">
  <div class="about">
    <div class="jumbotron">
      <h1>About</h1>
      <h3>Learn more about me!</h3>
    </div>
    <div class="row main-container">
      <div class="col-md-4">
        <img class="img-circle img-responsive" src="../assets/about.jpg" alt="">
      <h2>My Skill <span>Set</span></h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>
            <li>Foundation</li>
            <li>Materialize</li>
            <li>Javascript</li>
            <li>NodeJs</li>
            <li>Vue Js</li>
            <li>Version Control (Git)</li>
            <li>Linux Administration</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h2>Introduction</h2>
          <p>My Name is Peter B. Martinez, I from Utah, U.S.A</p>
          <p>I have been building websites for roughly 6 years and live in Orem with my beautiful wife Andrea.</p>
          <p>When I'm not working on client projects you can usually catch me studying latest trends on Front-end frameworks and or building simple web applications.</p>
          <p>If you are wanting to have me build you a new website and or take a look at your current one, let me know I'll gladly take a look.</p>
          <h2>What I Do?</h2>
          <p>I am currently a Front-End Developer over at Banyan,  I work on the Front-end Components of their Web Application, although I do accept freelance work on the side.</p>
      </div>
    </div>
    <div class="row main-container qa">
      <h2>FAQ</h2>
      <div class="col-xs-12">
        <div class="qa-container">
          <div class="question">
              <h3>I don't know where to start?!</h3>
          </div>
          <div class="anwser">
            <p>Worry not! I'm here to help guide you on what your options are! I also like to educate so if you yourself are wanting a more in-depth understanding on Web development I can certainly help.</p>
          </div>
          <hr>
        </div>
        <div class="qa-container">
          <div class="question">
              <h3>How often will I hear from you?</h3>
          </div>
          <div class="anwser">
            <p>I'll be in touch at least once a week with updates on the project. I'll also be in touch around set milestones so we can sort out payment for the work done and to keep things moving along.</p>
          </div>
          <hr>
        </div>
        <div class="qa-container">
          <div class="question">
              <h3>How will I see updates of the project?</h3>
          </div>
          <div class="anwser">
            <p>For every project, I create a Development Sub-Domain so you can check the progress over time, whether its on your phone or at home on your computer.</p>
          </div>
          <hr>
        </div>
        <div class="qa-container">
          <div class="question">
              <h3>What is the best method for communication?</h3>
          </div>
          <div class="anwser">
            <p>My preffered method is Email, although you can reach me by phone as well during select hours. 5:00 PM MST - 8:00 PM MST</p>
          </div>
          <hr>
        </div>
        <div class="qa-container">
          <div class="question">
              <h3>Do you use templates?</h3>
          </div>
          <div class="anwser">
            <p>No, Although I do offer discounts if you are wanting me to use a template of something I have already created.</p>
          </div>
          <hr>
        </div>
        <div class="qa-container">
          <div class="question">
              <h3>Can I see some varying types of work you've done?</h3>
          </div>
          <div class="anwser">
            <p>Of course! you can visit my GitHub for code on specific Web Application I have built, or check out my Portfolio Page for client websites I have built.</p>
          </div>
          <hr>
        </div>
        <div class="qa-container">
          <div class="question">
              <h3>How will my project be managed?</h3>
          </div>
          <div class="anwser">
            <p>Each project tends to go through 4 distinct phases. Those phases are planning, design, development and pre-launch. Get in touch to find out how your project will fit into this model.</p>
          </div>
          <hr>
        </div>
        <div class="qa-container">
          <div class="question">
              <h3>How much input will I have?</h3>
          </div>
          <div class="anwser">
            <p>As much as you'd like. I really enjoy working with my clients. My process is built to incorporate you as a large part.</p>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'About',
  mounted: function(){
    this.$nextTick(function(){
      $('.about').hide();
      $('.about').fadeIn('slow');
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
}
ul li{
  list-style: none;
  line-height:36px;
  font-size:18px;
}
img{
  max-width:200px;
  margin-bottom:40px;
}
.qa{

}
.qa-container{
    background-color: #f5f5f5;
    box-shadow:2px 2px 2px #999;
    margin-bottom:50px;
}
.question{
  padding:1px 5% 1px 5%;
  background-color:#46888D;
  color:white;
}
.anwser{
  padding:1.5% 5% 0.5% 5%;
}
.anwser p{
  font-size:22px;
}
.qa-container h3{
  margin:2% 0% 2% 0%;
}
.qa h2{
  text-align:center;
}
</style>

<template lang="html">
  <div class="contact">
    <div class="jumbotron">
      <h1>Contact</h1>
      <h3 class="typewriter">Reach out to me Today!</h3>
    </div>
    <div class="contact-form">
      <div class="col-md-6 col-md-offset-3">
        <p>If you have any questions and or concers please do let me know! Also if you want me to just tkae a look at your website or even look into an issue you are having with your website I can offer a <span>Free</span> Disagnosis to help you out. I know sometimes it can be difficult troubleshooting those sort of things so do let me know! Thanks!</p>
              <div class="">
                <form class="form-horizontal" action="" method="post">
                <fieldset>

                  <!-- Name input-->
                  <div class="form-group">
                    <label class="col-md-3 control-label" for="name">Name</label>
                    <div class="col-md-9">
                      <input id="name" name="name" type="text" placeholder="Your name" class="form-control">
                    </div>
                  </div>

                  <!-- Email input-->
                  <div class="form-group">
                    <label class="col-md-3 control-label" for="email">Your E-mail</label>
                    <div class="col-md-9">
                      <input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" id="email" name="email" type="text" placeholder="Your email" class="form-control">
                      <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                    </div>
                  </div>

                  <!-- Message body -->
                  <div class="form-group">
                    <label class="col-md-3 control-label" for="message">Your message</label>
                    <div class="col-md-9">
                      <textarea class="form-control" id="message" name="message" placeholder="Please enter your message here..." rows="5"></textarea>
                      <div class="error-list" id="error-list">

                      </div>
                    </div>
                  </div>

                  <!-- Form actions -->
                  <div class="form-group">
                    <div class="col-md-12 text-right">
                      <div @click = 'sendEmail()' class="port-btn">
                        Submit
                      </div>
                    </div>
                  </div>
                </fieldset>
                </form>
              </div>
            </div>
    </div>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  mounted: function(){
    this.$nextTick(function(){
      $('.contact').hide();
      $('.contact').fadeIn('slow');
      var name = $('#name');
      var email = $('#email');
      var message = $('#message');
      if(email.val() !== ''){

      }
    });
  },
  methods: {
    sendEmail(){
      var error = $('#error-list');
      var name = $('#name').val();
      var email = $('#email').val();
      var message = $('#message').val();

      this.name = name;
      this.email = email;
      this.message = message;
      if(this.name !== '' && this.email !== '' && this.message !== ''){
        emailjs.send("gmail","template_faYzB9dB",{from_name: this.name, user_email: this.email, message_html: this.message});
        function removeDanger(value){
          value.removeClass('danger-field');
          value.val("");
        }
        removeDanger($('#name'));
        removeDanger($('#email'));
        removeDanger($('#message'));
        error.empty();
        error.append("<p class='success'>Your message has been sent!</p>")
      }else {
        if(this.name == '' && $('#email').hasClass('danger-field') == false){
          error.append('<p>Please Fill out the name field</p>')
          $('#name').addClass('danger-field');
        }
        if(this.email == '' && $('#email').hasClass('danger-field') == false){
          error.append('<p>Please Fill out the email field</p>')
          $('#email').addClass('danger-field');
        }
        if(this.message == '' && $('#message').hasClass('danger-field') == false){
          error.append('<p>Please Fill out the message field</p>')
          $('#message').addClass('danger-field');
        }
      }

      this.name = '';
      this.email = '';
      this.message = '';
    }
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
.port-btn{
  float:right;
}
.g-recaptcha{
  margin:auto;
}
.help{
  color:blue;
}
.is-danger{
  color:red;
}
.danger-field{
  border-color:red;
}
p{
  margin-top:40px;
  margin-bottom:50px;
}
.success{
  color:green;
}
.error-list{
  margin-top:20px;
  list-style: none;
}
</style>

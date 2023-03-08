<!-- COLOR NEEDS TO BE CONFIGURED -->
<template>
  <div class="row bg-bg_home" style="height:100vh">
    <div class="columns col-3"> 
      <div class="q-mr-md q-ml-md q-mt-sm">
        <q-img src="..\img\top_left_home.jpg"
        spinner-color="white"
        style="border-radius: 10px;" alt="ART NOT LOADED"/>
      </div>
        
      <div class="q-ma-md text-center">
        <q-card-section class="welcome_message bg-welcome_message text-welcome_message">
          <div class="text-h4">Welcome to my corner of the internet!</div>
        </q-card-section>
      </div>

      <div class="link_btn text-center">
        <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-link_btn text-link_btn"  style="width:90%;" href="https://www.linkedin.com/in/melbeshb/" label="LinkedIn" /> 
        <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-link_btn text-link_btn"  style="width:90%;" href="https://github.com/maryam-elbeshbishy" label="GitHub" /> 
        <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-link_btn text-link_btn"  style="width:90%;" href="mailto: maryam.elbeshbishy@ryerson.ca" label="Email" /> 
        <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-link_btn text-link_btn"  style="width:90%;" href="mailto: maryam.elbeshbishy@ryerson.ca" label="Resume" /> 
        <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-link_btn text-link_btn"  style="width:90%;" href="https://www.instagram.com/marilambb_draws/" label="Art Insta" /> 
      </div>
  </div>

  <div class="columns col-8"> 
    <div class="nav_btn text-center">
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn text-nav_btn"  style="width:23%;" label="About Me" to="/about"/> 
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn text-nav_btn"  style="width:23%;" label="Work Exp" to="/workExp"/> 
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn text-nav_btn"  style="width:23%;" label="Projects" to="/projects"/> 
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn text-nav_btn"  style="width:23%;" label="Art " to="/art"/> 
    </div>

    <div>
      <q-card-section class="q-ma-lg bg-about_message text-about_message" style="border-radius: 10px">
          <div class="text-h3 q-ma-lg" style="font-family:'Playfair Display';">Maryam Elbeshbishy</div>
          <div class="text-h4 q-ma-lg" style="font-family:'Dosis';">Computer Science - Toronto Metropolitan University</div>
          <div class="text-h5 q-ma-lg" style="font-family:'Dosis';">Hi! As you may have seen my name is Maryam, Im currently working as a Research Assistant
        at Ryerson University, I am quite passionate about Data Science and XR Development, currently taking courses in both to expand my knowledge! Check the rest of my website for more
      information. <br> PS. Any art on this website was created by me!</div>
      </q-card-section>
    </div>

    <div class="q-ma-lg">
        <q-img src="..\img\bottom_right_home.jpg"
        spinner-color="white"
        style="border-radius: 10px;" alt="ART NOT LOADED"/>
    </div>
    
  </div>
</div>

</template>

<script>

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dosis&family=Playfair+Display:wght@600&display=swap');

/* background color */
.bg-bg_home{
  background: rgb(18, 126, 106) !important;
}
/* column styling */
.columns{
  margin: 2vw;
}
/* welcome message */
.welcome_message{
  font-family: Playfair-Display;
  border-radius: 10px;
}
.bg-welcome_message{
  background: rgb(175, 105, 69) !important; 
}
.text-welcome_message{
  color: #ffffff !important;
}

/* link buttons */
.link_btn{
  font-family: Nunito;
  font-weight: 600;
}
.bg-link_btn{
  background: #b5c49d !important
}
.text-link_btn{
  color: rgb(6, 52, 44) !important
}

/* nav buttons */
.nav_btn{
  font-family: Nunito;
  font-weight: 600;
}
.bg-nav_btn{
  background: rgb(6, 72, 61) !important
}
.text-nav_btn{
  color: #fffbf9 !important
}
/* About Me Blurb */
.bg-about_message{
  background: rgb(158, 83, 45) !important; 
}
.text-about_message{
  color: #ffffff !important;
}
</style>
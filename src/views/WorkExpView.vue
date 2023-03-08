<template>
  <div class="row bg-bg_work" style="height:100vh">
    <div class="columns col-3"> 
      <div class="q-mr-md q-ml-md q-mt-sm">
        <q-img src="..\img\workExp.jpg"
        spinner-color="white"
        style="border-radius: 10px;" alt="ART NOT LOADED"/>
      </div>
        
      <div class="q-ma-md text-center">
        <q-card-section class="welcome_message bg-work_title text-work_title">
          <div class="text-h5"> Work Experience & Certificates</div>
        </q-card-section>
        <q-card-section class="q-mt-md info_message bg-work_message text-work_message">
          <div class="text-body1"> Here you can find all I've learned outside of class! Relevant work experience, followed by 
            certificates collected through completed!</div>
        </q-card-section>
      </div>

      <div class="link_btn text-center">
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn_work text-nav_btn_work"  style="width:90%;" label="Home" to="/"/> 
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn_work text-nav_btn_work"  style="width:90%;" label="About Me" to="/about"/>
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn_work text-nav_btn_work"  style="width:90%;" label="Art" to="/art"/> 
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn_work text-nav_btn_work"  style="width:90%;" label="Projects" to="projects"/> 
      </div>
    </div>

    <div class="columns col-8">
      <q-scroll-area 
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        :visible="true"
        style="height: 90vh; max-width: 97%;">

        <!-- Work Experience -->
        <div class="q-pa-sm q-mr-sm q-mt-sm">
        <!-- <q-card-section class="work_message bg-work_title_1 text-work_title_1">
           <div class="text-h4" style="font-family: Playfair-Display; color:white">Work Experience</div>
        </q-card-section> -->
         

          <q-card v-for="item in W_items.slice().reverse()" :key="item.id" class="my-card work_card bg-work_card_bkg text-work_card_text">
            <div class="q-mt-md text-h6 title">
                {{ item.title }}
              </div>
              <div class="q-mt-sm text-body1 items">
                {{ item.place }}
              </div>
              <div class="q-mt-sm text-subtitle2 items">
                {{ item.date }}
              </div>
            <q-card-section class="bg-work_card_desc1">
              <div v-for="p in item.description" :key="p" class="q-mt-sm text-body2 items ">
                {{ p }}
              </div>
            </q-card-section>
              <div class="q-mt-sm text-body2 items">
                <b>Tools Used -</b> {{ item.tools }}
              </div>
              <div class="q-mt-sm text-body2 items">
                <b>Skills Learnt -</b> {{ item.skills}}
              </div>
          </q-card>
        </div>
  
      <!-- Certificates -->
      <!-- <q-card-section class="work_message bg-work_title_1 text-work_title_1">
           <div class="text-h4" style="font-family: Playfair-Display; color:white">Certificates</div>
        </q-card-section> -->
      <div class="q-pa-sm q-mr-sm">
        
          <q-carousel
            v-model="cert_start"
            transition-prev="slide-right"
            transition-next="slide-left"
            swipeable
            animated
            control-color="white"
            navigation-icon="radio_button_unchecked"
            navigation
            padding
            arrows
            height="70vh"
            
            class="bg-cert shadow-1 rounded-borders"
          >
            <q-carousel-slide  v-for="item in C_items" :key="item.id" :name="item.title" class="row">
              
                <img :src="require(`../img/certs/${item.image}`)" class="certs_img" />
              
            </q-carousel-slide>
          </q-carousel>
        </div>

      </q-scroll-area>
      
    </div>
  </div>
</template>


<script>
import projItems from '../databases/projects.json'
import workItems from '../databases/workExp.json'
import certItems from '../databases/certs.json'
import { ref } from 'vue'
export default {
    name: 'ProjectsPage',
    methods: {

    },
    data() {
        return {
            proj_start: ref('Research Assistant (Data Science)'),
            cert_start: ref('DataQuest - Introduction to Data Visualization in Python'),
            P_items: projItems,
            W_items: workItems,
            C_items: certItems,
            thumbStyle: {
              right: '4px',
              borderRadius: '5px',
              backgroundColor: '#ffffff',
              width: '5px',
              opacity: 0.75
            },

            barStyle: {
              right: '2px',
              borderRadius: '9px',
              backgroundColor: '#027be3',
              width: '9px',
              opacity: 0.2
            }
        }
    }
}
</script>

<style>
/* Columns styling (margins etc.) from HomeView.vue*/
.bg-bg_work{
  background: rgb(31, 124, 97) !important;
}

/* nav buttons */
.bg-nav_btn_work{
  background: #6acbb4 !important;
}
.text-nav_btn_work{
  color: #0b4c52 !important;
}

/* Title Left hand */
.bg-work_title{
  background: rgb(175, 165, 248) !important; 
}
.text-work_title{
  color: #230a5f !important;
}

/* Message Left Hand */
.bg-work_message{
  background: rgb(75, 53, 147) !important; 
}
.text-work_message{
  color: #f1e2ff !important;
}
.info_message{
  font-family: Nunito;
  border-radius: 10px;
}

/* Project Styling */
.work_card{
  width: 60vw;
  padding: 2%;
  margin: 2%
}
.bg-work_card_bkg{
  background: rgb(23, 92, 77) !important; 
}
.bg-work_card_desc1{
  margin-top: .5rem;
  padding: 1rem !important;
  background: rgb(128, 106, 189) !important; 
  border-radius: 4vh !important;
}
.text-work_card_text{
  color:#feffff
}

/* certificate styling */
.certs_img{
  width: 40vw !important;
  border-radius: 10px;
  display: block;
  margin-left: auto; 
  margin-right: auto
}
.bg-cert{
  background: #989ce1 !important;
  color: #200b52 !important;
  margin-left: 1.5vw;
  margin-right: 2vw;

}

.work_message {
  width: 17vw;
  border-radius: 10px;
  text-align: center;
}
.bg-work_title_1 {
  background: rgb(9, 94, 73) !important; 
}
.text-work_title_1{
  color: #a3e5b9 !important;
}

</style>
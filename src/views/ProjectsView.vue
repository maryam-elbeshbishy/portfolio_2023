<template>
  <div class="row bg-bg_project" style="height:100vh">
    <div class="columns col-3"> 
      <div class="q-mr-md q-ml-md q-mt-sm">
        <q-img src="..\img\proj.jpg"
        spinner-color="white"
        style="border-radius: 10px;" alt="ART NOT LOADED"/>
      </div>
        
      <div class="q-ma-md text-center">
        <q-card-section class="welcome_message bg-project_title text-project_title">
          <div class="text-h5"> Personal Projects </div>
        </q-card-section>
        <q-card-section class="q-mt-md info_message bg-project_message text-project_message">
          <div class="text-body1"> These are some personal projects that I am currently working on, or have previously finished! If you have any questions
            feel free to message me.
          </div>
        </q-card-section>
      </div>

      <div class="link_btn text-center">
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn_project text-nav_btn_project"  style="width:90%;" label="Home" to="/"/> 
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn_project text-nav_btn_project"  style="width:90%;" label="About Me" to="/about"/>
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn_project text-nav_btn_project"  style="width:90%;" label="Work Exp" to="/workExp"/> 
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn_project text-nav_btn_project"  style="width:90%;" label="Art" to="/art"/> 
      
      </div>
    </div>

    <div class="columns col-8">
      <q-scroll-area 
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        :visible="true"
        style="height: 90vh; max-width: 97%;">

      <!-- Projects -->
      <div class="q-pa-md row items-start q-gutter-md text-proj_card_text " style="justify-content:center">
        <q-card v-for="item in P_items.slice().reverse()" :key="item.id" class="my-card proj_card">
          <img :src="require(`../img/proj/${item.image}`)" class="proj_img1" >

          <q-card-section class="title bg-proj_card_title1">
              <div class="text-h6 "><b>{{item.title}}</b></div>
              <div class="text-body2 items">{{item.tools}}</div>
              <div class="text-body2 items">{{item.date}}</div>
          </q-card-section>

          <q-card-section class="items bg-proj_card_desc1">
            {{item.description}}
          </q-card-section>
        </q-card>
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
            proj_start: ref('Research Assisstant (Data Science)'),
            cert_start: ref('Data Quest Python Basics'),
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
.bg-bg_project{
  background: rgb(39, 65, 121) !important;
}

/* nav buttons */
.bg-nav_btn_project{
  background: rgb(116, 153, 231) !important;
}
.text-nav_btn_project{
  color: rgb(11, 32, 80) !important;
}

/* Title Left hand */
.bg-project_title{
  background: rgb(163, 148, 35) !important; 
}
.text-project_title{
  color: #ffffff !important;
}

/* Message Left Hand */
.bg-project_message{
  background: rgb(233, 221, 114) !important; 
}
.text-project_message{
  color: #564a11 !important;
}
.info_message{
  font-family: Nunito;
  border-radius: 10px;
}

/* Project Styling */
.proj_card{
  background-color: rgb(163, 148, 35) !important;
  width: 60vw !important;
}
.proj_img1{
  margin: 1%;
  width:40vw !important;
  border: 3px solid rgb(209, 209, 209) !important;
  border-radius: 10vh !important;
  display: block;
  margin-left: auto; 
  margin-right: auto
}
.bg-proj_card_title1{
  background: rgb(62, 100, 181) !important; 
}
.bg-proj_card_desc1{
  background: rgb(15, 67, 141) !important; 
}
.text-proj_card_text{
  color:#ffffff !important
}

</style>
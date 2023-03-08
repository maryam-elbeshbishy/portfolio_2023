<template>
<div class="row bg-bg_art" style="height:100vh">
    <div class="columns col-3"> 
      <div class="q-mr-md q-ml-md q-mt-sm">
        <q-img src="..\img\art_port.jpg"
        spinner-color="white"
        style="border-radius: 10px;" alt="ART NOT LOADED"/>
      </div>
        
      <div class="q-ma-md text-center">
        <q-card-section class="welcome_message bg-art_title text-art_title">
          <div class="text-h5"> Art Portfolio </div>
        </q-card-section>
        <q-card-section class="q-mt-md info_message bg-art_message text-art_message">
          <div class="text-body1"> Here you can find all of my art! I enjoy isometric art, but I am also trying to branch out to other styles. My
            main medium is digital, in Procreate. <br> <b>Find me on instagram @marilambb_draws</b>
          </div>
        </q-card-section>
      </div>

      <div class="link_btn text-center">
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn_art text-nav_btn_art"  style="width:90%;" label="Home" to="/"/> 
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn_art text-nav_btn_art"  style="width:90%;" label="About Me" to="/about"/>
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn_art text-nav_btn_art"  style="width:90%;" label="Work Exp" to="/workExp"/>
      <q-btn class="q-ma-sm button text-h5 text-weight-bold bg-nav_btn_art text-nav_btn_art"  style="width:90%;" label="Projects" to="/projects"/> 
       
      </div>
    </div>

    <div class="columns col-8">
      <q-scroll-area 
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        :visible="true"
        style="height: 90vh; max-width: 97%;">
        <!-- Projects -->
        <div class="q-pa-md row items-start q-gutter-md text-proj_card_text" >
            <q-card v-for="item in items" :key="item.id" class="my-card proj_card">
              <img :src="require(`../img/art/${item.image}`)">

              <q-card-section class="title bg-proj_card_title">
                  <div class="text-h6 "><b>{{item.title}}</b></div>
                  <div class="text-body2 items">{{item.tools}}</div>
                  <div class="text-body2 items">{{item.date}}</div>
              </q-card-section>
            </q-card>
          </div>

      </q-scroll-area>
    </div>
</div>
</template>


<script>
import artItems from '../databases/art.json'
export default {
    name: 'ProjectsPage',
    data() {
        return {
            items: artItems,
        }
    }
}
</script>

<style>

.bg-bg_art{
  background: #22432e !important;
}

/* nav buttons */
.bg-nav_btn_art{
  background: #1242a2 !important;
}
.text-nav_btn_art{
  color: #d0dcf0 !important;
}

/* Title Left hand */
.bg-art_title{
  background: rgb(14, 113, 96) !important; 
}
.text-art_title{
  color: #f1e2ff !important;
}

/* Message Left Hand */
.bg-art_message{
  background: rgb(8, 55, 11) !important; 
}
.text-art_message{
  color: #9473b3 !important;
}

/* art Styling */
.proj_card{
  width: 30vw;
}
.proj_img{
  width:10vw !important;
  border-radius: 10px;
  display: block;
  margin-left: auto; 
  margin-right: auto
}
.bg-proj_card_title{
  background: rgb(110, 14, 113) !important; 
}
.bg-proj_card_desc{
  background: rgb(206, 126, 207) !important; 
}
.text-proj_card_text{
  color:#feffff
}
</style>
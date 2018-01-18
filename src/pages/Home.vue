<template>
  <div>
    <section>
      <v-parallax src="../static/header_resized.jpg" alt="main_wallpaper" height="900" >
        <v-layout column align-center class="white--text headerjumbo">
          <img class="animated bounceIn" src="../assets/logo.png" alt="xtravelous-logo" height="200" style="width: 100%; max-width: 800px;">
          <h1 class="shadow white--text mb-2 display-1 text-xs-center animated fadeIn" v-for="(text, i) in headerText" :key="i">{{text}}</h1>
          <!-- <div class="subheading mb-3 text-xs-center">Powered by Xtravelous</div> -->
          <v-btn class="mt-5" large color="orange darken-1" dark>
            COUNT ME IN!
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <!-- <div id="form"></div> -->
    <!-- <section>
      <div class="my-5 px-3">
        <div class="text-xs-center">
          <h2 class="headline">BEST PLACES TO STAY</h2>
          <span class="subheading">
            EXPLORE THE PLANET
          </span>
        </div>
        <v-layout row wrap style="margin-top: 20px;">
          <v-flex xs12 sm12 md3 lg3 xl3></v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <Form></Form>
          </v-flex>
          <v-flex xs12 sm12 md3 lg3 xl3></v-flex>
        </v-layout>
      </div>
    </section> -->

    <!-- <section>
      <v-parallax src="../static/wallpaper2.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Booking has never been easier</div>
          <em>Start exploring your dream place today</em>
          <v-btn class="mt-5" color="light-blue lighten-2" dark large href="#form">
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section> -->
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card flat class="transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="display-2">What is xTravelous?</div>
                  </v-card-title>
                  <v-card-text>
                    <p class="headline">We are an online hub where travellers connect with locals in order to enjoy unique local experiences - like dining, festivals, hidden gems, workshops, sports & recreation, etc. After all, travelling is not just about the selfies; it's the experiences we live for and the memories we bring home.</p>
                    <p class="headline italicize">Don't just travel. Make it an xTravelous experience!</p>
                  </v-card-text>
                </v-card>
          </v-flex>  
        </v-layout>
      </v-container>
    </section>
    <!-- <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">What is xTravelous?</div>
              </v-card-title>
              <v-card-text>
                <p>We are an online hub where travellers connect with locals in order to enjoy unique local experiences - like dining, festivals, hidden gems, workshops, sports & recreation, etc. After all, travelling is not just about the selfies; it's the experiences we live for and the memories we bring home.</p>
                <p>Don't just travel. Make it an xTravelous experience!</p>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>777-867-5309</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="bcd6d3d4d2fccac9d9c8d5dac5d6cf92dfd3d1">[email&#160;protected]</a>
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section> -->
  </div>
</template>

<script>
  import Form from '@/components/Form'
  export default {
    created () {
      //window.location.href = '/#/soon'
    },
    data () {
      return {
        headerText: ['Do you have deep passion & unique knowledge of your hometown?', 'Do you like meeting new friends & share memorable travel experiences?', 'Do you want to earn income & be part of the local tourism vibe?']
      }
    },
    components: {
      Form
    }
  }
</script>

<style scoped>
  .shadow {
    text-shadow: 1px 1px #000000;
  }

  .headerjumbo {
    margin-top: 23vh;
  }

  .header-btn {
    width: 200px;
    height: 60px;
    font-size: 22px;
  }

  .italicize {
    font-style: italic; 
  }
</style>
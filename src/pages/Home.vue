<template>
  <div>
    <section>
      <v-parallax src="../static/wallpaper.jpg" alt="main_wallpaper" height="750">
        <v-layout column align-center justify-center class="white--text">
          <img class="animated bounceIn" src="../assets/logo.png" alt="xtravelous-logo" height="200" style="width: 100%; max-width: 800px;">
          <h1 class="white--text mb-2 display-1 text-xs-center animated fadeIn">Travel Guide</h1>
          <!-- <div class="subheading mb-3 text-xs-center">Powered by Xtravelous</div> -->
          <v-btn class="mt-5" color="light-blue lighten-2" dark large data-scroll href="#form">
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <div id="form"></div>
    <section>
      <div class="my-5 px-3">
        <div class="text-xs-center">
          <h2 class="headline">BEST PLACES TO STAY</h2>
          <span class="subheading">
            EXPLORE THE PLANET
          </span>
        </div>
        <v-layout row wrap style="margin-top: 20px;">
          <v-flex xs12 sm12 md3 lg3 xl3><!-- spacer --></v-flex>
          <v-flex xs12 sm12 md6 lg6 xl6>
            <Form></Form>
          </v-flex>
          <v-flex xs12 sm12 md3 lg3 xl3><!-- spacer --></v-flex>
        </v-layout>
      </div>
    </section>

    <section>
      <v-parallax src="../static/wallpaper2.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">Booking has never been easier</div>
          <em>Start exploring your dream place today</em>
          <v-btn class="mt-5" color="light-blue lighten-2" dark large href="#form">
            Get Started
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card flat class="transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum
                tincidunt. Suspendisse potenti.
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
    </section>
  </div>
</template>

<script>
  import Form from '@/components/Form'
  export default {
    components: {
      Form
    }
  }

</script>


<template>
  <div>
    <section>
      <v-parallax src="../static/header_resized.jpg" alt="main_wallpaper" height="900" >
        <v-layout column align-center class="white--text headerjumbo hidden-sm-and-down">
          <img class="animated bounceIn" src="../assets/logo.png" alt="xtravelous-logo" style="width: 100%; max-width: 800px;">
          <h1 class="shadow white--text mb-2 display-1 text-xs-center animated fadeIn" v-for="(text, i) in headerText" :key="i">{{text}}</h1>
          <v-btn class="mt-5" large color="orange darken-1" dark @click.native.stop="openFormDialog">
            COUNT ME IN!
          </v-btn>
        </v-layout>
        <v-layout column align-center class="white--text headerjumbo2 hidden-md-and-up">
          <img class="animated bounceIn" src="../assets/logo.png" alt="xtravelous-logo" style="width: 100%; max-width: 800px;">
          <h1 class="shadow white--text mb-2 display-1 text-xs-center animated fadeIn" v-for="(text, i) in headerText" :key="i">{{text}}</h1>
          <v-btn class="mt-5" large color="orange darken-1" dark @click.native.stop="openFormDialog">
            COUNT ME IN!
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm12 md12 lg12 xl12>
              <v-card flat class="transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="display-2 grey--text text--darken-2 text-xs-center">What is xTravelous?</div>
                  </v-card-title>
                  <v-card-text>
                    <p class="headline grey--text text--darken-3">We are an online hub where travellers connect with locals in order to enjoy unique local experiences - like dining, festivals, hidden gems, workshops, sports & recreation, etc. After all, travelling is not just about the selfies; it's the experiences we live for and the memories we bring home.</p>
                    <p class="headline italicize grey--text text--darken-3">Don't just travel. Make it an xTravelous experience!</p>
                  </v-card-text>
                </v-card>
          </v-flex>  
        </v-layout>
      </v-container>
    </section>
    <v-dialog v-model="formDialog" max-width="500">
      <v-card>
        <v-card-title class="title grey--text text--darken-3 ">You're one click away to the best offers!</v-card-title>
        <v-card-text>
          <Form></Form>
        </v-card-text>
      </v-card>
    </v-dialog>
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
        headerText: ['Do you have deep passion & unique knowledge of your hometown?', 'Do you like meeting new friends & share memorable travel experiences?', 'Do you want to earn income & be part of the local tourism vibe?'],
        formDialog: false
      }
    },
    methods: {
      openFormDialog () {
        this.formDialog = true
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
    margin-top: 22vh;
  }

  .headerjumbo2 {
    margin-top: 5vh;
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
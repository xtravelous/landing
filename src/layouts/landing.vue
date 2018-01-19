<template>
    <div>
      <v-app light>
        <v-content>
          <router-view></router-view>
          <v-footer color="light-blue darken-2" absolute>
            <v-layout row wrap align-center>
              <v-flex xs12>
                <div class="white--text ml-3 text-xs-center">
                  Copyright &copy; {{ new Date().getFullYear() }} Xtravelous
                </div>
              </v-flex>
            </v-layout>
          </v-footer>
        </v-content>
      </v-app>
    </div>
  </template>
  
  <script>
    export default {
      name: 'landing'
    }
  
  </script>
  
  <style>
  
  
  </style>
  
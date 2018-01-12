<template>
    <v-app>
      <v-navigation-drawer fixed clipped app v-model="drawer">
        <v-list dense>
          <template v-for="(item, i) in items">
            <v-list-tile ripple :to="{ name: item.url }" :key="i">
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="light-blue darken-2" dark app clipped-left fixed>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          Xtravelous Admin
        </v-toolbar-title>
        <v-spacer></v-spacer>
        </v-menu>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-content>
      <v-footer color="light-blue darken-3" app>
        <span class="white--text">&copy; {{ new Date().getFullYear() }} Xtravelous</span>
      </v-footer>
    </v-app>
  </template>
  
  
  
  <script>
    export default {
      name: 'admin',
      created() {
      },
      data() {
        return {
          drawer: true,
          items: [{
              title: 'Subscribers',
              icon: 'ic_people',
              url: 'Admin'
            }
          ],
          mini: false,
          right: null
        }
      }
    }
  
  </script>
  
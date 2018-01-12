<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th class="text-xs-left">Date</th>
          <th class="text-xs-left">Name</th>
          <th class="text-xs-left">Email</th>
          <th class="text-xs-left">Message</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="s in subscribers" :key="s._id">
          <td>{{ s.created_at | moment("dddd, MMMM Do YYYY") }}</td>
          <td>{{ s.fullName }}</td>
          <td>{{ s.email }}</td>
          <td><v-btn flat @click.native.stop="viewMessage(s.message)">View</v-btn></td>
        </tr>
      </tbody>
    </table>
    <v-dialog persistent v-model="dialog" max-width="400">
      <v-card>
        <v-card-title class="headline">Message</v-card-title>
        <v-card-text>
          <p style="text-align: justify;">{{currentMessage}}</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click.native="dialog = false" flat>Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import db from '@/firebaseInit'
  const users = db.collection('users')
  export default {
    created() {
      this.fetchUsers()
    },
    data() {
      return {
        subscribers: [],
        currentMessage: '',
        dialog: false
      }
    },
    methods: {
      fetchUsers() {
        users.onSnapshot(snapshot => {
          snapshot.docChanges.forEach(change => {
            if (change.type === 'added') {
              this.subscribers.push(change.doc.data())
            }
          })
        })
      },
      viewMessage (message) {
          this.currentMessage = message
          this.dialog = true
      }
    }
  }

</script>


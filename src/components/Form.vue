<template>
  <div>
    <vue-topprogress ref="topProgress" color="#39BCFC"></vue-topprogress>
    <v-card flat>
      <v-card-text>
        <v-alert color="error" icon="warning" :value="errorAlert">
          {{snackbarMessage}}
        </v-alert>
        <v-alert color="success" icon="check_circle" :value="successAlert">
          {{snackbarMessage}}
        </v-alert>
        <v-text-field ref="full_name" label="Full name" prepend-icon="person_pin" v-model="formData.fullName"></v-text-field>
        <v-text-field label="Email" prepend-icon="email" v-model="formData.email"></v-text-field>
        <div class="text-xs-center">
          <p v-show="sending">Please wait...</p>
          <v-btn v-show="submitBtn" dark large color="orange darken-2" @click="register" class="subscribe-btn">SUBSCRIBE</v-btn>
          <p class="subheading">*Your info is safe with us.</p>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
  import db from '@/firebaseInit'
  import SmoothScroll from 'smooth-scroll/dist/js/smooth-scroll'
  const users = db.collection('users')
  import moment from 'moment'
  export default {
    created() {
      new SmoothScroll('a[href*="#"]', {
        after: () => {
          this.$refs.full_name.focus()
        }
      })
    },
    data() {
      return {
        formData: {
          fullName: '',
          email: ''
        },
        snackbar: false,
        timeout: 3000,
        snackbarMessage: '',
        errorAlert: false,
        successAlert: false,
        sending: false,
        submitBtn: true
      }
    },
    methods: {
      register() {
        if (!this.formData.fullName || !this.formData.email) {
          this.snackbarMessage = 'Oops. All fields are required.'
          this.errorAlert = true
          setTimeout(() => this.errorAlert = false, 2500)
        } else {
          if (this.validateEmail(this.formData.email)) {
            this.submitBtn = false
            this.sending = true
            this.$refs.topProgress.start()
            this.formData.created_at = Date.now()
            users.where('email', '==', this.formData.email).get().then(querySnapshot => {
              if (querySnapshot.empty) {
                this.formData.email = this.formData.email.toLowerCase()
                users.add(this.formData).then(res => {
                  this.$refs.topProgress.done()
                  this.submitBtn = true
                  this.sending = false
                  this.snackbarMessage = 'Thank you for subscribing!'
                  this.successAlert = true
                  setTimeout(() => {
                    this.successAlert = false
                    this.$events.fire('closeDialog', true)
                  }, 3000)
                  this.formData = {
                    fullName: '',
                    email: ''
                  }
                }).catch(err => {
                  this.submitBtn = true
                  this.sending = false
                  this.$refs.topProgress.fail()
                  this.snackbarMessage = 'An error occurred. Please try again.'
                  this.errorAlert = true
                  setTimeout(() => this.errorAlert = false, 2500)
                })
              } else {
                this.submitBtn = true
                this.sending = false
                const created_at = moment(querySnapshot.docs[0].data().created_at).format('MMMM D, YYYY')
                this.$refs.topProgress.done()
                this.snackbarMessage = `You subscribed last ${created_at} already.`
                this.successAlert = true
                setTimeout(() => this.successAlert = false, 5000)
              }
            }).catch(e => {
              this.submitBtn = true
              this.sending = false
              this.$refs.topProgress.fail()
              this.snackbarMessage = 'An error occurred. Please try again.'
              this.errorAlert = true
              setTimeout(() => this.errorAlert = false, 2500)
            })
          } else {
            this.snackbarMessage = 'Oops. Invalid email address.'
            this.errorAlert = true
            setTimeout(() => this.errorAlert = false, 2500)
          }
        }
      },
      validateEmail(email) {
        const re =
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email)
      }
    }
  }

</script>

<style scoped>
  .subscribe-btn {
    font-size: 25px;
    height: 50px;
  }

</style>


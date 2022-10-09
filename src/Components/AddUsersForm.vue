<template>
  <form ref="myForm" @submit.prevent>
    <h2>Add new kitty</h2>
    <input
        v-model="saveUserName"
        class="input" type="text" placeholder="Name">
    <input
        v-model="saveUserAvatar"
        class="input" type="text" placeholder="Photo's URL">
    <button
        @click="addNewUser" class="btn"
    >Submit</button>
  </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data() {
    return {
      newUser: {
        name: '',
        avatar: '',
      },
    }
  },
  computed: {
    saveUserName: {
      get: function () {
        return this.name
      },
      set: function (value) {
        this.name = value
        this.setUserName()
      }
    },
    saveUserAvatar: {
      get: function () {
        return this.avatar
      },
      set: function (value) {
        this.avatar = value
        this.setUserAvatar()
      }
    },
  },
  methods: {
    setUserName() {
      this.$store.dispatch('SAVE_NEW_USER_NAME', this.name)
    },
    setUserAvatar() {
      this.$store.dispatch('SAVE_NEW_USER_AVATAR', this.avatar)
    },
    ...mapActions({
      addNewUser: 'ADD_NEW_USER'
    })
  }
}
</script>

<style scoped>
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  margin: 6px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
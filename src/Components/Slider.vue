<template>
  <div class="slider">
    <p class="slider__username"> {{ selectUser.name }} </p>
    <img
        :src="selectUser.avatar"
        class="slider__avatar" alt="">
    <div class="slider__nav">
      <button
          @click="prevUser"
          class="slider__back" >na zad</button>
      <button
          @click="nextUser"
          class="slider__next" >vpe red</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from "vuex";

export default {
  data() {},
  computed: {
    ...mapGetters({
      selectUser: 'SELECT_USER'
    })
  },
  methods: {
    ...mapMutations([
    ]),
    ...mapActions({
      prevUser: "PREV_USER",
      nextUser: "NEXT_USER"
    })
  }
}
</script>

<style scoped>
.slider {
  display: flex;
  flex-direction: column;
}
.slider__username {
  font-size: 32px;
}
.slider__nav {
  margin-top: 40px;
}
.slider__nav {
  margin-top: 40px;
}
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
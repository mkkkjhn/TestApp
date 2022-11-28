<template>

  <div class="container">
    <Slider
        :user-counter="userCounter"
    ></Slider>
    <AddUsersForm @create="addNewUser"></AddUsersForm>
  </div>

</template>

<script>
import Slider from "@/Components/Slider";
import AddUsersForm from "@/Components/AddUsersForm";
  export default {
    components: {
      Slider, AddUsersForm
    },
    data() {
      return {
        userCounter: null
      }
    },
    methods: {
      addNewUser(userCounter) {
        this.userCounter = userCounter
      },
    },
  }
</script>

<style>
.container {
  display: flex;
  padding: 40px;
  justify-content: space-around;
}
button {
  cursor: pointer;
}
</style>

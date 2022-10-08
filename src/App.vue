<template>

  <div class="container">
    <slider
        :users="users"
    ></slider>
    <add-users-form @create="addNewUser"></add-users-form>
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
      }
    },
    methods: {
      addNewUser(newUser) {
        this.users.unshift(newUser)
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
</style>
<template>
<div class="main">
     <h1>Profile</h1>
<div class="profileDiv">
    <div class="profileDiv2">
        <div>
            <h4>Information:</h4>
        <p>First Name: {{user.firstName}}</p>
      <p></p>
      <p>Last Name: {{user.lastName}}</p>
      <p></p>
      <p>Username : {{user.username}}</p>
        </div>
    </div>
     <div class="profileDiv2">
        <div>
            <h4>Registered Races:</h4>
        <p>First Name: {{user.firstName}}</p>
      <p></p>
      <p>Last Name: {{user.lastName}}</p>
      <p></p>
      <p>Username : {{user.username}}</p>
        </div>
    </div>

    <div class="profileDiv2">
        <div>
            <h4>Race PTS:</h4>
        <p>First Name: {{user.firstName}}</p>
      <p></p>
      <p>Last Name: {{user.lastName}}</p>
      <p></p>
      <p>Username : {{user.username}}</p>
        </div>
    </div>
</div>
  <div class="menu">

    <p><a><i class="fas fa-image"></i></a></p>
    <!--<h2>{{user.firstName}} {{user.lastName}} <a @click="logout"><i class="fas fa-sign-out-alt"></i></a></h2>-->
    <button @click="logout">log out</button>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'MyPhotos',
  data() {
    return {}
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  }
}
</script>

<style scoped>

button{
    color: white;
    background-color: rgba(56, 56, 56, 0.9);
    padding: 0.5%;
}

.profileDiv2{
    width: 35%;
    display: flex;
    justify-content: flex-start;
    background-color: rgba(56, 56, 56, 0.9);
    padding: 2%;
    margin: 2%

}

.profileDiv{
    display: flex;
    justify-content: center;
    width: 100%;
}

i{
    color: orange;
}
.menu {
  display: flex;
  justify-content: center;
}

.menu h2 {
  font-size: 14px;
  color: orange;
}
</style>
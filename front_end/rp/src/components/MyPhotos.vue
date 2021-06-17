<template>
  <div class="main">
    <h1>Profile</h1>
    <div class="profileDiv">
      <div class="profileDiv2">
        <div class="profileDiv4">
          <h4>Information:</h4>
          <p>First Name: {{ user.firstName }}</p>
          <p></p>
          <p>Last Name: {{ user.lastName }}</p>
          <p></p>
          <p>Username : {{ user.username }}</p>
          <p></p>
          <p>Email : {{ user.email }}</p>
          <p></p>
          <p>Gender : {{ user.gender }}</p>
          <p></p>
          <p>Age : {{ user.age }}</p>
        </div>
        <div class="profileDiv5">
          <h4>Race PTS:</h4>
          <p>{{ user.points }}</p>
          <p>($100 Race Credit at 500 PTS)</p>
        </div>
      </div>
      <div class="profileDiv3">
        <div>
          <h4>Registered Races:</h4>
          <div
            v-for="race in this.$root.$data.user.races"
            v-bind:key="race"
          ></div>
          <div v-if="user.races.length < 1">
            <p>none</p>
          </div>
          <div v-else>
            <div v-for="racer in user.races" v-bind:key="racer._id">
              <div class="raceBoxDiv">
                <div class="raceBoxDiv2 widthDiv">
                <p>{{ racer.name }}</p>
                </div>
                <div class="widthDiv">
                <p>{{ racer.date }}</p>
                </div>
                <div class="widthDiv">
                <p>${{ racer.price }}</p>
                </div>
                <button class="racerButton" onClick="history.go(0)" @click="removeRace(racer)">X</button>
              </div>
            </div>
            <p>Total: ${{ user.points }}</p>
            <router-link to="/Payment"><button>Pay</button></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="menu">
      <p>
        <a><i class="fas fa-image"></i></a>
      </p>
      <!--<h2>{{user.firstName}} {{user.lastName}} <a @click="logout"><i class="fas fa-sign-out-alt"></i></a></h2>-->
     <button id="logout" @click="logout">log out</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MyPhotos",
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    async removeRace(racer){
       try{
         await axios.put('/api/users/remove', {
           id: this.$root.$data.user.id,
           race: racer,
         });
         return true;
        
       }catch(error){
          console.log(error);
       }
     },

    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
  },
};
</script>

<style scoped>

.raceBoxDiv2 {
  padding-right: 3%;
  width: 100%;
}

.raceBoxDiv p {
  text-align: left;
}
.raceBoxDiv {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1%;
  width: 100%;
}

button {
  color: white;
  background-color: rgba(56, 56, 56, 0.9);
  padding: 0.5%;
}

#logout{
   color: white;
  background-color: rgba(56, 56, 56, 0.9);
  padding: 0.5%;
}

.profileDiv4 p {
  text-align: left;
}

.profileDiv4 {
  background-color: rgba(56, 56, 56, 0.9);
  width: 100%;
  padding: 2%;
}

.profileDiv5 {
  background-color: rgba(56, 56, 56, 0.9);
  width: 100%;
  padding: 2%;
  margin-top: 10%;
}

.profileDiv3 {
  width: 50%;
  background-color: rgba(56, 56, 56, 0.9);
  padding: 2%;
  margin: 2%;
}

.profileDiv2 {
  width: 35%;
  /* display: flex;
  justify-content: flex-start;
  flex-wrap: wrap; */
  /*background-color: rgba(56, 56, 56, 0.9);*/
  padding: 2%;
}

.profileDiv {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

i {
  color: orange;
}
.menu {
  display: flex;
  justify-content: center;
}

.menu h2 {
  color: orange;
}

@media (max-width: 576px) {
  .main{
    font-size: small;
  }

  h4{
    font-size: small;
  }

  button{
    width: 100%;
  }

  .raceBoxDiv{
    border-bottom: 2px solid black;
  }

  .widthDiv{
    width: 100%;
  }
}
</style>

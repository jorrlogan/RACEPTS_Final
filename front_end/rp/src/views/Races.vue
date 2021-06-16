<template>
  <div class="Races">
    <h2>Races</h2>
    <div v-for="race in this.races" v-bind:key="race.id">
      <div id="raceDiv">
        <div class="raceBoxDiv">
          <p>{{ race.name }}</p>
          <p>{{ race.date }}</p>
          <p>{{ race.price }}</p>
          <button>Register</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Races",
  data() {
    return {
      races: [],
    };
  },
  created() {
    this.getRaces();
  },
  methods: {
    async getRaces() {
      try {
        let response = await axios.get("/api/races");
        this.races = response.data.races;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>

button{
    color: white;
    background-color: rgb(45, 196, 241);
    padding: 0.5%;
    border: 1px solid black;
}

.Races{
    padding-top: 3%;
    padding-bottom: 3%;
}
#raceDiv {
  display: flex;
  justify-content: center;
}
.raceBoxDiv {
  display: flex;
  justify-content: space-between;
  background-color: rgba(56, 56, 56, 0.7);
  padding: 1%;
  width: 60%;
}
</style>

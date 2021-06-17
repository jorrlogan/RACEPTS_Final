<template>
  <div class="Races">
    <h2>Races</h2>
    <div v-for="race in this.races" v-bind:key="race">
      <div id="raceDiv">
        <div class="raceBoxDiv">
          <div class="fillDiv">
          <p>{{ race.name }}</p>
          </div>
          <div class="fillDiv">
          <p>{{ race.date }}</p>
          </div>
          <div class="fillDiv">
          <p>${{ race.price }}</p>
          </div>
          <button v-on:click="addRace(race)">Register</button>
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
    async addRace(race) {
      try {
        await axios.put("/api/users/", {
          id: this.$root.$data.user.id,
          race: race,
        });
        return true;
      } catch (error) {
        console.log(error);
      }
    },

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
button {
  color: white;
  background-color: rgb(45, 196, 241);
  padding: 0.5%;
  border: 1px solid black;
}

.Races {
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

@media (max-width: 576px) {
  #raceDiv {
    display: flex;
    justify-content: center;
    margin-top: 2%;
  }
  .raceBoxDiv {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: rgba(56, 56, 56, 0.7);
    padding: 1%;
    width: 60%;
    font-size: small;
  }
  button {
    width: 100%;
  color: white;
  background-color: rgb(45, 196, 241);
  padding: 0.5%;
  border: 1px solid black;
}

.fillDiv{
  width: 100%;
}
}
</style>

<template>
  <div class="hero">
    <div class="heroBox">
      <form class="pure-form">
        <fieldset>
          <legend class="legend">Register for an account</legend>
          <input placeholder="first name" v-model="firstName" /><br><br>
          <input placeholder="last name" v-model="lastName" /><br><br>
        </fieldset>
        <fieldset>
          <input placeholder="age" v-model="age" /><br><br>
          <input placeholder="email" v-model="email" /><br /><br>
        </fieldset>
        <fieldset>
          <input placeholder="username" v-model="username" /><br><br>
          <input type="password" placeholder="password" v-model="password" /><br><br>
        </fieldset>
        <fieldset>
            <input placeholder="gender" v-model="gender" /><br><br>
        </fieldset>
        <fieldset>
          <button
            type="submit"
            class="pure-button pure-button-primary"
            @click.prevent="register"
          >
            Register
          </button>
        </fieldset>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
      <form class="pure-form space-above">
        <fieldset>
          <legend class="legend">Login</legend>
          <input placeholder="username" v-model="usernameLogin" /><br><br>
          <input
            type="password"
            placeholder="password"
            v-model="passwordLogin"
          />
        </fieldset>
        <fieldset>
          <button
            type="submit"
            class="pure-button pure-button-primary"
            @click.prevent="login"
          >
            Login
          </button>
        </fieldset>
      </form>
      <p v-if="errorLogin" class="error">{{ errorLogin }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomePage",
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      email: "",
      age: null,
      gender: "",
      points: 0,
      usernameLogin: "",
      passwordLogin: "",
      error: "",
      errorLogin: "",
    };
  },
  methods: {
    async register() {
      this.error = "";
      this.errorLogin = "";
      if (!this.firstName || !this.lastName || !this.username || !this.password)
        return;
      try {
        let response = await axios.post("/api/users", {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
          points: this.points,
          gender: this.gender,
          age: this.age,
          email: this.email,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.user = null;
      }
    },
    async login() {
      this.error = "";
      this.errorLogin = "";
      if (!this.usernameLogin || !this.passwordLogin) return;
      try {
        let response = await axios.post("/api/users/login", {
          username: this.usernameLogin,
          password: this.passwordLogin,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.errorLogin = "Error: " + error.response.data.message;
        this.$root.$data.user = null;
      }
    },
  },
};
</script>

<style scoped>
.legend {
  /* font-size: x-large !important; */
}

button {
  color: white;
  background-color: rgba(56, 56, 56, 0.7);
  padding: 1%;
  margin: 2%;
}

.space-above {
  margin-top: 50px;
}

h1 {
  font-size: 28px;
  font-variant: capitalize;
}

.hero {
  padding: 5px;
  display: flex;
  justify-content: center;
}

.heroBox {
  text-align: center;
  background-color: rgba(56, 56, 56, 0.7);
  padding: 2%;
}

.hero form {
  font-size: 14px;
}

.hero form legend {
  font-size: 20px;
}

input {
  margin-right: 10px;
  color: rgba(56, 56, 56, 1);
}

.error {
  margin-top: 10px;
  display: inline;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #d9534f;
  color: #fff;
}
</style>

<template>
  <div class="signIn">
    <MyProfile v-if="user"/>
    <Login v-else/>
    <!-- <div class="spacer"></div>
    <div class="signInFlexBox">
      <div class="signInBox">
          <div id="f9">
        <div class="login">
          <h3>RACE PTS</h3>
        </div>
        <div class="login">
          <input type="text" placeholder="username" />
        </div>
        <div class="login">
          <input type="text" placeholder="password" />
        </div>
        <div class="login">
          <button>login</button>
        </div>
      </div>
      </div>
    </div> -->

  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import MyProfile from '@/components/MyProfile.vue';
import axios from 'axios';
export default {
  name: 'dashboard',
  components: {
    Login,
    MyProfile,
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}

</script>

<style scoped>
#f9{
    margin-top: 7%;
}
.login {
padding-top: 2%;
}
.signInFlexBox {
  display: flex;
  justify-content: center;
  width: 100%;
}

.signInBox {
  background-color: rgba(56, 56, 56, 0.7);
  height: 200px;
  width: 25%;
  display: flex;
  justify-content: center;
  justify-items: center;
}

.signInBox input {
  margin: 2%;
  height: 30px;
  padding: 1%;
  display: block;
}

.spacer {

  height: 100px;
}

input {
  color: rgb(32, 32, 32);
  display: block;
}
button{
    color: rgb(32, 32, 32);
}
</style>

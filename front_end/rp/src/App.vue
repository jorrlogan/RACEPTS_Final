<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="navBarDivFlex">
        <a class="navbar-brand" href="#">RACE PTS</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <!--<a class="nav-link" href="#">About <span class="sr-only">(current)</span></a>-->
              <router-link class="nav-link" to="/AboutRP"> About </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/Races" class="nav-link">Races</router-link>
            </li>
             <li class="nav-item">
              <router-link to="/Profile" class="nav-link">Profile</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/SignIn" class="nav-link">Sign In</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="spacer"></div>
    <router-view />
    <div class="spacer"></div>
    <div id="specialFooter">
      <p><a href="https://github.com/jorrlogan/RACEPTS_Final.git">github / 20-25ish hours</a></p>
    </div>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Audiowide&display=swap");

a{
  text-decoration: none;
  color: white;
}

.spacer{
  height: 8em;
}
.nav-link{
  color: white !important;
}

.navbar-brand{
  color: white !important;
}
.navbar {
  display: flex !important;
  justify-content: space-between !important;
  background-color: rgba(56, 56, 56, 1) !important;
  color: white !important;
  position: fixed;
  width: 100%;
  margin-bottom: 1%;
}

#racePTSStuff {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  width: 25%;
  height: 100%;
  font-size: large;
}

#insideRPDescriptionDiv h1 {
  padding-bottom: 2%;
}

#RPDescription {
  margin-top: 2%;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: baseline;
  padding: 4%;
}

#insideRPDescriptionDiv {
  padding: 5%;
  width: 70%;
}

#navPosition {
  margin-top: 2%;
  position: fixed;
  width: 100%;
}

#specialFooter {
  position:fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1%;
  width: 100%;
  height: fit-content;
  background-color: rgba(56, 56, 56, 1) !important;
}
* {
  color: white;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: url("assets/nightrunner.jpg");
  background-color: black;
  background-repeat: no-repeat;
  /*background-size: cover;*/
  background-position: center;
  background-size:cover;
  background-repeat:no-repeat;
  background-color: rgba(56, 56, 56, 1);
  height: 750px; /* use media queries to change the background image size*/
}
#app {
  font-family: Audiowide, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  background-color: rgba(56, 56, 56, 0.7);
  padding: 15px;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-content: center;
}

#nav a {
  color: white;
  text-decoration: none;
}

#nav a p {
  font-size: 30px;
}

/* #nav a.router-link-exact-active {
  color: white;
  text-decoration: none;
  font-size: 30px;
  background-color: black;
} */

.accountIcon {
  height: 40px;
}

#accountIconAndSignIn {
  display: flex;
  flex-wrap: none;
  justify-items: center;
  justify-content: center;
}

@media (min-width: 576px) {
  body{
  font-size: medium;
  }
}
</style>

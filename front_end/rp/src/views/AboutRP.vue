<template>
  <div class="aboutRP">
    <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
         <div id="RPDescription">
      <div id="insideRPDescriptionDiv">
    <h2>Welcome to RACE PTS</h2>
    <p class="welcomeParagraph">We believe that there's more to earn from your races than just a tee shirt. 
      People spend hundreds of dollars each year paying for 5K's Half Marathon's, Marathon's, 
      Bike races, Triathalons, and many other racing events. With RACE PTS, each race you participate in 
      can earn you credit to put towards future races. The more you race, the more points you'll earn, which can be used 
      to participate in more races.</p>
    </div>
    </div>
  </div>
</template>

<style scoped>

#insideRPDescriptionDiv h1 {
  padding-bottom: 2%;
}

#RPDescription{
  width: 100%; 
  display: flex;
  justify-content: center;
  padding: 1%;
}

#insideRPDescriptionDiv{
  padding: 1%;
  width: 70%;
  background-color: rgba(56, 56, 56, 0.9);
}

#insideRPDescriptionDiv p {
    font-size: large
}

@media (max-width: 576px) {
  p{
    font-size: small;
  }

  #insideRPDescriptionDiv{
    width: 90%;
  }

  #insideRPDescriptionDiv p{
    font-size: medium;
  }

  .welcomeParagraph{
     font-size: small;
  }

  #insideRPDescriptionDiv{
    font-size: small;
  }

  h2{
    font-size: x-large;
  }
}
</style>
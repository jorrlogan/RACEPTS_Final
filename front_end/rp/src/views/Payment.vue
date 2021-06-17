<template>
  <div class="Payment">
      <h1>Payment</h1>
      <div class="divforPayment">
    <form>
         <label for="fname">First name: </label><br>
        <input type="text"><br>
        <label for="lastName">Last name: </label><br>
        <input type="text"><br>
        <label for="address">Address: </label><br>
        <input type="text"><br>

        <label for="address">Card Number: </label><br>
        <input type="text"><br>
        <input class="submitButton" type="submit">
    </form>
      </div>
  </div>
</template>

<style scoped>

input{
    color: rgba(56, 56, 56, 1);
}

.submitButton{
    margin: 2%;
    text-align: right;
}

.Payment{
    background-color: rgba(56, 56, 56, 0.7);
    padding: 5%;
}

.divforPayment{
    display: flex;
    justify-content: center;
    width: 100%;
}

form{
    color: rgba(56, 56, 56, 1);
}
</style>
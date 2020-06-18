<template>
  <div class="picture">
    <div class="container">
      <h1>Koloběžkou.cz</h1>
      <p>Ty nejlepší trasy v ČR. <br> Vaše cesta za poznáním může začít právě teď.</p>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style >


.picture {
  background: url('./../assets/images/intro.jpeg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz--background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
}

h1, p {
  text-align: center;
  text-transform: uppercase;
}

/* návod na vertikální vycentrování z netu
.container {
  height: 100%;
  position: relative;
}

.container h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}  */
</style>
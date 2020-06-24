<template>
  <div class="picture">
    <div class="container">
      <h1>koloběžkou.cz</h1>
      <p>
        Ty nejlepší trasy v ČR.
        <br />Vaše cesta za poznáním může začít právě teď.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" >
.picture {
  background: url("./../assets/images/intro.jpeg") no-repeat -450px center fixed;
  -webkit-background-size: cover;
  -moz--background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

@media (min-width: 450px) {
  .picture {
  background: url("./../assets/images/intro.jpeg") no-repeat -400px center fixed;
  -webkit-background-size: cover;
  -moz--background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  }
}

@media (min-width: 550px) {
  .picture {
  background: url("./../assets/images/intro.jpeg") no-repeat -300px center fixed;
  -webkit-background-size: cover;
  -moz--background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  }
}

@media (min-width: 700px) {
  .picture {
  background: url("./../assets/images/intro.jpeg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz--background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  }
}

.container{
  position: absolute;
  color: $light-text-color;
  top: 20%;
  width: 100%;
  min-height: 260px;
  text-align: center;

  h1 {
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 12px;
  text-transform: uppercase;
  }
  p {
  font-size: 16px;
  margin: 0;
  }
} 
@media (min-width: 640px) {
  .container {
    h1 {
      font-size: 60px;
    }
    p {
      font-size: 20px;
    }
  }
  .picture {
    background: url("./../assets/images/intro.jpeg") no-repeat -250px center fixed;
    -webkit-background-size: cover;
    -moz--background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}
@media (min-width: 960px) {
  .container {
    h1 {
      font-size: 80px;
    }
    p {
      font-size: 24px;
    }
  }
}


</style>
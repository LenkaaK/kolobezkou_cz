<template>
  <div class="picture">
    <div class="container">
      <h1>koloběžkou.cz</h1>
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
  
}

h1, p {
  text-align: center;
  
}

.container h1{
  font-size: 80px;
  font-weight: 400;
  margin-bottom: 12px;
  text-transform: uppercase
}
.container p{
  font-size: 24px;
  margin: 0
}

.container{
 position: absolute;
 color: #eeeeee;
 top: 20%;
 width: 100%;
 min-height: 260px;
    

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
<template>
  <div>
    <headerImage v-bind:nadpis="'Kontakty'" />
    <div class="contact">
      <div class="paragrafs">
      <p>Projeli jste naši trasu? Podělte se s námi o zážitky, fotky a doplňující informace.</p>
      <p>Projeli jste nějakou zajímavou trasu, kterou na našich stránkách ještě nemáme? Dejte nám o ní vědět.</p>
      </div>
    <hr>
    <div class="designers">
      <div class="veronika info">
      <h3>Veronika Jiříčková</h3>
      <img src="./../assets/images/veronika.jpg" alt="veronika" >
      </div>
      <div class="lenka info">
      <h3>Lenka Kopuletá</h3>
      <img src="./../assets/images/lenka.jpg" alt="lenka" >
      </div>
      </div>
      <img src="./../assets/icons/mail.svg" width="30px" class="mail-ikona" />
    </div>
  <paticka />
    
  </div>
</template>

<script>
import Paticka from "./../components/Paticka.vue";
import headerImage from "./../components/HeaderImage.vue";
export default {
  components: {
    headerImage,
    Paticka
  }
};
</script>

<style scoped lang="scss">
.contact{
  width:70%;
  margin: 0 auto;

}
.paragrafs{
  margin: 40px 0;
}
.designers{
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 50px auto;
  
  
  img{
  border-radius: 50%;
  width: 150px;
  height: 150px;
  }
  h3{
    margin-top:0;
    margin-bottom: 10px
  }
}
</style>
<template>
  <div>
    <headerImage v-bind:nadpis="'Kontakty'" />
    <div class="contact">
      <div class="paragrafs">
        <p>Projeli jste naši trasu? Podělte se s námi o zážitky, fotky a doplňující informace.</p>
        <p>Projeli jste nějakou zajímavou trasu, kterou na našich stránkách ještě nemáme? Dejte nám o ní vědět.</p>
        <div class="mail_icon">
          <img src="./../assets/icons/mail.svg" width="30px" class="mail-ikona" />
          <a href="mailto:footbikescz@gmail.com">footbikescz@gmail.com</a>
        </div>
      </div>
      <hr />

      <h2>Designerky a tvůrkyně stránek</h2>
      <div class="designers">
        <div class="veronika info">
          <h3>Veronika Jiříčková</h3>
          <img src="./../assets/images/veronika.jpeg" alt="veronika" />
        </div>
        <div class="lenka info">
          <h3>Lenka Kopuletá</h3>
          <img src="./../assets/images/lenka.jpg" alt="lenka" />
        </div>
      </div>
    </div>
    <paticka class="paticka" />
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
.contact {
  width: 70%;
  margin: 0 auto 50px auto;
  min-height: calc(100vh-230px);
}
.paragrafs {
  margin: 40px 0;
}
.designers {
  display: flex;
  justify-content: space-around;
  width: 50%;
  margin: 50px auto;

  h3 {
    color: $dark-blue;
    text-align: center;
  }

  img {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin: 20px;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
  }
}
h2 {
  text-align: center;
  margin-top: 40px;
}
.mail_icon {
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    margin: 10px;
    color: $dark-yellow;
  }
  a:hover {
    color: $light-blue;
  }
}

.paticka {
  position: relative;
  bottom: 0;
}
</style>
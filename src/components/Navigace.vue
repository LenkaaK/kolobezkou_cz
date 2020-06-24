<template>
  <div id="nav" class="navigation">
    <div class="home_nav">
      <router-link to="/" class="home nav">Domů</router-link>
    </div>
    <div>
      <router-link to="/trasy" class="trasy nav vid">Trasy</router-link>
    </div>
    <div>
      <router-link to="/pujcovny" class="pujcovny nav vid">Půjčovny</router-link>
    </div>
    <div>
      <router-link to="/kontakty" class="kontakty nav vid">Kontakty</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.navigation {
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
  z-index: 2;
}
.nav {
  display: flex;
  color: $light-text-color;
  text-decoration: none;
  padding: 20px 10px;
}
.nav:hover {
  background-color: black;
}
.router-link-active.vid {
  background-color: rgba(0, 0, 0, 0.434);
  font-weight: 550;
}

@media (min-width: 510px) {
  .nav {
    padding: 20px 15px;
  }
  .navigation {
    font-size: 22px;
  }
}
@media (min-width: 750px) {
  .nav {
    padding: 20px 15px;
  }
}
@media (min-width: 850px) {
  .nav {
    padding: 20px 35px;
  }
}
</style>
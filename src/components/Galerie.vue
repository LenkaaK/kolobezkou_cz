<template>
  <div>
    <agile>
      <div class="slide" v-for="foto in trasa.photo" v-bind:key="foto.id" >
        <img v-bind:src="require(`./../assets/images/foto-trasy/${foto.picture}.jpeg`)" v-bind:alt="foto.alt" />
      </div>

      <!-- <div class="slide">
        <img src="./../assets/images/foto-trasy/foto-001-02.jpeg" alt="foto02" />
      </div>
      <div class="slide">
        <img src="./../assets/images/foto-trasy/foto-001-03.jpeg" alt="foto03" />
      </div>
      <div class="slide">
        <img src="./../assets/images/foto-trasy/foto-001-04.jpeg" alt="foto04" />
      </div> -->

      <template slot="prevButton">
        <i class="fas fa-chevron-left"></i>
      </template>
      <template slot="nextButton">
        <i class="fas fa-chevron-right"></i>
      </template>
    </agile>
  </div>
</template>

<script>
export default {
  props: ["trasa"]
};
</script>

<style lang="scss">
.agile__nav-button {
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 24px;
  height: 100%;
  position: absolute;
  top: 0;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  width: 80px;
}
.agile__nav-button:hover {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}
.agile__nav-button--prev {
  left: 0;
}
.agile__nav-button--next {
  right: 0;
}
.agile__dots {
  bottom: 10px;
  left: 50%;
  position: absolute;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button, .agile__dot:hover button {
  background-color: #fff;
}

.slide {
  display: block;
  height: auto;
  width: 100%;
  max-height: 466.6px;
  img {
    width: 100%;
    max-height: 466.6px;
    object-fit: contain;
  }

}


</style>
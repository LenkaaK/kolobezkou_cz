<template>
  <div>
    <div class="info-podrobnosti">
      <div class="info-row2" v-for="(info, index) in trasa.info" v-bind:key="'info-'+index">
        <div class="info-icon-text">
          <div class="info-icon2">
            <img
              v-bind:src="getIconType(info.type).src"
              width="30px"
              v-bind:alt="getIconType(info.type).alt"
            />
          </div>
          <div class="info-text2">{{info.text}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["trasa"],

  data() {
    return {
      types: {
        about: {
          src: require("./../assets/icons/about.svg"),
          alt: "about-icon"
        },
        transport: {
          src: require("./../assets/icons/transport.svg"),
          alt: "transport-icon"
        },
        food: {
          src: require("./../assets/icons/food.svg"),
          alt: "food-icon"
        },
        well: {
          src: require("./../assets/icons/drink.svg"),
          alt: "drink-icon"
        }
      }
    };
  },
  methods: {
    getIconType(type) {
      return this.types[type];
    }
  }
};
</script>

<style scoped lang="scss">
.info-podrobnosti {
  border: 1px solid $dark-blue;
  padding: 20px;
  margin: 35px 20px;
}
.info-row2 {
  display: flex;
  flex-basis: 50%;
  flex-wrap: wrap;
}

@media (min-width: 650px) {
  .info-podrobnosti {
    display: flex;
    flex-wrap: wrap;
  }
}

.info-icon-text {
  display: flex;
}
.info-icon2,
.info-text2 {
  margin: 7px 20px 15px 7px;
}
</style>
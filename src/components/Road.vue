<template>
  <div>
    <div class="all_roads">
      <div class="road_contain">
        <div class="road_image">
          <img v-bind:src="require(`./../assets/images/foto-trasy/${trasa.photo[0].picture}.jpeg`)" />
        </div>
        <h3 class="road_name">{{trasa.name}}</h3>

        <div class="optical-row">
          <img src="./../assets/icons/blankCR.svg" width="100px" class="optical-ikona" />

          <div class="graf">
            <graf v-bind:trasa="trasa" v-bind:pozadi="'white'" />
          </div>
        </div>

        <div class="road_info">
          <basicinfo v-bind:trasa="trasa" />
        </div>

        <div class="chci-vic">
          <router-link :to="{name: 'Detail', params: {id: trasa.id}}" class="router-link">
            <button class="to_detail">Chci vědět víc</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicInfo from "./../components/BasicInfo.vue";
import Graf from "./../components/Graf.vue";
export default {
  props: ["id", "trasa"],

  components: {
    graf: Graf,
    basicinfo: BasicInfo
  }
};
</script>

<style scoped lang="scss">
.to_detail {
  // box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  font-size: 18px;
  color: $light-text-color;
  background-color: $dark-blue;
  padding: 10px 30px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  position: absolute;
  z-index: 20000;
  left: 80px;
  bottom: 17px;
}

.chci-vic{
  text-align: center;
}

.all_roads {
  margin: 20px;
}
.road_contain {
  background: white;
  border-radius: 10px;
  padding-bottom: 15px;
  width: 350px;
  border: 1px solid #dbd8d8;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  height: 720px;
  position: relative;
}

.road_image img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
}

.road_name {
  margin: 0;
  color: #eeeeee;
  background-color: $dark-blue;
  padding: 5px;
}

.optical-row {
  display: flex;
  margin: 10px;
  justify-content: space-around;
  align-items: center;
}

.optical-ikona,
.graf {
  flex: 0 1 50%;
}

.graf {
  max-width: 120px;
  height: auto;
  font-size: 14px;
}

.road_info {
  margin: 10px 15px;
}

h3 {
  text-align: center;
}
</style>
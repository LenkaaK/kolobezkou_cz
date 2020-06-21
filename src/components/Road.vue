<template>
  <div>
    <div class="all_roads">
      <div class="road_contain">
        <div class="road_image">
          <img v-bind:src="require(`./../assets/images/foto-trasy/${trasa.photo[0].picture}.jpeg`)" />
        </div>
        <h3 class="road_name">{{trasa.name}}</h3>

        <div class="optical-row">
          <img src="./../assets/icons/blackCR.png" width="50px" class="optical-ikona" />

          <div class="graf">
            <graf v-bind:trasa="trasa" v-bind:pozadi="'white'" />
          </div>
        </div>

        <div class="road_info">
          <basicinfo v-bind:trasa="trasa" />
        </div>

        <router-link :to="{name: 'Detail', params: {id: trasa.id}}" class="router-link">
          <button class="to_detail">Chci vědět víc</button>
        </router-link>
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
  font-size: 16px;
  color: #eeeeee;
  background-color: $dark-blue;
  padding: 6px 20px;
  border-radius: 5px;
  cursor: pointer;
  
  border: none;
}
.router-link {
  text-align: center;
}
.all_roads {
  margin: 30px;
}
.road_contain {
  background: white;
  border-radius: 0 0 10px 10px;
  padding-bottom: 20px;
  width: 350px;
  border: 1px solid #dbd8d8;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.road_image img {
  display: block;
  width: 100%;
  height: auto;
}

.road_name {
  margin: 0;
  color: #eeeeee;
  background-color: $dark-blue;
  padding: 5px;
}

.graf {
  max-width: 130px;
  height: auto;
}

.optical-row {
  display: flex;
  margin: 5px;
}

.optical-ikona,
.graf {
  flex: 1 1 50%;
}

.road_info {
  margin-left: 10px;
}

h3 {
  text-align: center;
}

</style>
<template>
  <div>
    <div class="all_roads">
      <div class="road_contain">
        <div class="road_image">
          <img src="./../assets/images/foto-trasy/foto-001-01.jpeg" />
        </div>
        <div class="road_info">
          <h3 class="road_name">{{trasa.name}}</h3>
          <basicinfo v-bind:trasa="trasa" />
        </div>

        <div class="graf">
          <graf v-bind:trasa="trasa" />
        </div>

        <router-link :to="{name: 'Detail', params: {id: trasa.id}}">
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

<style>
.to_detail {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  color: #eeeeee;
  background-color: #262b37;
  padding: 6px 20px;
  border-radius: 5px;
  cursor: pointer;
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
  background-color: #262b37;
  padding: 5px;
}

.graf{
  width: 200px;
  height: auto;
}
</style>
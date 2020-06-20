<template>
  <div>
    <div class="info-row">
      <img src="./../assets/icons/distance.svg" width="30px" class="info-ikona" />
      <div class="info-text">{{trasa.distance}} km / {{trasa.time}} hodin</div>
    </div>

    <div class="info-row">
      <img src="./../assets/icons/ascent.svg" width="30px" class="info-ikona" />
      <div class="info-text">{{trasa.ascent}} m</div>
    </div>

    <div class="info-row">
      <img src="./../assets/icons/region.svg" width="30px" class="info-ikona" />
      <div class="info-text">
        <div v-for="(region, index) in trasa.region" v-bind:key="'region-'+index">{{region}}</div>
      </div>
    </div>

    <div class="info-row info-row-hashtag">
      <img src="./../assets/icons/question.svg" width="30px" class="info-ikona" />
      <div class="info-text">
        <span v-for="(hash, index) in trasa.hashtags" v-bind:key="index">#{{hash}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["trasa"]
};
</script>

<style scoped lang="scss">

.info-row {
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.info-ikona, .info-text {
  flex: 0 1 auto;
  margin: 5px;
}
.info-row-hashtag .info-text {
    display: flex;
    flex-wrap: wrap;
    span {
        margin-right: 5px;
    }
}


</style>
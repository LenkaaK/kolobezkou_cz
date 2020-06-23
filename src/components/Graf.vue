<template>
  <div>
    <div class="graf">
      <vc-donut
        :background="pozadi"
        foreground="grey"
        :size="75"
        unit="%"
        :thickness="30"
        legend-placement="top"
        :sections="sections"
        :total="100"
        :start-angle="0"
        :auto-adjust-text-size="false"
        @section-mouseover="handleSectionMouseover"
        @section-mouseout="handleSectionMouseout"
      >
        <p>{{contentLabel}}</p>
      </vc-donut>
    </div>
  </div>
</template>

<script>
export default {
  props: ["trasa", "pozadi"],

  data() {
    return {
      contentLabel: "Povrch"
    };
  },

  computed: {
    sections() {
      return [
        {
          label: `Asfalt ${this.trasa.terrain.asphalt}%`,
          value: this.trasa.terrain.asphalt,
          color: "#ec9b3b"
        },
        {
          label: `Terén ${this.trasa.terrain.gravel}%`,
          value: this.trasa.terrain.gravel,
          color: "#00818a"
        }
      ];
    }
  },

  methods: {
    handleSectionMouseover(section, event) {
      this.contentLabel = section.label;
    },

    handleSectionMouseout(section, event) {
      this.contentLabel = "Povrch";
    }
  }
};
</script>

<style scoped>
</style>
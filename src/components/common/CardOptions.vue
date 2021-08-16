<template>
  <v-card max-width="400" height="116" class="options-container ma-4">
    <v-flex class="align-center d-flex flex-row">
      <div v-for="(option, i) in options" :key="i" class="d-flex width-100 flex-column text-center  ">
        <img :src="require(`@/assets/icons/${option.icon}.svg`)" width="35px" />
        {{ option.name }}
      </div>
    </v-flex>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    reveal: false,
    options: [
      { icon: "GPay", name: "test" },
      { icon: "GPay", name: "test" },
      { icon: "GPay", name: "test" },
      { icon: "GPay", name: "test" },
      { icon: "GPay", name: "test" },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}

.options-container {
  background: #edf3ff;
}
</style>

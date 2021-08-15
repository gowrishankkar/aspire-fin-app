<template>
  <div>

<v-card
    max-width="400"
        height="300"
  >
    <v-card-text>
      asd
    </v-card-text>

    
  </v-card>


  </div>
</template>
<script>
export default {
    data: () => ({
      reveal: false,
    }),
 
}
</script>
<style lang="scss" scoped>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>

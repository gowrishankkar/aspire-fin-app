<template>
  <div>
    <v-card
      max-width="400"
      height="70"
      class="options-container mx-4 mt-4 px-5 py-2"
    >
      <v-flex class="pa-2 justify-space-between">
        <div class="detail-label">
          <img :src="require(`@/assets/icons/GPay.svg`)" width="35px" /> name
        </div>
        <img
          :src="require(`@/assets/icons/next.svg`)"
          width="7px"
          @click="arrowClicked"
        />
      </v-flex>
    </v-card>
    <v-card
      v-if="showTransactions"
      max-width="400"
      height="500"
      class="trasactions-container mx-4 px-5 py-2"
    >
      <div v-for="(option, i) in trasactions" :key="i" class="py-2">
        <v-flex class="pa-2 justify-space-between">
          <div class="detail-label d-flex">
            <img :src="require(`@/assets/icons/GPay.svg`)" width="35px" />
            <div>label</div>
            <div>label</div>
          </div>
          <div>
            amount<img
              :src="require(`@/assets/icons/next.svg`)"
              class="mx-2"
              width="6px"
            />
          </div>
        </v-flex>
        <div class="pl-12">Debit Card</div>
        <v-divider></v-divider>
      </div>
    </v-card>
    <v-card
      v-if="showTransactions"
      max-width="400"
      height="50"
      class="options-container mx-4  px-5 py-2"
    >
      <v-flex class="pa-2 justify-center text-center">
        show all
      </v-flex>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    reveal: false,
    trasactions: [1, 2, 3],
    showTransactions: false,
  }),
  methods: {
    arrowClicked() {
      console.log("asdas");
      this.showTransactions = !this.showTransactions;
    },
  },
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
  background: #f5f9ff;
}

.detail-label {
  align-self: center;
}

.trasactions-container {
  background: #fff;
}
</style>

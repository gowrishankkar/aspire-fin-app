<template>
  <v-flex sm12 md12 lg12 xl12 class="pa-2">
     <v-card color="basil">
    <v-tabs v-model="tab">
      <v-tab v-for="item in items" :key="item">
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <DebitCards />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </v-flex>
 
</template>

<script>
import DebitCards from "@/components/DebitCards";


export default {
  components:{
    DebitCards
  },
  data() {
    return {
      tab: null,
      items: ["Appetizers", "Entrees"],
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    };
  },
};
</script>

<style>
/* Helper classes */
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>

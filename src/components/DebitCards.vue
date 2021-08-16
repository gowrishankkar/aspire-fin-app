<template>
  <v-flex sm12 md12 lg12 xl12 class="pa-2 d-flex debit-card-container">
    <v-flex sm6 md6 lg6 xl6 class="pa-2 ">
      <Card />
      <CardOptions />
    </v-flex>
    <v-flex sm6 md6 lg6 xl6 class="pa-2 ">
      
      <!-- <CardDetails /> -->
      <CardDetails />
    </v-flex>
  </v-flex>
</template>
<script>
import Card from "@/components/common/CardDesign";
import CardOptions from "@/components/common/CardOptions";
import CardDetails from "@/components/common/CardDetails";

export default {
  components: { Card, CardOptions, CardDetails },
  data() {
    return {
      isOpen: false,
      constant: constants,
    };
  },
  props: {
    closeIcon: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: "s-close-white",
      description: "Name of the icon, path from assets/icons/",
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
.debit-card-container {
  height: 770px;
}
</style>

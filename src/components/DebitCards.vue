<template>
  <v-flex sm12 md12 lg12 xl12 class="pa-2 debit-card-container" >
    <Card />
  </v-flex>
</template>
<script>
import Card from "@/components/common/CardDesign";
import Card from "@/components/common/CardOptions";

export default {
    components:{Card}, 
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

.debit-card-container{
    height: 500px;
    }
</style>

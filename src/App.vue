<template>
  <v-app>
      <Login/>
    </v-app>
</template>

<script>
import Vue from "vue";
import Login from "@/views/Login";

export default {
  name: "App",

  components: {
    Login,

  },



  
};
</script>
<style lang="scss" scoped>
.height-100-percent {
  height: 100%;
}

</style>

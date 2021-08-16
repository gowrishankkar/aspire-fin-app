<template>
  <v-app>
    <v-main >
      <v-row class="height-100-percent bg-app" no-gutters>
        <SideNavBar />
        <v-col no-gutters>
          
           <div class="main-container">
            <router-view></router-view>
          </div>
        </v-col>
      </v-row>
    </v-main>
    </v-app>
</template>

<script>
import Vue from "vue";
import Login from "@/views/Login";
import SideNavBar from "@/components/SideNavBar";

export default {
  name: "App",

  components: {
    Login,
    SideNavBar

  },



  
};
</script>
<style lang="scss" scoped>
.height-100-percent {
  height: 100%;
}

</style>

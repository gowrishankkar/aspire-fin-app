
<template>
  <div class="main-side-nav">
    <v-navigation-drawer >
      <v-list-item class="main-logo exact-center">
        <img src="@/assets/icons/Aspire Logo.svg" />
      </v-list-item>

      <v-divider></v-divider>

      <v-list class="exact-center flex-direction-col" dense>
        <div
          
          v-for="item in (0,3)"
          :key="item"
        >
            123
          
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
import { NAV_ITEMS } from "@/config/constants";


export default {
  data() {
    return {
      items: NAV_ITEMS,
      selectedRoute: "",
      allPermissions: {}
    };
  },
  
};
</script>
<style lang="scss" scoped>
@import "@/styles/common.scss";
.main-side-nav {
  position: fixed;
  height: 100%;
}
.active {
  color: $primary-color !important;
}
.subMenu {
  height: 2.5rem;
  .subMenu-icon {
    display: flex;
    padding-right: 0.625rem;
  }
  .subMenu-text {
    color: $text-color-1;
    font-size: 0.875rem;
    line-height: 2.6875rem;
  }
}
.v-menu__content {
  box-shadow: $box-shadow-1 !important;
  left: 8.75rem !important;
  z-index: 6;
  padding: 0;
  background: $white-color;
  max-width: unset !important;
  min-width: 12.1875rem !important;
}
::v-deep .v-navigation-drawer {
  width: 10.75rem !important;
  background: $bg-color-2 !important;
  color: $white-color !important;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: $text-color-1 !important;
}
.active-list-item {
  color: $white-color !important;
}
.main-logo {
  height: 7.4375rem;
  background: $bg-color-1;
}
.v-list--dense .v-list-item .v-list-item__content {
  min-height: 20px !important;
}
.menu-item {
  border-radius: 0.25rem;
  width: 4.625rem;
  height: 4.625rem;
  padding: 0.8rem 0.3125rem;
  margin-bottom: 0.9375rem;
  min-height: unset !important;
  .v-list-item__title {
    color: $grey-4;
  }
}
.menu-item-active {
  background: $bg-color-1;
}
.v-list--dense .v-list-item .v-list-item__icon {
  margin: 0 !important;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
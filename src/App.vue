<template>
  <v-app>
    <component :is="layout">
      <router-view />
    </component>
  </v-app>
</template>

<script>
const defaultLayout = "default";
export default {
  name: "App",

  components: {},
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    }
  },

  data: () => ({
    //
  })
};
</script>

<style>
</style>

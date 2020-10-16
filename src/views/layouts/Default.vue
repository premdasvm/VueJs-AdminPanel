<template>
  <div>
    <Navbar />
    <v-content class="ma-4">
      <slot />
    </v-content>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar";
export default {
  components: { Navbar }
};
</script>

<style>
</style>
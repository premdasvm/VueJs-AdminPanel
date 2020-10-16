<template>
  <v-container fluid fill-height class="container">
    <v-card width="500px" height="600px" class="mx-auto" elevation="10">
      <v-card-title primary-title class="justify-center mb-25">
        Login
      </v-card-title>

      <v-text-field
        outlined
        label="Username"
        prepend-icon="mdi-account"
        class="my-5 ml-5 mr-8"
      ></v-text-field>
      <v-text-field
        outlined
        label="Password"
        prepend-icon="mdi-lock"
        class="my-5 ml-5 mr-8"
        type="password"
      ></v-text-field>

      <v-btn
        color="primary"
        elevation="8"
        raised
        rounded
        x-large
        class="align-center"
      >
        Login</v-btn
      >
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped>
.container {
  /* background: url("../assets/login.jpg"); */
  background: linear-gradient(0deg, rgba(8, 8, 8, 0.8), rgba(8, 8, 8, 0.8)),
    url("../assets/login.jpg");
}
</style>>

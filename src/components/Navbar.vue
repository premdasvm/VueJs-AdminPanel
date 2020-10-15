<template>
  <nav>
    <v-app-bar
      src="https://steamuserimages-a.akamaihd.net/ugc/862862503076386616/61EC84F5EF2B67AF8E4BE68B60B778AD6840E7CF/"
      dark
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase ">
        <span class="font-weight-light">Admin</span>
        <span>panel</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list flat>
          <v-list-item
            class="listItem"
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
            active-class="border"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text to="/login">
        <span>LogOut</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      src="https://steamuserimages-a.akamaihd.net/ugc/862862503076386616/61EC84F5EF2B67AF8E4BE68B60B778AD6840E7CF/"
    >
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="../assets/Avatar.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-1 text-center">Admin</p>
        </v-flex>
      </v-layout>
      <v-list flat>
        <!-- <v-hover v-slot:default="{ hover }"> -->
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
          active-class="border"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- </v-hover> -->
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data: () => ({
    drawer: true,
    links: [
      { icon: "dashboard", text: "Dashboard", route: "/" },
      { icon: "person", text: "Users", route: "/users" },
      { icon: "event_note", text: "Questions", route: "/questions" }
    ]
  }),
  components: {}
};
</script>
<style scoped>
.border {
  border-left: 6px solid #0ba518;
}
.v-list .v-list-item:hover {
  background-color: rgba(96, 125, 139, 0.4);
}

.v-list .v-list-item {
  border-radius: 6px;
  margin: 3px;
}
</style>
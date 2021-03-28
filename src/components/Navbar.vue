<template>
  <nav>
    <v-app-bar dark app color="#eeeeee">
      <v-app-bar-nav-icon style="color: black" @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark app>
      <v-navigation-drawer absolute permanent class="py-0">
        <v-layout column fill-height>
          <v-list flat>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Padaz</v-list-item-title>
                <v-list-item-subtitle>International</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item
              v-for="link in links"
              :key="link.text"
              router
              :to="link.route"
              active-class="border"
            >
              <v-list-item-action style="margin-right: 10px">
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ link.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-spacer></v-spacer>
          <v-list flat class="py-0">
            <!-- <v-list-item class="success"> -->
            <v-list-item
              v-for="logoutLink in logoutLinks"
              :key="logoutLink.text"
              router
              :to="logoutLink.route"
              active-class="border"
            >
              <v-list-item-icon style="margin-right: 10px">
                <v-icon>{{ logoutLink.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ logoutLink.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-layout>
      </v-navigation-drawer>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    logoutLinks: [{ icon: "logout", text: "Logout", route: "/login" }],
    links: [
      { icon: "dashboard", text: "Dashboard", route: "/" },
      { icon: "person", text: "Users", route: "/users" },
      { icon: "inventory", text: "Products", route: "/products" },
      { icon: "shopping_cart", text: "Orders", route: "/orders" },
      { icon: "assignment_late", text: "Product Requests", route: "/requests" },
    ],
  }),
};
</script>

<style scoped>
.border {
  border-left: 6px solid #d48648;
  background-color: rgba(96, 125, 139, 0.4);
}

.v-list {
  margin: 5px;
}

.v-app-bar-nav-icon {
  color: black;
}

.v-list .v-list-item:hover {
  background-color: rgba(96, 125, 139, 0.4);
}

.navdrawer {
  display: flex;
  flex-direction: column;
}

.v-list .v-list-item {
  border-radius: 6px;
  margin: 3px;
}
</style>
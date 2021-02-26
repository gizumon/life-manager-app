<template>
  <v-app light>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar> -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app height="36px" class="footer">
      <span class="caption">LOVE SHOKO♡</span>
      <v-spacer></v-spacer>
      <v-btn
        class="mx-2"
        fab
        dark
        x-small
        color="teal"
        @click="goToHome()"
      >
        <v-icon dark>
          mdi-home
        </v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <span class="caption">FROM TOMOATSU</span>
    </v-footer>
    <!-- <v-bottom-navigation
      v-model="value"
      class="caption"
      :background-color="color"
      dark
      shift
    >
      <v-btn>
        <span >Pay</span>
        <v-icon>mdi-money</v-icon>
      </v-btn>
      <v-btn>
        <span>ToDo</span>
        <v-icon>mdi-music-note</v-icon>
      </v-btn>
      <v-btn>
        <span>ToBuy</span>
        <v-icon>mdi-book</v-icon>
      </v-btn>
      <v-btn>
        <span>View</span>
        <v-icon>mdi-files</v-icon>
      </v-btn>
    </v-bottom-navigation> -->
  </v-app>
</template>



<script>
export default {
  data: () => ({ value: 1 }),
  computed: {
    color () {
      switch (this.value) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
        default: return 'blue-grey'
      }
    },
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
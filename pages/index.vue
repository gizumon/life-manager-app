<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="card in cards"
        :key="card.title"
        :cols="card.flex"
        class=""
      >
        <v-card>
          <router-link :to="card.href">
            <v-img
              :src="card.src"
              :to="card.href"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="calc(100vh - 36px - 48px)"
            >
              <!-- <v-card-title v-text="card.title"></v-card-title> -->
            </v-img>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    cards: [
      {
        type: 'pay',
        title: 'Pay',
        src: 'https://i.postimg.cc/RVY35bL6/Pay.jpg',
        flex: 3,
        href: '/input?type="pay"',
      },{
        type: 'todo',
        title: 'ToDo',
        src: 'https://i.postimg.cc/Jzz6y0fH/ToDo.jpg',
        flex: 3,
        href: '/input?type="todo"',
      },{
        type: 'tobuy',
        title: 'ToBuy',
        src: 'https://i.postimg.cc/J7qz3765/To-BUY.jpg',
        flex: 3,
        href: '/input?type="buy"',
      },{
        title: 'List',
        src: 'https://i.postimg.cc/j2xBqcKB/LIST.jpg',
        flex: 3,
        href: '/view',
      },
      // {
      //   title: 'Album',
      //   src: 'https://cdn.pixabay.com/photo/2017/11/12/22/50/human-2944065_960_720.jpg',
      //   flex: 2,
      //   href: '/album',
      // },
    ],
  }),
}

</script>

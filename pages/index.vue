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
          <v-img
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="calc(100vh - 36px - 48px)"
          >
            <!-- <v-card-title v-text="card.title"></v-card-title> -->
          </v-img>
          <NuxtLink to="card.href"></NuxtLink>

          <!-- <v-card-actions>
            <v-btn
              block
              small
              color="teal"
            >
              <v-icon>mdi-pencil </v-icon>
              <NuxtLink to="card.href"></NuxtLink>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="cyan"
            >
              <v-icon>mdi-view-list</v-icon>
              <NuxtLink to="card.href"></NuxtLink>
            </v-btn>
          </v-card-actions> -->
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
        src: 'https://cdn.pixabay.com/photo/2016/09/05/18/49/plastic-card-1647376_960_720.jpg',
        flex: 3,
        href: '/input/pay',
      },
      {
        type: 'todo',
        title: 'ToDo',
        src: 'https://cdn.pixabay.com/photo/2020/05/30/09/53/todo-lists-5238324_960_720.jpg',
        flex: 3,
        href: '/input/action?type="todo"',
      },
      {
        type: 'todo',
        title: 'ToBuy',
        src: 'https://cdn.pixabay.com/photo/2016/03/02/20/13/grocery-1232944_960_720.jpg',
        flex: 3,
        href: '/input/action?type="buy"',
      },
      {
        title: 'List',
        src: 'https://cdn.pixabay.com/photo/2019/05/09/10/52/audit-4190944_960_720.jpg',
        flex: 3,
        href: '/dashboard',
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

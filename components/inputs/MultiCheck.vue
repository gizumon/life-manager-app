<template>
  <v-row justify="space-around">
    <v-col cols="2" class="item-center">
      <v-icon large color="blue">{{ config.icon }}</v-icon>
    </v-col>
    <v-col
      cols="10"
      sm="10"
      md="8"
      class="my-0 pa-2"
    >
      <v-sheet
        elevation="10"
        class="px-1"
      >
        <v-chip-group
          multiple
          active-class="primary--text"
          v-model="config.model"
          @change="update()"
        >
          <v-chip
            v-for="data in config.dataList"
            :key="data.name"
            :value="data"
          >
           <v-avatar left size="25" v-if="data.picture">
              <img
                :src="data.picture"
                alt="John"
              >
            </v-avatar>
            <span class="text-caption elipsis-30">{{ data.name }}</span>
          </v-chip>
        </v-chip-group>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { IInput } from '@/types/models.ts';

export default Vue.extend({
  props: {
    config: Object as PropType<IInput>
  },
  methods: {
    update: function() {
      this.$emit('update', this.config);
    }
  },
  mounted: function(){
    console.log(this.config);
  }
});
</script>

<style lang="scss" scoped>
.item-center {
  display: flex;
  justify-content: center;
  align-content: center;
}
.elipsis-30 {
    max-width: 5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>

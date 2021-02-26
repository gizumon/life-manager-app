<template>
  <v-row justify="space-around">
    <v-col cols="2" class="item-center pa-0">
      <v-icon large color="blue">{{ config.icon }}</v-icon>
    </v-col>
    <v-col
      cols="10"
      sm="10"
      md="8"
      class="my-0 pa-2"
    >
      <v-select
        :items="config.data.map(data => data.name)"
        :label="config.placeholder"
        solo
        dense
        hide-details
        single-line
        v-model="config.model"
        @change="update()"
        class="caption"
      ></v-select>
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

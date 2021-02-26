<template>
  <v-card>
    <v-toolbar
      dense
      height="36px">
      <template>
        <v-tabs
          v-model="selectedType"
          fixed-tabs
        >
          <v-tabs-slider></v-tabs-slider>
          <v-tab v-for="config in configs" :key="config.type"
            :href="'#' + config.type"
            class="primary--text caption"
          >
            <v-icon
              dense
              color="blue darken-2"
              class="mr-1">{{ config.icon }}</v-icon>
              {{ config.name }}
          </v-tab>

          <!-- <v-tab
            href="#todo"
            class="primary--text caption"
          >
          <v-icon
            dense
            color="blue darken-2"
            class="mr-1">mdi-heart</v-icon>
            todo
          </v-tab>

          <v-tab
            href="#tobuy"
            class="primary--text caption"
          >
            <v-icon
              dense
              color="blue darken-2"
              class="mr-1">mdi-account-box</v-icon>
            tobuy
          </v-tab> -->
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="selectedType">
      <v-tab-item
        v-for="config in configs"
        :key="config.type"
        :value="config.type"
      >
        <v-card flat>
          <!-- <v-card-text class="py-1" v-text="config.description"></v-card-text> -->
          <v-form v-model="valid">
            <v-container>
              <div v-for="input in config.inputs" :key="input.id">
                <MultiCheck v-if="input && input.type === 'multi-check'" :config="input" v-model="input.model"/>
                <Input v-if="input && input.type === 'number' || input.type === 'text'" :config="input" v-model="input.model"/>
                <SelectBox v-if="input && input.type === 'select'" :config="input" v-model="input.model"/>
              </div>
            </v-container>
          </v-form>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import MultiCheck from '@/components/inputs/MultiCheck.vue';
import Input from '@/components/inputs/Input.vue';
import SelectBox from '@/components/inputs/SelectBox.vue';

import { IConfig } from '@/types/models.ts';

const categoryData = [{
  id: 'none',
  name: '指定なし',
  setting: [{
    menber_id: '1',
    ratio: 1.0
  },{
    menber_id: '2',
    ratio: 1.0
  }],
},{
  id: 'foods',
  name: '飲食費',
  setting: [{
    menber_id: '1',
    ratio: 1.0
  },{
    menber_id: '2',
    ratio: 1.0
  }],
},{
  id: 'households',
  name: '日用品',
  setting: [{
    menber_id: '1',
    ratio: 1.0
  },{
    menber_id: '2',
    ratio: 1.0
  }],
},{
  id: 'hobbies',
  name: '趣味',
  setting: [{
    menber_id: '1',
    ratio: 1.0
  },{
    menber_id: '2',
    ratio: 1.0
  }],
},{
  id: 'furnitures',
  name: '家具・家電',
  setting: [{
    menber_id: '1',
    ratio: 1.0
  },{
    menber_id: '2',
    ratio: 1.0
  }],
},]

export default Vue.extend({
  head() {
    return {
      title: '入力ページ',
      meta: []
    };
  },
  data() {
    return {
      valid: false,
      selectedId: this.$route.query.id,
      selectedType: this.$route.query.type,
      configs: [{
        type: 'pay',
        name: 'pay',
        icon: 'mdi-account-cash',
        description: 'お会計を追加してね',
        inputs: [{
          id: 'price',
          name: '金額',
          type: 'number',
          placeholder: 'ex) 2,000',
          icon: 'mdi-cash-100',
          model: null,
          validates: [{
            type: 'isNotNull'
          },{
            type: 'isLower',
            args: [ 10 ]
          }]
        },{
          id: 'payedFor',
          name: '誰の',
          type: 'multi-check',
          placeholder: '-- だれの --',
          icon: 'mdi-account-circle',
          model: (this as any).members || [], // TODO: mounted default person
          validates: [{
            type: 'isNotNull'
          }],
          dataList: (this as any).members || []
        },{
          id: 'category',
          name: 'カテゴリ',
          type: 'select',
          placeholder: '-- カテゴリ --',
          icon: 'mdi-help-box',
          model: 'none',
          validates: [],
          dataList: categoryData
        },{
          id: 'memo',
          name: '備考',
          type: 'text',
          placeholder: 'ex) コンビニ',
          icon: 'mdi-tooltip-edit',
          model: null,
          validates: [ ],
          args: []
        },{
          id: 'payedBy',
          name: '支払ってくれた人',
          type: 'select-btns',
          placeholder: '',
          icon: 'mdi-account-circle',
          model: '',
          validates: [ ],
          args: []
        }]
      },{
        type: 'todo',
        name: 'todo',
        icon: 'mdi-calendar-check',
        description: 'ToDoを追加してね',
        inputs: [{
          id: 'task',
          name: 'タスク',
          type: 'text',
          placeholder: 'ex) ごみ捨て',
          icon: 'mdi-checkbox-marked',
          model: '',
          validates: [{
            type: 'iNotNull'
          },{
            type: 'isLower',
            args: [ 100 ]
          }],
          args: []
        },{
          id: 'dueDate',
          name: '期限',
          type: 'date',
          placeholder: '2021/XX/XX',
          icon: 'mdi-calendar-clock',
          model: new Date(), // TODO: mounted default person
          validates: [{
            type: 'isDate'
          }],
          args: []
        },{
          id: 'doBy',
          name: '担当',
          type: 'select-btns',
          placeholder: '',
          icon: 'mdi-account-circle',
          model: '',
          validates: [],
          args: []
        }]
      },{
        type: 'tobuy',
        name: "tobuy",
        icon: 'mdi-cart-plus',
        description: '買う物リストを追加してね',
        inputs: [{
          id: 'task',
          name: 'タスク',
          type: 'text',
          placeholder: 'ex) しめじ',
          icon: 'mdi-checkbox-marked',
          model: '',
          validates: [{
            type: 'iNotNull'
          },{
            type: 'isLower',
            args: [ 100 ]
          }],
          args: []
        },{
          id: 'dueDate',
          name: '期限',
          type: 'date',
          placeholder: '2021/XX/XX',
          icon: 'mdi-calendar-clock',
          model: new Date(), // TODO: mounted default person
          validates: [{
            type: 'isDate'
          }],
          args: []
        },{
          id: 'doBy',
          name: '担当',
          type: 'select-person-btn',
          placeholder: '',
          icon: 'mdi-account-circle',
          model: '',
          validates: [],
          args: []
        }]
      }] as IConfig[],
    }
  },
  asyncData(context) {
    // TODO: replace mock data
    const members = [{
      id: '1',
      line_id: 'dummy_1_lineId',
      name: 'dummy_1_name',
      picture: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    },{
      id: '2',
      line_id: 'dummy_2_lineId',
      name: 'dummy_2_name',
      picture: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    }]
    return { members: members };
  },
  methods: {　},
  mounted: function() {
    console.log((this as any).members);
    this.configs.forEach((config: any) => config.inputs.forEach((input: any) => {
      if (input.id === 'payedFor') {
        input.dataList = (this as any).members;
        input.model = (this as any).members;
      }})
    );
  }
})
</script>

<style lang="scss" scoped>
  .test {
    color: 'red';
  }
</style>

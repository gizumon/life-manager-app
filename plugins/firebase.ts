// import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/database';
import { Plugin } from '@nuxt/types';

const firebaseConfig = {
  apiKey: 'AIzaSyABK5jEgFuu6rf6oG_1dhGcQKQxu0IzhQE',
  authDomain: 'life-manager-app-303611.firebaseapp.com',
  databaseURL: 'https://life-manager-app-303611-default-rtdb.firebaseio.com',
  projectId: 'life-manager-app-303611',
  storageBucket: 'life-manager-app-303611.appspot.com',
  messagingSenderId: '228392641348',
  appId: '1:228392641348:web:9291e5a9d7554f7e296d11',
  measurementId: 'G-KC6X7VM4SE',
};

// trigger on initialize
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

declare module 'vue/types/vue' {
  interface Vue {
    $firebase: firebase.app.App;
    $db: firebase.database.Database;
    // $myInjectedFunction(message: string): void
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $firebase: firebase.app.App;
    $db: firebase.database.Database;
  }
}

// declare module 'vuex/types/index' {
//   interface Store<S> {
//     $firebase: firebase.app.App;
//     $db: firebase.database.Database;
//   }
// }

const myPlugin: Plugin = (_, inject) => {
  inject('firebase', firebase);
  inject('db', firebase.database());
};

export default myPlugin;
export { firebase }
// export const auth: firebase.auth.Auth = firebase.auth()
export const db: firebase.database.Database = firebase.database()
// export const storage: firebase.storage.Storage = firebase.storage()
// export const analytics: firebase.analytics.Analytics = firebase.analytics()
export const timestamp: Function = (): Object => {
  return firebase.database.ServerValue.TIMESTAMP;
}
// Vue.prototype.$myInjectedFunction = (message: string) => {
//     console.log(message);
// }

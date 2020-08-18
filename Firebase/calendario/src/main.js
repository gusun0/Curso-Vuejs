import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import VueTextareaAutosize from 'vue-textarea-autosize';
Vue.use(VueTextareaAutosize);

import firebase from 'firebase/app';
import 'firebase/firestore'; // para poer utilizar nuestra db no relacional

 // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUG5i0bEfeSlsqSG-OCwVcF9LI4nttjdE",
  authDomain: "vue-calendario-9d647.firebaseapp.com",
  databaseURL: "https://vue-calendario-9d647.firebaseio.com",
  projectId: "vue-calendario-9d647",
  storageBucket: "vue-calendario-9d647.appspot.com",
  messagingSenderId: "775220171629",
  appId: "1:775220171629:web:7b89ae4656fe2f24808064"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// para agregar, editar, leer y eliminar 
export const db = firebase.firestore();

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

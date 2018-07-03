import Vue from 'vue';
// import BotUI from 'botui'
// import Dialog from './dialogs/index';
import App from './App.vue';
import store from './store'

Vue.config.productionTip = false;

// const botui = new BotUI('app', {
//   vue: Vue // pass the dependency.
// });

// Vue.component('input-container', inputContainer);

// Start the dialog !
// const dialog = new Dialog(botui);
// dialog.start(botui);



new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
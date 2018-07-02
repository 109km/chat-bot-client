import Vue from '../node_modules/vue/dist/vue.min.js'
import BotUI from 'botui'
import Dialog from './dialogs/index';
// import inputContainer from './components/input.vue'

Vue.config.productionTip = false;
const botui = new BotUI('app', {
  vue: Vue // pass the dependency.
});

// Vue.component('input-container', inputContainer);

// Start the dialog !
const dialog = new Dialog(botui);
dialog.start(botui);



// new Vue({
//   render: h => h(App)
// }).$mount('#app')
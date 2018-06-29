import Vue from '../node_modules/vue/dist/vue'
import BotUI from 'botui'
import * as dialog from './dialogs/index';
// import App from './App.vue'

Vue.config.productionTip = false;
const botui = new BotUI('app', {
  vue: Vue // pass the dependency.
});

async function init() {
  let result = await dialog.hello(botui);
  console.log(result);
}

init();



// new Vue({
//   render: h => h(App)
// }).$mount('#app')
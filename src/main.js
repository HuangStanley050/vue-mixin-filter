import Vue from "vue";
import App from "./App.vue";

// Vue.filter('to-lowercase', function(value) {
//     return value.toLowerCase();
// });
//
// Vue.mixin({
//     created() {
//         console.log('Global Mixin - Created Hook');
//     }
// });

Vue.filter("countandappend", value => {
  let wordLength = value.length;
  let newWord = value.concat(` (${wordLength})`);
  return newWord;
});

new Vue({
  el: "#app",
  render: h => h(App)
});

import * as Vue from 'vue';
import * as VueRouter from 'vue-router'
//import _ from 'lodash';
import * as ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css';
import routes from './routes'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})


const app = new Vue({
    router:router,
    el: '#app',
    data: function () {
        return { visible: false }
    }
});



// esriLoader.dojoRequire(["esri/map"], (Map) => {
//     let map = new Map("map", {
//         center: [-118, 34.50],
//         zoom: 8,
//         basemap: "dark-gray"
//     });
// });
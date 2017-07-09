import * as Vue from 'vue';
import _ from 'lodash';
import esriLoader from 'esri-loader';
import * as ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css';

// import Map from 'esri/map';

Vue.use(ElementUI)

let app = new Vue({
    el: '#app',
    data: function () {
        return { visible: false }
    }
});



esriLoader.dojoRequire(["esri/map"], (Map) => {
    let map = new Map("map", {
        center: [-118, 34.5],
        zoom: 8,
        basemap: "dark-gray"
    });
});
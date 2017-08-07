import * as Vue from 'vue'
import Component from 'vue-class-component'
import esriLoader from 'esri-loader'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component
export default class MyComponent extends Vue {
    // 初始数据可以直接声明为实例的属性
    message: string = 'Hello!'
    // 组件方法也可以直接声明为实例的方法
    onClick(): void {
        window.alert(this.message);
        console.log(this.tableData);

    }
    mounted() {
        this.$nextTick(() => {
            esriLoader.dojoRequire(["esri/map", "esri/layers/ArcGISDynamicMapServiceLayer"], (Map, ArcGISDynamicMapServiceLayer) => {
                let map = new Map("map");
                let layer = new ArcGISDynamicMapServiceLayer("http://192.168.12.25:6080/arcgis/rest/services/bigData/Img2014/MapServer");
                map.addLayer(layer);
            });
        })
    }
}
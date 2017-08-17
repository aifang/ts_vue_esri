import * as Vue from 'vue'
import Component from 'vue-class-component'
import esriLoader from 'esri-loader'
import search from "../search/search.vue";
import esri from "esri";

// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
    components: {//子组件声明
        "search": search
    },
    // props: {
    //     layer:Object
    // }
})
export default class MyComponent extends Vue {
    [x: string]: any;
    // 初始数据可以直接声明为实例的属性
    message: string = 'Hello!'
    map: any
    layer: Object = {}
    // 组件方法也可以直接声明为实例的方法
    onClick(): void {
        this.$message(this.message)
    }
    mounted() {
        this.$nextTick(() => {
            esriLoader.dojoRequire(["esri/map", "esri/layers/ArcGISDynamicMapServiceLayer"], (Map, ArcGISDynamicMapServiceLayer) => {
                let opt: esri.MapOptions = { showLabels: false, showAttribution: false}
                this.map = new Map("map",opt);
                this.layer = new ArcGISDynamicMapServiceLayer("http://192.168.12.25:6080/arcgis/rest/services/bigData/Img2014/MapServer");
                this.map.addLayer(this.layer);
            });
        })
    }
}
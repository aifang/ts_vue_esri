import * as Vue from 'vue'
import  { Component, Model, Prop, Watch } from 'vue-property-decorator'
import esriLoader from 'esri-loader'
import esri from "esri";

@Component
export default class search extends Vue {
    [x: string]: any;
    //在此声明dojo amd 模块,利用mounted方法保留
    layerList: any
    
    input2: string = 'search...'

    @Prop()
    layer: any

    // 组件方法也可以直接声明为实例的方法
    onClick(): void {
        this.$message(this.input2)
        console.log(this.layer)
        this.layerList.seacrchFeature('你好', '*', this.layer);
    }
    mounted() {
        esriLoader.dojoRequire(["gis/layerList"], (layerList) => {
            this.layerList = layerList
        });
    }
    // computed
    get computedMsg () {
        return 'computed ' + this.layer.url
      }

}
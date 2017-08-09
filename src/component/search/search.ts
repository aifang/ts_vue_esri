import * as Vue from 'vue'
import Component from 'vue-class-component'
import esriLoader from 'esri-loader'


// @Component 修饰符注明了此类为一个 Vue 组件
@Component({
    props: {
        layer: Object
    }
})
export default class search extends Vue {
    [x: string]: any;
    //在此声明dojo amd 模块,利用mounted方法保留
    layerList: any

    // 初始数据可以直接声明为实例的属性
    input2: string = 'search...'
    layer: any
    // 组件方法也可以直接声明为实例的方法
    onClick(): void {
        this.$message(this.input2)
        console.log(this.layer)
        this.layerList.seacrchFeature('你好', '*', this.layer.url);
    }
    mounted() {
        esriLoader.dojoRequire(["gis/layerList"], (layerList) => {
            this.layerList = layerList
        });
    }

}
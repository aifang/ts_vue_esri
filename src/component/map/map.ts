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
        console.log('aaaa');
        esriLoader.dojoRequire(["esri/map"], (Map) => {
            let map = new Map("map", {
                center: [-118, 34.50],
                zoom: 8,
                basemap: "dark-gray"
            });
        });
    }
}
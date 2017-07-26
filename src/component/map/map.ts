import * as Vue from 'vue'
import Component from 'vue-class-component'
import esriLoader from 'esri-loader'

// @Component 修饰符注明了此类为一个 Vue 组件
@Component
export default class MyComponent extends Vue {
    // 初始数据可以直接声明为实例的属性
    message: string = 'Hello!'
    tableData = [
        {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }]
    // 组件方法也可以直接声明为实例的方法
    onClick(): void {
        window.alert(this.message);
        console.log(this.tableData);
        esriLoader.dojoRequire(["esri/map"], (Map) => {
            let map = new Map("map", {
                center: [-118, 34.50],
                zoom: 8,
                basemap: "dark-gray"
            });
        });
    }
}
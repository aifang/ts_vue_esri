<template>
    <div class="tools">
        <el-tooltip class="item" effect="light" content="材料包管理" placement="bottom">
            <el-button type="primary" @click="manage" icon="menu"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="打印出图" placement="bottom">
            <el-button type="primary" @click="print" icon="picture"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="light" content="宗地" placement="bottom">
            <el-button type="primary" @click="land" icon="d-caret"></el-button>
        </el-tooltip>
        <div class="dialog">
            <el-dialog title="材料包管理" :visible.sync="materialPackageManagement">
                <div class="search-tool">
                    <el-row>
                        <el-col :span="3">日期范围：</el-col>
                        <el-col :span="9">
                            <el-date-picker
                                size="small"
                                v-model="value1"
                                align="right"
                                type="daterange"
                                placeholder="日期范围">
                            </el-date-picker>
                        </el-col>
                        <el-col :span="2">内容：</el-col>
                        <el-col :span="10">
                            <el-input
                                    size="small"
                                    placeholder=""
                                    icon="search"
                                    v-model="input2"
                                    :on-icon-click="handleIconClick">
                            </el-input>
                        </el-col>
                    </el-row>
                </div>
                <div>
                    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                        <el-tab-pane label="用户管理" name="first">我的资料</el-tab-pane>
                        <el-tab-pane label="配置管理" name="second">共享资料</el-tab-pane>
                        <el-tab-pane label="角色管理" name="third">我的共享</el-tab-pane>
                        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                    </el-tabs>
                </div>
                <el-table :data="gridData" height="300">
                    <el-table-column property="date" label="日期" width="150"></el-table-column>
                    <el-table-column property="name" label="姓名" width="100"></el-table-column>
                    <el-table-column property="name" label="人缘" width="100"></el-table-column>
                    <el-table-column property="address" label="地址" width="240"></el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作"
                            width="100">
                        <template scope="scope">
                            <el-button @click="handleClick" type="text" size="small">查看</el-button>
                            <el-button type="text" size="small">编辑</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="Paginations">
                    <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-sizes="[100, 200, 300, 400]"
                            :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper"
                            :total="400">
                    </el-pagination>
                </div>
            </el-dialog>
            <el-dialog title="打印出图" :visible.sync="printOutPicture">
                <el-row>
                    <el-col :span="4">
                        <el-menu default-active="1" class="el-menu-vertical-demo">
                            <el-menu-item index="1">出图模式</el-menu-item>
                            <el-menu-item index="2">宗地查询</el-menu-item>
                            <el-menu-item index="3">宗地骏储</el-menu-item>
                        </el-menu>
                    </el-col>
                    <el-col :span="20">

                    </el-col>
                </el-row>
            </el-dialog>
            <el-dialog title="搜索定位" :visible.sync="landDialog" size="tiny">
                <div class="search-tool">
                    <el-row>
                        <el-col :span="4"><div style="line-height: 32px;">关键字：</div></el-col>
                        <el-col :span="14">
                            <el-input v-model="input" placeholder=""></el-input>
                        </el-col>
                        <el-col :span="6"><div style="text-align:right"><el-button type="primary" icon="search">搜索</el-button></div></el-col>
                    </el-row>
                    <div class="Paginations">
                        <el-table :data="gridData" height="300">
                            <el-table-column property="date" label="日期" width="150"></el-table-column>
                            <el-table-column property="name" label="姓名" width="100"></el-table-column>
                            <el-table-column property="name" label="人缘" width="100"></el-table-column>
                            <el-table-column property="address" label="地址" width="240"></el-table-column>
                            <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="100">
                                <template scope="scope">
                                    <el-button @click="handleClick" type="text" size="small">查看</el-button>
                                    <el-button type="text" size="small">编辑</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="Paginations">
                        <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page.sync="currentPage3"
                                :page-size="20"
                                layout="prev, pager, next, jumper"
                                :total="100">
                        </el-pagination>
                    </div>
                </div>
            </el-dialog>
        </div>
    </div>
</template>
<style>
    .tools{position: absolute;width:800px;height:40px;left:50%;top:5px;margin-left:-400px;text-align: center;}
    .search-tool{margin-bottom: 5px;}
    .dialog{text-align: left;}
    .Paginations{margin-top: 3px;}
</style>
<script>
    import ElDialog from "../../../node_modules/element-ui/packages/dialog/src/component.vue";

    export default {
        components: {ElDialog},
        data(){
            return {
                activeName2: 'first',
                value1: '',
                input2:'',
                input:'',
                currentPage4: 1,
                currentPage3: 5,
                materialPackageManagement:false,
                printOutPicture:false,
                landDialog:false,
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },{
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                menu:true
            }
        },
        methods: {
            handleIconClick(ev) {
                console.log(ev);
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            manage(){
                this.materialPackageManagement=true;
            },
            print(){
                this.printOutPicture=true;
            },
            land(){
                this.landDialog=true;
            }
        }
    }
</script>
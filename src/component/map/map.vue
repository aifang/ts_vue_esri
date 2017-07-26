<template>
    <div>
        <el-button @click="onClick">{{message}}</el-button>
        <div id="map"> </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts">
import Map from "./map";
export default Map;
</script>

        
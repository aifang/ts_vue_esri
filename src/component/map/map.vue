<template>
    <div>
        <search :layer="layer"></search>
        <el-button @click="onClick">{{message}}</el-button>
        <div id="map"> </div>
    </div>
</template>
<script lang="ts">
import Map from "./map";
export default Map;
</script>

        
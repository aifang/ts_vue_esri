
import ArcGISDynamicMapServiceLayer = require("esri/layers/ArcGISDynamicMapServiceLayer")
import FindParameters = require("esri/tasks/FindParameters")
import FindTask = require("esri/tasks/FindTask")
import FindResult = require("esri/tasks/FindResult")
import Extent = require("esri/geometry/Extent")
import SimpleLineSymbol = require("esri/symbols/SimpleLineSymbol")
import SimpleFillSymbol = require("esri/symbols/SimpleFillSymbol")
import Color = require("esri/Color")
import Graphic = require("esri/graphic")
import on = require("dojo/on")

function seacrchFeature(a, b, lyrServer: ArcGISDynamicMapServiceLayer) {
    var lyrIds = lyrServer.layerInfos.map((info) => { return info.id; });
    var params = new FindParameters();
    params.returnGeometry = true;
    params.layerIds = lyrIds;
    params.searchFields = [a];
    params.searchText = b;
    var findTask = new FindTask(lyrServer.url);
    var promise = findTask.execute(params).then(showFindResult)
}
function showFindResult(queryResult:FindResult[]) {
    if (queryResult.length == 0) {
        alert("没有该元素.");
        return;
    }
    return queryResult;
}

export { seacrchFeature }


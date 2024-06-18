ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-77.193525, 38.820293, -76.975788, 38.943965]);
var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DroveAlone_1 = new ol.format.GeoJSON();
var features_DroveAlone_1 = format_DroveAlone_1.readFeatures(json_DroveAlone_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DroveAlone_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DroveAlone_1.addFeatures(features_DroveAlone_1);
var lyr_DroveAlone_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DroveAlone_1, 
                style: style_DroveAlone_1,
                popuplayertitle: "Drove Alone",
                interactive: true,
    title: 'Drove Alone<br />\
    <img src="styles/legend/DroveAlone_1_0.png" /> 0 - 5<br />\
    <img src="styles/legend/DroveAlone_1_1.png" /> 5 - 10<br />\
    <img src="styles/legend/DroveAlone_1_2.png" /> 10 - 15<br />\
    <img src="styles/legend/DroveAlone_1_3.png" /> 15 - 20<br />\
    <img src="styles/legend/DroveAlone_1_4.png" /> 20 - 25<br />\
    <img src="styles/legend/DroveAlone_1_5.png" /> 25 - 30<br />\
    <img src="styles/legend/DroveAlone_1_6.png" /> 30 - 35<br />\
    <img src="styles/legend/DroveAlone_1_7.png" /> 35 - 40<br />\
    <img src="styles/legend/DroveAlone_1_8.png" /> 40 - 45<br />\
    <img src="styles/legend/DroveAlone_1_9.png" /> 45 - 50<br />\
    <img src="styles/legend/DroveAlone_1_10.png" /> 50 - 55<br />\
    <img src="styles/legend/DroveAlone_1_11.png" /> 55 - 60<br />\
    <img src="styles/legend/DroveAlone_1_12.png" /> 60 - 65<br />\
    <img src="styles/legend/DroveAlone_1_13.png" /> 65 - 70<br />'
        });

lyr_ESRIGraylight_0.setVisible(true);lyr_DroveAlone_1.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_DroveAlone_1];
lyr_DroveAlone_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'STATEFP20': 'STATEFP20', 'COUNTYFP20': 'COUNTYFP20', 'TRACTCE20': 'TRACTCE20', 'GEOID20': 'GEOID20', 'NAME20': 'NAME20', 'NAMELSAD20': 'NAMELSAD20', 'MTFCC20': 'MTFCC20', 'FUNCSTAT20': 'FUNCSTAT20', 'ALAND20': 'ALAND20', 'AWATER20': 'AWATER20', 'INTPTLAT20': 'INTPTLAT20', 'INTPTLON20': 'INTPTLON20', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'TractCode': 'TractCode', 'DroveAlone': 'DroveAlone', 'Carpooled': 'Carpooled', 'PublicTransportation': 'PublicTransportation', 'Walked': 'Walked', 'Bicycle': 'Bicycle', 'OtherMeans': 'OtherMeans', 'WorkedFromHome': 'WorkedFromHome', 'NoVehicleAvailable': 'NoVehicleAvailable', 'OneVehicleAvailable': 'OneVehicleAvailable', 'TwoVehiclesAvailable': 'TwoVehiclesAvailable', 'ThreeOrMoreVehiclesAvailable': 'ThreeOrMoreVehiclesAvailable', 'TractCodeWeb': 'Tract Code', 'DroveAloneWeb': 'Percent', });
lyr_DroveAlone_1.set('fieldImages', {'OBJECTID': 'Hidden', 'STATEFP20': 'Hidden', 'COUNTYFP20': 'Hidden', 'TRACTCE20': 'Hidden', 'GEOID20': 'Hidden', 'NAME20': 'Hidden', 'NAMELSAD20': 'Hidden', 'MTFCC20': 'Hidden', 'FUNCSTAT20': 'Hidden', 'ALAND20': 'Hidden', 'AWATER20': 'Hidden', 'INTPTLAT20': 'Hidden', 'INTPTLON20': 'Hidden', 'Shape_Length': 'Hidden', 'Shape_Area': 'Hidden', 'TractCode': 'Hidden', 'DroveAlone': 'Hidden', 'Carpooled': 'Hidden', 'PublicTransportation': 'Hidden', 'Walked': 'Hidden', 'Bicycle': 'Hidden', 'OtherMeans': 'Hidden', 'WorkedFromHome': 'Hidden', 'NoVehicleAvailable': 'Hidden', 'OneVehicleAvailable': 'Hidden', 'TwoVehiclesAvailable': 'Hidden', 'ThreeOrMoreVehiclesAvailable': 'Hidden', 'TractCodeWeb': 'TextEdit', 'DroveAloneWeb': 'TextEdit', });
lyr_DroveAlone_1.set('fieldLabels', {'TractCodeWeb': 'inline label - always visible', 'DroveAloneWeb': 'inline label - always visible', });
lyr_DroveAlone_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
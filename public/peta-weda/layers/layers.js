var wms_layers = [];


        var lyr_ESRISatelite_0 = new ol.layer.Tile({
            'title': 'ESRI Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_2025PCAFIXBANGET_1 = new ol.layer.Image({
        opacity: 1,
        
    title: '2025 PCA FIX BANGET<br />\
    <img src="styles/legend/2025PCAFIXBANGET_1_0.png" /> 1,0000<br />\
    <img src="styles/legend/2025PCAFIXBANGET_1_1.png" /> 2,0000<br />\
    <img src="styles/legend/2025PCAFIXBANGET_1_2.png" /> 3,0000<br />\
    <img src="styles/legend/2025PCAFIXBANGET_1_3.png" /> 4,0000<br />\
    <img src="styles/legend/2025PCAFIXBANGET_1_4.png" /> 5,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/2025PCAFIXBANGET_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [14223163.658318, 43767.061906, 14251837.558067, 72532.387225]
        })
    });
var format_Kec_Weda_Tengah_2 = new ol.format.GeoJSON();
var features_Kec_Weda_Tengah_2 = format_Kec_Weda_Tengah_2.readFeatures(json_Kec_Weda_Tengah_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kec_Weda_Tengah_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kec_Weda_Tengah_2.addFeatures(features_Kec_Weda_Tengah_2);
var lyr_Kec_Weda_Tengah_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kec_Weda_Tengah_2, 
                style: style_Kec_Weda_Tengah_2,
                popuplayertitle: 'Kec_Weda_Tengah',
                interactive: true,
                title: '<img src="styles/legend/Kec_Weda_Tengah_2.png" /> Kec_Weda_Tengah'
            });

lyr_ESRISatelite_0.setVisible(true);lyr_2025PCAFIXBANGET_1.setVisible(true);lyr_Kec_Weda_Tengah_2.setVisible(true);
var layersList = [lyr_ESRISatelite_0,lyr_2025PCAFIXBANGET_1,lyr_Kec_Weda_Tengah_2];
lyr_Kec_Weda_Tengah_2.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_Kec_Weda_Tengah_2.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_Kec_Weda_Tengah_2.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_Kec_Weda_Tengah_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
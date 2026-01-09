var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'GoogleSatelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_KecamatanKalibagor_2 = new ol.format.GeoJSON();
var features_KecamatanKalibagor_2 = format_KecamatanKalibagor_2.readFeatures(json_KecamatanKalibagor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanKalibagor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanKalibagor_2.addFeatures(features_KecamatanKalibagor_2);
var lyr_KecamatanKalibagor_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecamatanKalibagor_2,
maxResolution:56.00893230452392,
 minResolution:14.00223307613098,

                style: style_KecamatanKalibagor_2,
                popuplayertitle: 'Kecamatan Kalibagor',
                interactive: false,
                title: '<img src="styles/legend/KecamatanKalibagor_2.png" /> Kecamatan Kalibagor'
            });
var format_Desa_3 = new ol.format.GeoJSON();
var features_Desa_3 = format_Desa_3.readFeatures(json_Desa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Desa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Desa_3.addFeatures(features_Desa_3);
var lyr_Desa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Desa_3,
maxResolution:19.603126306583373,
 
                style: style_Desa_3,
                popuplayertitle: 'Desa',
                interactive: false,
    title: 'Desa<br />\
    <img src="styles/legend/Desa_3_0.png" /> Kalibagor<br />\
    <img src="styles/legend/Desa_3_1.png" /> Kalicupak Kidul<br />\
    <img src="styles/legend/Desa_3_2.png" /> Kalicupak Lor<br />\
    <img src="styles/legend/Desa_3_3.png" /> Kaliori<br />\
    <img src="styles/legend/Desa_3_4.png" /> Kalisogra Wetan<br />\
    <img src="styles/legend/Desa_3_5.png" /> Karangdadap<br />\
    <img src="styles/legend/Desa_3_6.png" /> Pajerukan<br />\
    <img src="styles/legend/Desa_3_7.png" /> Pekaja<br />\
    <img src="styles/legend/Desa_3_8.png" /> Petir<br />\
    <img src="styles/legend/Desa_3_9.png" /> Srowot<br />\
    <img src="styles/legend/Desa_3_10.png" /> Suro<br />\
    <img src="styles/legend/Desa_3_11.png" /> Wlahar Wetan<br />' });
var format_FasilitasKesehatan_4 = new ol.format.GeoJSON();
var features_FasilitasKesehatan_4 = format_FasilitasKesehatan_4.readFeatures(json_FasilitasKesehatan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasKesehatan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasKesehatan_4.addFeatures(features_FasilitasKesehatan_4);
var lyr_FasilitasKesehatan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasKesehatan_4,
maxResolution:4.200669922839294,
 
                style: style_FasilitasKesehatan_4,
                popuplayertitle: 'Fasilitas Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/FasilitasKesehatan_4.png" /> Fasilitas Kesehatan'
            });
var format_Sekolah_5 = new ol.format.GeoJSON();
var features_Sekolah_5 = format_Sekolah_5.readFeatures(json_Sekolah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_5.addFeatures(features_Sekolah_5);
var lyr_Sekolah_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_5,
maxResolution:4.200669922839294,
 
                style: style_Sekolah_5,
                popuplayertitle: 'Sekolah',
                interactive: true,
                title: '<img src="styles/legend/Sekolah_5.png" /> Sekolah'
            });
var format_SPBU_6 = new ol.format.GeoJSON();
var features_SPBU_6 = format_SPBU_6.readFeatures(json_SPBU_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_6.addFeatures(features_SPBU_6);
var lyr_SPBU_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPBU_6,
maxResolution:4.200669922839294,
 
                style: style_SPBU_6,
                popuplayertitle: 'SPBU',
                interactive: true,
                title: '<img src="styles/legend/SPBU_6.png" /> SPBU'
            });
var format_TempatIbadah_7 = new ol.format.GeoJSON();
var features_TempatIbadah_7 = format_TempatIbadah_7.readFeatures(json_TempatIbadah_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TempatIbadah_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TempatIbadah_7.addFeatures(features_TempatIbadah_7);
var lyr_TempatIbadah_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TempatIbadah_7,
maxResolution:4.200669922839294,
 
                style: style_TempatIbadah_7,
                popuplayertitle: 'Tempat Ibadah',
                interactive: true,
                title: '<img src="styles/legend/TempatIbadah_7.png" /> Tempat Ibadah'
            });
var format_KantorPemerintahan_8 = new ol.format.GeoJSON();
var features_KantorPemerintahan_8 = format_KantorPemerintahan_8.readFeatures(json_KantorPemerintahan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorPemerintahan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorPemerintahan_8.addFeatures(features_KantorPemerintahan_8);
var lyr_KantorPemerintahan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorPemerintahan_8,
maxResolution:9.801563153291687,
 
                style: style_KantorPemerintahan_8,
                popuplayertitle: 'Kantor Pemerintahan',
                interactive: true,
                title: '<img src="styles/legend/KantorPemerintahan_8.png" /> Kantor Pemerintahan'
            });
var format_SUNGAI_LN_25K_9 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_9 = format_SUNGAI_LN_25K_9.readFeatures(json_SUNGAI_LN_25K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_9.addFeatures(features_SUNGAI_LN_25K_9);
var lyr_SUNGAI_LN_25K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_9,
maxResolution:56.00893230452392,
 
                style: style_SUNGAI_LN_25K_9,
                popuplayertitle: 'SUNGAI_LN_25K',
                interactive: false,
                title: '<img src="styles/legend/SUNGAI_LN_25K_9.png" /> SUNGAI_LN_25K'
            });
var format_JalanProvinsi_10 = new ol.format.GeoJSON();
var features_JalanProvinsi_10 = format_JalanProvinsi_10.readFeatures(json_JalanProvinsi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanProvinsi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanProvinsi_10.addFeatures(features_JalanProvinsi_10);
var lyr_JalanProvinsi_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanProvinsi_10,
maxResolution:56.00893230452392,
 
                style: style_JalanProvinsi_10,
                popuplayertitle: 'Jalan Provinsi',
                interactive: false,
                title: '<img src="styles/legend/JalanProvinsi_10.png" /> Jalan Provinsi'
            });
var format_Jalan_11 = new ol.format.GeoJSON();
var features_Jalan_11 = format_Jalan_11.readFeatures(json_Jalan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_11.addFeatures(features_Jalan_11);
var lyr_Jalan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_11,
maxResolution:56.00893230452392,
 
                style: style_Jalan_11,
                popuplayertitle: 'Jalan',
                interactive: false,
                title: '<img src="styles/legend/Jalan_11.png" /> Jalan'
            });
var group_Point = new ol.layer.Group({
                                layers: [lyr_FasilitasKesehatan_4,lyr_Sekolah_5,lyr_SPBU_6,lyr_TempatIbadah_7,lyr_KantorPemerintahan_8,],
                                fold: 'open',
                                title: 'Point'});

lyr_GoogleSatelite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_KecamatanKalibagor_2.setVisible(true);lyr_Desa_3.setVisible(true);lyr_FasilitasKesehatan_4.setVisible(true);lyr_Sekolah_5.setVisible(true);lyr_SPBU_6.setVisible(true);lyr_TempatIbadah_7.setVisible(true);lyr_KantorPemerintahan_8.setVisible(true);lyr_SUNGAI_LN_25K_9.setVisible(true);lyr_JalanProvinsi_10.setVisible(true);lyr_Jalan_11.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_GoogleMaps_1,lyr_KecamatanKalibagor_2,lyr_Desa_3,group_Point,lyr_SUNGAI_LN_25K_9,lyr_JalanProvinsi_10,lyr_Jalan_11];
lyr_KecamatanKalibagor_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Desa_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_FasilitasKesehatan_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Sekolah_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_SPBU_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Alamat': 'Alamat', });
lyr_TempatIbadah_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_KantorPemerintahan_8.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_SUNGAI_LN_25K_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_JalanProvinsi_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_Jalan_11.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_KecamatanKalibagor_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Desa_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_FasilitasKesehatan_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_Sekolah_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_SPBU_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Alamat': 'TextEdit', });
lyr_TempatIbadah_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_KantorPemerintahan_8.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_SUNGAI_LN_25K_9.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_JalanProvinsi_10.set('fieldImages', {'id': '', 'Nama': '', });
lyr_Jalan_11.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_KecamatanKalibagor_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Desa_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_FasilitasKesehatan_4.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_Sekolah_5.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_SPBU_6.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', 'Alamat': 'no label', });
lyr_TempatIbadah_7.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_KantorPemerintahan_8.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', });
lyr_SUNGAI_LN_25K_9.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_JalanProvinsi_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_Jalan_11.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Jalan_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
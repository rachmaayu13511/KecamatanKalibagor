/* 
 * Leaflet Control Search v2.7.0 - 2016-09-13 
 * 
 * Copyright 2016 Stefano Cudini 
 * stefano.cudini@gmail.com 
 * http://labs.easyblog.it/ 
 * 
 * Licensed under the MIT license. 
 * 
 * Demo: 
 * http://labs.easyblog.it/maps/leaflet-search/ 
 * 
 * Source: 
 * git@github.com:stefanocudini/leaflet-search.git 
 * 
 */
var searchControl = new L.Control.Search({
    position: 'topright',
    collapsed: false, // Tambahkan ini
    propertyName: 'name',
    initial: false
});
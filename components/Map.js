import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('My Card was Declined!');

const Maap = () => {
  return (
    <MapboxGL.MapView style={{ flex: 1 }}>
      <MapboxGL.Camera
        zoomLevel={15}
        centerCoordinate={[33.931921, -6.893278]} // Ana f ISTA Temara
      />
      <MapboxGL.PointAnnotation
        id="pointAnnotatioExample"
        coordinate={[33.931921, -6.893278]} // ISTA TAMESNA
      />
    </MapboxGL.MapView>
  );
};

export default Maap;

import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { API_MAPBOX_ACCESS_TOKEN } from '../../api/consts';

mapboxgl.accessToken = API_MAPBOX_ACCESS_TOKEN;

export default class Map extends Component {
    componentDidMount() {
      this.map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/light-v8',
        center: [-74.0066, 40.7135], // starting position [lng, lat]
        zoom: 15 // starting zoom
      });
    }
  
    componentWillUnmount() {
      this.map.remove();
    }
  
    render() {
      const style = {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 'calc(100% - 80px)'
      };
  
      return <div style={style} ref={el => this.mapContainer = el} />;
    }
}
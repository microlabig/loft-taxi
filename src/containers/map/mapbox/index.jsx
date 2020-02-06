import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import { API_MAPBOX_ACCESS_TOKEN } from '../../../utils/consts';
import './styles.scss';

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
      return <div className='map' ref={el => this.mapContainer = el} />;
    }
}
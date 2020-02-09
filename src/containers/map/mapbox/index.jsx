import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import { getRoutes } from '../../../store/address';
import * as mapApi from "../../../utils/api/map";
import "./styles.scss";

mapboxgl.accessToken = mapApi.mapToken;

class Map extends Component {
  mapContainer = createRef();

  componentDidMount() {
    this.map = new mapboxgl.Map(mapApi.mapSetup(this.mapContainer));
  }

  componentDidUpdate(prevState, prevProps) {
    const { routesList: prevRoutesList } = prevState;
    if (prevRoutesList && prevRoutesList[0] !== this.props.routesList[0]) {
      mapApi.removeRoute(this.map);
      mapApi.drawRoute(this.map,  this.props.routesList);
    } 
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <div className="map" ref={el => (this.mapContainer = el)} />;
  }
}

const mapStateToProps = state => {
  return {
    routesList: getRoutes(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

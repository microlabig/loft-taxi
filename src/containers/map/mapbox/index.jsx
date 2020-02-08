import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import mapboxgl from "mapbox-gl";
import { API_MAPBOX_ACCESS_TOKEN } from "../../../utils/consts";
import { getRoutes, getAdressList } from '../../../store/address';
import * as mapApi from "../../../utils/api/map";
import "./styles.scss";

mapboxgl.accessToken = API_MAPBOX_ACCESS_TOKEN;

class Map extends Component {
  mapContainer = createRef();

  componentDidMount() {
    this.map = new mapboxgl.Map(mapApi.mapSetup(this.mapContainer));
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.routesList && prevState.routesList[0] !== this.props.routesList[0]) {
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
    routesList: getRoutes(state),
    addressList: getAdressList(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);

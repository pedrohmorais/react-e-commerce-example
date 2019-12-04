import React, { Component } from 'react';
import Helmet from 'react-helmet';
import ReactMapGL, { Marker } from 'react-map-gl';

import { StyledMap } from './styles';

import {
  number,
  arrayOf,
  shape,
  bool,
} from 'prop-types';

import { pointerSvg } from 'components/SvgIcons';

const propTypes = {
  markers: arrayOf(
    shape({
      lat: number,
      lng: number,
    }),
  ).isRequired,
  selectedLocation: shape({
    lat: number,
    lng: number,
  }),
  state: shape({
    lat: number,
    lng: number,
  }).isRequired,
  zoom: number,
  bigger: bool,
};

const defaultProps = {
  selectedLocation: undefined,
  zoom: 6,
  bigger: true,
};

class Map extends Component {
  constructor(props) {
    super();

    const { markers, state, zoom } = props;

    this.map = null;
    this.markers = [];
    this.popups = [];

    this.lat = markers[0].length <= 1 ? markers[0].position.lat : state.lat;
    this.lng = markers[0].length <= 1 ? markers[0].position.lng : state.lng;

    this.state = {
      viewport: {
        width: '100%',
        height: 400,
        latitude: this.lat,
        longitude: this.lng,
        zoom,
      },
    };
  }

  render() {
    const { viewport } = this.state;
    const { markers } = this.props;

    const renderMarkers = () => {
      this.markers = [];
      const markerEl = [];

      markers.forEach((marker, index) => {
        const { lat, lng } = marker;
        if (lat && lng) {
          const key = `marker-${index}`;
          markerEl.push(
            (
              <Marker key={key} latitude={lat} longitude={lng}>
                {pointerSvg}
              </Marker>
            ),
          );
        }
      });
      return markerEl;
    };

    const mapComponentProps = {
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
      mapboxApiAccessToken: 'pk.eyJ1IjoicGVkcm9oZW1vcmFpcyIsImEiOiJjanh5cjV0YjUwZGVzM2lvNzNzem1kY2ZvIn0.Wm0M80KtCOg_UanBYqJiow',
    };

    return (
      <StyledMap>
        <Helmet>
          <link href="https://api.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.css" rel="stylesheet" />
        </Helmet>
        <ReactMapGL
          {...mapComponentProps}
          {...viewport}
          onViewportChange={v => this.setState({ viewport: v })}
        >
          {renderMarkers(markers)}
        </ReactMapGL>
      </StyledMap>
    );
  }
}


Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

export default Map;

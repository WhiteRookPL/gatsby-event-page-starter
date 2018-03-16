import React from "react";
import { compose, withProps } from "recompose";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

import metadata from "../theme/metadata";
import theme from "../theme/main";
import { rhythm } from "../theme/typography";

const markerWithLabelWidthPx = 250;

const markerWithLabelStyle = {
  opacity: 0.7,
  width: `${markerWithLabelWidthPx}px`,

  fontFamily: theme.fonts.headerFontFamily,
  fontSize: `${rhythm(0.5)}`,
  fontWeight: 600,

  borderRadius: `5px`,
  border: `5px solid ${theme.colors.mayaBlue}`,

  backgroundColor: theme.colors.white,
  padding: `${rhythm(0.5)}`,
};

const googleMapWrapper = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${metadata.googleMapsKey}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
);

const PlainMapWithMarker = googleMapWrapper(({ location, name, onMarkerClick }) => {
  const markerWithLabelAnchor = new google.maps.Point(markerWithLabelWidthPx / 2, -10);
  const marker =
    <MarkerWithLabel
      position={location}
      labelAnchor={markerWithLabelAnchor}
      labelStyle={markerWithLabelStyle}
      onClick={onMarkerClick}>
      <div>{name}</div>
    </MarkerWithLabel>;

  const options = {
    fullscreenControl: false,
    clickableIcons: false,
    gestureHandling: `none`,
    mapTypeControl: false,
    streetViewControl: false,
  };

  return (
    <GoogleMap defaultZoom={16} defaultCenter={location} defaultOptions={options}>
      {marker}
    </GoogleMap>
  );
});

export class MapWithMarker extends React.Component {
  constructor (props) {
    super(props);

    this.handleMarkerClick = this.handleMarkerClick.bind(this);
  }

  handleMarkerClick () {
    window.open(this.props.link, `_blank`);
  }

  render () {
    return (
      <PlainMapWithMarker
        location={this.props.location}
        name={this.props.name}
        onMarkerClick={this.handleMarkerClick} />
    );
  }
}

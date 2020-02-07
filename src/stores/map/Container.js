import React from 'react';
import { 
  GoogleApiWrapper
} from 'google-maps-react';
import Map from './Map';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat: 42.2808, 
        lng: -83.7430
      },
    }
}

  updateLocation(coords) {
    this.setState({
      currentLocation: coords
    });
  }

  render() {
    if (!this.props.loaded) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div id="mapContainer">
        <Map google={this.props.google}
               currentLocation={this.state.currentLocation}
               updateLocation={this.updateLocation.bind(this)}>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(Container);


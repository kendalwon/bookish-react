import React from 'react';

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }

  componentDidMount() {
    this.getLocation();
    this.loadMap();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevProps.currentLocation !== this.props.currentLocation) {
      this.recenterMap();
      this.fetchBookstores();
    }
  }

  getLocation = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        let position = {
          lat: parseFloat(pos.coords.latitude),
          lng: parseFloat(pos.coords.longitude)
        };
        this.props.updateLocation(position);
      });
    }
  }

  loadMap = () => {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;
      const node = this.mapRef.current;
      let { zoom } = this.props;
      const { lat, lng } = this.props.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      this.map = new maps.Map(node, mapConfig);
    }
  }

  recenterMap = () => {
    const map = this.map;
    const current = this.props.currentLocation;
    const google = this.props.google;
    const maps = google.maps;
    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  fetchBookstores = () => {
    const map = this.mapRef;
    if (map) {
      const {google} = this.props;
      const service = new google.maps.places.PlacesService(this.map);
      const googleCoords = new google.maps.LatLng(this.props.currentLocation.lat, this.props.currentLocation.lng);
      const request = {
        location: googleCoords,
        radius: "15000",
        type: ["book_store"]
      }
      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.addMarkersFromPlaces(results);
      }})
    }
  }

  addMarkersFromPlaces = (places) => {
    const {google} = this.props;
    const map = this.mapRef;
    places.map(place => {
      let infowindow = new google.maps.InfoWindow({
        content: '<div><strong>' + place.name + '</strong><br>' +
        place.vicinity + '</div>',
        onClose: this.visibility = false,
        visibility: false
      });
      let marker = (
        new google.maps.Marker({
          position: place.geometry.location,
          title: place.name,
          map: this.map,
          infowindow: infowindow
        }));
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        })
        return marker;
    });
  }

  render() {
    return (
      <div id="mapContainer">
        <div id="map" ref={this.mapRef}>
            Loading map...
        </div>
      </div>
    );
  }
}

export default Map;

Map.defaultProps = {
  zoom: 11,
  initialCenter: {
    lat: 42.2808, 
    lng: -83.7430
  },
  centerAroundCurrentLocation: false,
  visible: true
};

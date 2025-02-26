import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 23.834030, // Example: New York
  lng: 78.746567,
};

// Fully Black & White (Grayscale) Map Style
const mapOptions = {
  styles: [
    { featureType: "all", stylers: [{ saturation: -100 }, { lightness: -10 }, { gamma: 1.2 }] },
    { featureType: "landscape", stylers: [{ color: "#000000" }] },
    { featureType: "road", stylers: [{ color: "#444444" }] },
    { featureType: "water", stylers: [{ color: "#222222" }] },
    { featureType: "poi", stylers: [{ color: "#000000" }] },
    { featureType: "all", elementType: "labels.text.fill", stylers: [{ color: "#ffffff" }] },
    { featureType: "all", elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] },
  ],
  disableDefaultUI: true, // Hide default controls
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey={"AIzaSyBuIFreRJkgwpo4IRaP_uBPDMCRl2nlxgI"}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} options={mapOptions} />
    </LoadScript>
  );
};

export default GoogleMapComponent;

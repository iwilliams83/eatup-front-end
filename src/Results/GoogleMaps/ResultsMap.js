import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import ResultMarker from './ResultMarker'

const ResultsMap = withScriptjs(withGoogleMap((props) => {

  const markers = props.results.map (result => <ResultMarker
  key={result.id}
  name={result.name}
  location={{lat: result.coordinates.latitude, lng: result.coordinates.longitude}}
/>);

  return (
    <GoogleMap
    defaultZoom={14}
    center={ { lat: props.results[9]['coordinates']['latitude'], lng: props.results[0]['coordinates']['longitude'] } }
    >
      {markers}
    </GoogleMap>
  )
}))

export default ResultsMap

import React from 'react';
import ResultsMap from './ResultsMap'

export default class DoctorsMapContainer extends React.Component {

  render(){
    return(
        <ResultsMap
          results={this.props.results}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBWT7T21BZM9IGMZOcF9Rp8R1MVRc3jptU&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: '100%'}} />}
          containerElement={<div style={{ height: '300px', width: '1400px'}} />}
          mapElement={<div style={{ height:'100%'}} />}
        />
    )
  }
}

import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

export default class ResultMarker extends React.Component {

  render(){
    return(
      <Marker
      position={this.props.location}
      >
        <InfoWindow>
        <span>{this.props.name}</span>
        </InfoWindow>
      </Marker>
    )
  }
}

import React from 'react';
import Map from './googlemap';
import {withScriptjs, withGoogleMap} from 'react-google-maps';
import './App.css';

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="App">
      <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyDm_cz0_nF9fBujYFL1sa1qB4dLP2FJ794'}
      loadingElement={<div style={{height:'100%'}}></div>}
      containerElement={<div style={{height:'100%'}}></div>}
      mapElement={<div style={{height:'100%'}}></div>}/>
    </div>
  );
}

export default App;

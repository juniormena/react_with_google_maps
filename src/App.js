import React from 'react';
import Map from './googlemap';
import {withScriptjs, withGoogleMap} from 'react-google-maps';
import './App.css';

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div className="App">
      <WrappedMap googleMapURL={'YOUR_APY_KEY_FROM_GOOGLE_MAPS'}
      loadingElement={<div style={{height:'100%'}}></div>}
      containerElement={<div style={{height:'100%'}}></div>}
      mapElement={<div style={{height:'100%'}}></div>}/>
    </div>
  );
}

export default App;

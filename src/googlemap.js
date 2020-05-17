import React from 'react';
import {GoogleMap,Marker,InfoWindow} from 'react-google-maps';
import * as parkData from './data/data.json';
import mapStyle from './mapStyle';
const Map = ()=>{
    const [selectedPark, setSelectedPark] = React.useState(null);
    return(
        <div>
        <GoogleMap 
        defaultZoom={13} 
        defaultCenter={{lat:45.421532, lng:-75.697189}}
        defaultOptions={{styles:mapStyle}}>
            {parkData.features.map((park)=>(
                <Marker key={park.properties.PARK_ID}
                position={{
                    lat:park.geometry.coordinates[1],
                    lng:park.geometry.coordinates[0]
                }}
                onClick={()=>setSelectedPark(park)}
                icon={{
                    url:"./logo192.png",
                    scaledSize: new window.google.maps.Size(25,25)
                }}/>
            ))}

            {selectedPark && (
                <InfoWindow
                position={{
                    lat:selectedPark.geometry.coordinates[1],
                    lng:selectedPark.geometry.coordinates[0]
                }}
                onCloseClick={()=>setSelectedPark(null)}>
                    <div>
                        <h2>{selectedPark.properties.NAME}</h2>
                        <p>{selectedPark.properties.DESCRIPTIO}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
        </div>
    )
}

export default Map;
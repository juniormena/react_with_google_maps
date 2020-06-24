/*
Este es el componente encargado de trabajar con google maps y su redenrizado
*/
import React from 'react';
import car from '../../assets/icons/map/car.png'
import { GoogleMap, LoadScriptNext,Marker,InfoWindow,MarkerClusterer } from '@react-google-maps/api';

const containerStyle = {
    height:'100%'
  };
  
  const center = {
    lat: 18.505,
    lng: -69.40
  };
  const options = {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
  };
  
class GoogleMapa extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedCar:false
        }
    }
    render(){
        const {selectedCar} = this.state;
        
    return(
        <LoadScriptNext
        googleMapsApiKey="AIzaSyDm_cz0_nF9fBujYFL1sa1qB4dLP2FJ794">
        <GoogleMap
        mapContainerStyle={containerStyle}
          center={center}
          zoom={10}>
            {this.props.clusterMap ? <MarkerClusterer  maxZoom={15}>
                {clusterer=><span>
            <Marker
                position={{
                    lat:18.505,
                    lng:-69.89
                }}
                onClick={()=>this.setState({selectedCar:true})}
                icon={{
                    url:car
                }}clusterer={clusterer}/>
                {selectedCar && (
                    <InfoWindow
                    position={{
                        lat:18.505,
                        lng:-69.89
                    }}
                    onCloseClick={()=>this.setState({selectedCar:false})}>
                        <div >
                            <p>I am a car</p>
                        </div>
                    </InfoWindow>
                )}
                <Marker
                position={{
                    lat:18.505,
                    lng:-69.87
                }}
                onClick={()=>this.setState({selectedCar:true})}
                icon={{
                    url:car
                }} clusterer={clusterer}/>
                <Marker
                position={{
                    lat:18.49,
                    lng:-69.87
                }}
                onClick={()=>this.setState({selectedCar:true})}
                icon={{
                    url:car
                }} clusterer={clusterer}/>
                </span>
                }
                </MarkerClusterer>
                :
                <div>
                <Marker
                position={{
                    lat:18.505,
                    lng:-69.89
                }}
                onClick={()=>this.setState({selectedCar:true})}
                icon={{
                    url:car
                }}/>
                <Marker
                position={{
                    lat:18.49,
                    lng:-69.87
                }}
                onClick={()=>this.setState({selectedCar:true})}
                icon={{
                    url:car
                }}/>
                <Marker
                position={{
                    lat:18.505,
                    lng:-69.87
                }}
                onClick={()=>this.setState({selectedCar:true})}
                icon={{
                    url:car
                }}/>
                {selectedCar && (
                    <InfoWindow
                    position={{
                        lat:18.505,
                        lng:-69.89
                    }}
                    onCloseClick={()=>this.setState({selectedCar:false})}>
                        <div >
                            <p>I am a car</p>
                        </div>
                    </InfoWindow>
                  )}
                  </div>
              }
        </GoogleMap>
        </LoadScriptNext>
    )
}
}

export default GoogleMapa;
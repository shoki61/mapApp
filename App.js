import React from 'react';
import {View,TextInput,Image,TouchableOpacity,Text,PermissionsAndroid} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import styles from './style'



class Map extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mapType:'standard',
      trafficInfo: false,
      mode:'WALKING',
      region: {
        latitude: 40.983879,
        longitude: 37.876411,
      },
      region1: {
        latitude: 41.00145,
        longitude:39.7178,
        
      }
    }
  }
  changeMapType=()=>{
    const type = this.state.mapType; 
    if(type === 'standard'){
      this.setState({mapType:'hybrid'})
    }else{
      this.setState({mapType:'standard'})
    }
  }
  changeTrafficInfo=()=>{
    this.setState({ trafficInfo : !this.state.trafficInfo })
  }
 
  render(){
      return(
        <View style={styles.container}>
          <MapView
            mapPadding={styles.locationButton}
            style={styles.mapContainer}
            mapType={this.state.mapType}
            showsMyLocationButton
			showsUserLocation
			zoomEnabled
			zoomControlEnabled
            showsTraffic={this.state.trafficInfo}
          >
            <MapViewDirections
              origin={this.state.region}
              destination={this.state.region1}
              apikey={'AIzaSyCs_G0OGN30lNt-E_K6BzVjEqznCGZx8bM'}
              strokeWidth={4}
			  strokeColor={'red'}
		      mode={this.state.mode}
            />
            <Marker
              title={'Başlık'}
              description={'Bu bir açıklama'}
              coordinate={ this.state.region }
              draggable
              icon={require('./images/pinIcon.png')}
            />
            
            
          </MapView>

          <View style={styles.inputContainer}>
            <TextInput placeholder='search...' style={styles.inputStyle}></TextInput>
          </View>

          <View style={styles.carContainer}>
            <TouchableOpacity onPress={()=>this.changeTrafficInfo()}>
              {this.state.trafficInfo === true ? (<Image style={styles.iconStyle} source={require('./images/carActiveIcon.png')}/>):
                (<Image style={styles.iconStyle} source={require('./images/carIcon.png')}/>)
              }
            </TouchableOpacity>
          </View>
            
         
          

          <TouchableOpacity  onPress={()=>this.changeMapType()} style={styles.mapTypeButton}>
            {this.state.mapType === 'standard' && <Image source={require('./images/hybrid.png')} style={styles.mapTypeIcon}/>}
            {this.state.mapType === 'hybrid' && <Image source={require('./images/satellite.png')} style={styles.mapTypeIcon}/>}
            <Text style={styles.mapTypeText}>click to change</Text>
          </TouchableOpacity>
          
          
        </View>
    );
  }
}

export default Map;

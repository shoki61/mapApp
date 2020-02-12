import React from 'react';
import {View,TextInput,Image,TouchableOpacity,Text,PermissionsAndroid} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './style'



class Map extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mapType:'standard',
      trafficInfo: false,
      region: {
        latitude: 56,
        longitude: 56,
        latitudeDelta:56,
        longitudeDelta: 56,
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
            followsUserLocation
            showsUserLocation
            showsTraffic={this.state.trafficInfo}
            zoomControlEnabled
            provider={PROVIDER_GOOGLE}
          >
            <Marker
              coordinate={ this.state.region }
              draggable
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
         
          
          

          <TouchableOpacity onPress={()=>this.changeMapType()} style={styles.mapTypeButton}>
            {this.state.mapType === 'standard' && <Image source={require('./images/hybrid.png')} style={styles.mapTypeIcon}/>}
            {this.state.mapType === 'hybrid' && <Image source={require('./images/satellite.png')} style={styles.mapTypeIcon}/>}
            <Text style={styles.mapTypeText}>click to change</Text>
          </TouchableOpacity>
          
          
        </View>
    );
  }
}

export default Map;

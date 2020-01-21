import React from 'react';
import {View,TextInput,Image,TouchableOpacity,Button} from 'react-native';
import MapView, { Marker} from 'react-native-maps';
import styles from './style'



class Map extends React.Component{
  constructor(props){
    super(props);
    this.state = {mapType:'standard'}
  }
  changeMapType=()=>{
    const type = this.state.mapType; 
    if(type === 'standard'){
      this.setState({mapType:'hybrid'})
    }else{
      this.setState({mapType:'standard'})
    }
  }
  render(){
      return(
        <View style={styles.container}>
          <MapView
            style={styles.mapContainer}
            mapType={this.state.mapType}
            showsUserLocation={true}
            region={{
              latitude:	41.00145,
              longitude:39.7178,
              latitudeDelta:41.00145,
              longitudeDelta:39.7178,
            }}
          >
            <Marker
              title='Bu bir başlık'
              description='Burasıda bir açıklama'
              coordinate={{
                latitude:41.00145,
                longitude:39.7178
              }}
              draggable={true}
            >
              <Image style={styles.markerIcon} source={require('./images/markerIcon.png')}/>
            </Marker>
          </MapView>

          <View style={styles.inputContainer}>
            <TextInput placeholder='search...' style={styles.inputStyle}></TextInput>
          </View>

          <TouchableOpacity onPress={()=>this.changeMapType()} style={styles.mapTypeButton}>
            {this.state.mapType === 'standard' && <Image source={require('./images/hybrid.png')} style={styles.mapTypeImg}/>}
            {this.state.mapType === 'hybrid' && <Image source={require('./images/satellite.png')} style={styles.mapTypeImg}/>}
          </TouchableOpacity>
          
          
        </View>
    );
  }
}

export default Map;

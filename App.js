import React from 'react';
import {View,TextInput,Image,TouchableOpacity,Text} from 'react-native';
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
  changeMode=()=>{
    if(this.state.mode === 'WALKING') this.setState({ mode : 'BICYCLING' })
    else if (this.state.mode === 'BICYCLING') this.setState({ mode : 'DRIVING' })
    else if (this.state.mode === 'DRIVING') this.setState({ mode : 'TRANSIT' })
    else this.setState({ mode : 'WALKING' })
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
              apikey={'APIKEY'}
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
              {this.state.trafficInfo === true ? 
                (<Image style={styles.iconStyle} source={require('./images/carActiveIcon.png')}/>) :
                (<Image style={styles.iconStyle} source={require('./images/carIcon.png')}/>)
              }
            </TouchableOpacity>
          </View>

          <View style={styles.modeContainer}>
            <TouchableOpacity onPress={()=>this.changeMode()}>
              {this.state.mode === 'WALKING'   && <Image style={styles.iconStyle} source={require('./images/walkingIcon.png')}/>}
              {this.state.mode === 'BICYCLING' && <Image style={styles.iconStyle} source={require('./images/bicyclingIcon.png')}/>}
              {this.state.mode === 'DRIVING'   && <Image style={styles.iconStyle} source={require('./images/drivingIcon.png')}/>}
              {this.state.mode === 'TRANSIT'   && <Image style={styles.iconStyle} source={require('./images/transitIcon.png')}/>}
            </TouchableOpacity>
          </View>
            
          
          

          <TouchableOpacity  onPress={()=>this.changeMapType()} style={styles.mapTypeButton}>
            {this.state.mapType === 'standard' ? 
               (<Image source={require('./images/hybrid.png')} style={styles.mapTypeIcon}/>) :
               (<Image source={require('./images/standard.png')} style={styles.mapTypeIcon}/>)
            }
            <Text style={styles.mapTypeText}>click to change</Text>
          </TouchableOpacity>
          
          
        </View>
    );
  }
}

export default Map;

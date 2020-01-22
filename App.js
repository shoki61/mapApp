import React from 'react';
import {View,TextInput,Image,TouchableOpacity,Slider,Text} from 'react-native';
import MapView, { Marker} from 'react-native-maps';
import styles from './style'



class Map extends React.Component{
  constructor(props){
    super(props);
    this.state = {mapType:'standard',zoom:3}//neden zoom:3 //açıklama 41. satırda
  }
  changeMapType=()=>{
    const type = this.state.mapType; 
    if(type === 'standard'){
      this.setState({mapType:'hybrid'})
    }else{
      this.setState({mapType:'standard'})
    }
  }
  changeZoomVaue(value){
    this.setState({
      zoom:parseInt(value)
    })
  }
  render(){
      return(
        <View style={styles.container}>
          <MapView
            mapPadding={styles.locationButton}
            style={styles.mapContainer}
            mapType={this.state.mapType}
            region={{
              latitude: 41.00145,
              longitude:39.7178,
              latitudeDelta:41.00145,
              longitudeDelta:39.7178,
            }}
            showsMyLocationButton={true}
            followsUserLocation={true}
            showsUserLocation={true}
            minZoomLevel={this.state.zoom}//zoom propsları 0 ile 20 arasında değer alır ama minZoomLevel'in değeri 3 olduktan sonra haritayı yaklaştırmaya başlıyor o yüzden ilk değeri 0 değil 3... Bu yüzden state'in içindeki zoom değişkeninin değeri 3 //11. satırda

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
         
          <Slider
            style={styles.sliderStyle}
            minimumValue={3}
            maximumValue={17}
            minimumTrackTintColor="green"
            maximumTrackTintColor="grey"
            thumbTintColor='green'
            onValueChange={this.changeZoomVaue.bind(this)}
          />
          

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

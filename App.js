import React from 'react';
import {View,Text} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import still from './style'



class Map extends React.Component{
  constructor(props){
    super(props);
    this.state = {mapType:'hybrid'}
  }
  render(){
      return(
        <View style={still.container}>
          <MapView
            region={{
              latitude:27,
              longitude:27,
              latitudeDelta:30,
              longitudeDelta:30
            }}
            mapType={this.state.mapType}
          >
            <Marker
              coordinate={{
                latitude:27,
                longitude:27
              }}
              title={'Buradayım'}
              description={'Burası bir bölge'}
            />
          </MapView>
        </View>
    );
  }
}

export default Map;

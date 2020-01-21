import {StyleSheet} from 'react-native';


export default StyleSheet.create({
    container:{
        flex: 1,
    },
    mapContainer:{
        ...StyleSheet.absoluteFillObject,
    },
    mapTypeButton:{
        position:'absolute',
        height:64,
        width:64,
        bottom:15,
        right:15,
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#e2e3d8'
    },
    mapTypeImg:{
        width:65,
        height:65
    },
    markerIcon:{
        width:40,
        height:40
    }

});

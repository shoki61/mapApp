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
    },
    inputContainer:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    inputStyle:{
        width:'90%',
        borderWidth:1,
        borderColor:'lightgrey',
        backgroundColor:'#f2f2f2',
        color:'green',
        top:20,
        borderRadius:5,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5,
        fontSize:15
    },
});

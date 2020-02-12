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
        bottom:15,
        right:15,
        alignItems:'center'
    },
    mapTypeIcon:{
        width:50,
        height:50
    },
    mapTypeText:{
        fontSize:14,
        color:'#575757',
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
    locationButton:{
       top:80,
       right:15,
       bottom:80
    },
    iconStyle:{
        width:45,
        height:45
    },
    carContainer:{
        position:'absolute',
        bottom:20,
        left:20
    },
    fullMapContainer:{
        position:'absolute',
        bottom:70,
        left:20
    }

});

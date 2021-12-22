import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    root:{
        flexDirection:'row',
        /* width:'90%' , */
        justifyContent:'space-between',
        /* backgroundColor:'red', */
        alignItems:'center',
        height:60,
        marginVertical:5,
        borderRadius:15,
        padding:10,
        paddingRight:20,
        borderWidth:2,
        borderColor:'#f7f5b7',
        
    },
    image:{
        height:50,
        width:50,
        marginRight:10,
    },
    left:{
        flexDirection:'row',
        padding:10,
        
    },
    textlabel:{
        paddingTop:5,
    },
    name:{
        fontWeight:'bold',
        paddingBottom:2,
        
    },
     symbol:{
        color:'#6f6f2f',
     
        /*
        backgroundColor:'#0f0f0f',
        color:'white',
        */
    }, 
    prices:{
        alignItems:'flex-end'
    },
    value:{
        fontWeight:'bold',
        fontSize:16,
        
    },
});

export default styles;
import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    root:{
        padding: 10,
        flex:1,
        alignItems:"center",
        
        backgroundColor:'white',
    },
    maxwidth:{
        padding: 10,
        flex:1,
        alignItems:"center",
        
        backgroundColor:'white',
    },
    image:{
        //height:'45%',
        marginTop:150,
        height:130,
        width:'100%',
        aspectRatio:2.5,
        resizeMode:'cover',
        
    },
    signin:{
        //height:'45%',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        marginTop:'auto',
        marginBottom:'auto',
        height:60,
        width:300,
        /* width:200, */
        
        resizeMode:'contain',
        borderRadius:0,
    },
    header1:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:80,
        textAlign:'center',

        marginBottom:5,
    },
    header2:{
        fontSize:16,
        textAlign:'center',
        color:"#707070",

    }



}); 

export default styles;
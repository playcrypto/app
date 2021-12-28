import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    root:{
        padding: 10,
        flex:1,
        alignItems:"center",
        
        backgroundColor:'white',
    },
    maxwidth:{
        maxWidth:500,
    },
    image:{
        //height:'45%',
        height:150,
        width:'100%',
        aspectRatio:2.5,
        resizeMode:'cover',
        
    },
    header1:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:20,
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
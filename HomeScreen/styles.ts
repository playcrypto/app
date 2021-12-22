import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    root:{
        padding: 10,
        alignItems:"center",
        flex:1,
        backgroundColor:'white',
    },
    image:{
        //height:'45%',
        height:180,
        width:'80%',
        aspectRatio:2,
        resizeMode:'repeat',
        
    },
    header1:{
        fontSize:24,
        fontWeight:'bold',
        marginTop:20,
        marginBottom:5,
    },
    header2:{
        fontSize:16,
        textAlign:'center',
        color:"#707070",

    }



}); 

export default styles;
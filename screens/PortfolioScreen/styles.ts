import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    root:{
        padding:10,
        flex:1,
        alignItems:'center',
        backgroundColor:'white',
    },
    image:{
        //height:'45%',
        height:165,
        width:'100%',
        aspectRatio:2,
        resizeMode:'cover',
    },
    balanceContainer:{
        margin:10,
        width:'90%',
        marginVertical:20,
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'#eff1ff',
        alignItems:'center',
        borderRadius:20,

    },
    label:{
        fontSize:20,
        fontWeight:"bold",
        color:'#121777',
    },
    balance:{
        fontSize:30,
        fontWeight:"bold",
        color:'#000',
    },
    coins:{
        width:'90%',
        maxWidth:400,
    }
});

export default styles;
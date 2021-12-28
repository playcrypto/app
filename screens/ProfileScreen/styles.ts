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
        height:150,
        
        aspectRatio:1,
        
        justifyContent:'center',
        alignItems:'center',
    },
    userimage:{
        height:80   ,
        borderRadius:50,
        borderColor:'black',
        borderWidth:1,
        aspectRatio:1,
        marginRight:20,
        justifyContent:'center',
        alignItems:'center',
    },
    userContainer:{
        margin:10,
        padding:10,
        width:'100%',
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
    button:{
        margin:10,
        padding:10,
        paddingRight:20,
        paddingLeft:20,
        marginVertical:20,
        
        fontSize:15,
        fontWeight:"bold",
        color:'#100700',
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'#fff000',
        alignItems:'center',
        borderRadius:50,
    },
    balance:{
        fontSize:30,
        fontWeight:"bold",
        color:'#000',
    },
    coins:{
        width:'90%',
        maxWidth:400,
    },
    left:{
        flexDirection:'row',
        padding:10,
        
    },
    place:{
        flexDirection:'row',
        width:40,
        height:40,
        textAlign:'center',
        paddingTop:2,
        fontSize:15,
        fontWeight:'bold',
        color:'black',
        backgroundColor:'#FFc000',
        borderRadius:50,
        
    },
    textlabel:{
        paddingTop:10,
    },
    name:{
        fontWeight:'bold',
        fontSize:20,
        paddingBottom:2,
        
    },
    email:{
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
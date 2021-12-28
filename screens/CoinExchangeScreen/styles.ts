import { StyleSheet } from "react-native";

const styles=StyleSheet.create({

    root:{
        padding: 10,
        flex:1,
        alignItems:"center",
        /* justifyContent:'center', */
        backgroundColor:'white',
        textAlign:"center", 
    },
    maxwidth:{
        maxWidth:600,
    },

    title:{
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        padding: 10,
        textAlign:"center",
        fontWeight:'bold',
        color:'rgb(13, 13, 73);',
        /* justifyContent:'center', */
        backgroundColor:'rgba(157, 157, 228, 0.801)',
        fontSize:24,
        borderRadius:15,
        marginBottom:20,
            
    },
    subtitle:{
        padding:7,
        textAlign:"center",
        fontWeight:'bold',
        color:'rgba(13, 3, 73,0.8);',
        /* justifyContent:'center', */
        
        fontSize:20,
        textDecorationLine:'underline',
        
        
        /* borderRadius:15, */
    },
    color:{
        backgroundColor:'rgba(157, 100, 228, 0.51)',
        margin:10,
        borderRadius:15,
    },
    subtitle2:{
        paddingBottom: 8,
        textAlign:"center",
        fontWeight:'bold',
        color:'rgb(13, 13, 73);',
        /* justifyContent:'center', */
        
        fontSize:15,
        
        /* margin:20, */
    },
    image:{
        //height:'45%',
        height:185,
        width:'100%',
        aspectRatio:2,
        resizeMode:'cover',
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        /* borderWidth:1,
        borderColor:'#b1b1b1', */
        padding:10,
        flex:1,
        /* marginRight:20,
        marginLeft:20, */
        margin:10,
        marginBottom:0,
        

    },
    input:{
        borderColor:'grey',
        borderWidth:1,
        textAlign:'center',
        minWidth:125,
        minHeight:30,
        fontSize:18,
        backgroundColor:'#f7f7f7',
        padding:2,
        fontWeight:'bold',
        
    },
    end:{
        alignItems:'flex-end',
        paddingRight:15,
    },
    containercolumn:{
        margin:0,
        flexDirection:'column',
        justifyContent:'space-around',
        
    },
    containerrow:{
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    button:{
        
        alignItems:'center',
        borderRadius:12,
        padding:10, 
        marginTop:190,
        backgroundColor:'#461bf2',
    },
    buttontext:{
        color:'white',
        fontSize:30,
        fontWeight:'bold'
    }

});

export default styles;
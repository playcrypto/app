import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',  
        padding:10,
        backgroundColor:'white',
        
    },

    topContainer:{
        maxWidth:400,
        flexDirection:'row',
        /* width:'90%' , */
        justifyContent:'space-between',
        /* backgroundColor:'red', */
        alignItems:'center',
        height:60,
        marginVertical:5,
        
        
        width:'100%',
        
    },
    label:{
        
        color:'#121777',
        backgroundColor:'#feefff',
        paddingLeft:10,
        paddingRight:10,
        justifyContent:'center',
        textAlign:'center',
        borderRadius:15,
        marginBottom:8,
        
    },
    label2:{
        color:'#121777',
        backgroundColor:'#feefff',
        paddingLeft:20,
        paddingRight:20,
        justifyContent:'center',
        textAlign:'center',
        borderRadius:15,
        fontWeight:'bold',
        
        
    },
    label3:{
        fontSize:20,
        fontWeight:"bold",
        color:'#121777',
        backgroundColor:'#feefff',
        padding:3,
        margin:10,
        borderColor:'black',
        borderWidth:2,
        alignItems:"center",
        justifyContent:'center',
        textAlign:'center',
        borderRadius:50,
        width:180,
        
    },
    image:{
        height:50,
        width:50,
        marginRight:10,
        borderRadius:50,
    },
    left:{
        flexDirection:'row',
        padding:10,
        
    },
    textlabel:{
        paddingTop:1,
    },
    name:{
        fontWeight:'bold',
        paddingBottom:2,
        fontSize:20,
        
    },
     symbol:{
        color:'#6f6f2f',
     
        /*
        backgroundColor:'#0f0f0f',
        color:'white',
        */
    }, 
    prices:{
        alignItems:'flex-end',
        padding:10,
    },
    value:{
        fontWeight:'bold',
        fontSize:18  ,
        marginTop:5,
        textAlign:'center' 
    },
    row:{
        maxWidth:400,
        flexDirection:'row',
        width:'96%',
        justifyContent:'space-between',
        alignItems:'center',
        alignContent:'center',
    },  
    row2:{
        flexDirection:'row',
        width:'96%',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        maxWidth:400,
    }, 
    row3:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-around',
        alignItems:'center',
        alignContent:'center',
        maxWidth:400,
    },   
    valueContainer:{
        alignItems:'center',
        backgroundColor:'white',
        maxWidth:400,
    },
    button:{
        /* width:'50%',
        padding:15,
        marginBottom:'auto',
        textAlign:"center",
        alignContent:'center',
        alignItems:'center',
         */
        flex:1,
        alignItems:'center',
        padding:10,
        margin:5,
        borderRadius:15, 
        /* fontWeight:'bold',
        fontSize:25,
        color:'white', */
    },
    buttontext:{
        fontWeight:'bold',
        fontSize:25,
        color:'white',
    },
    graph:{
        maxWidth:400,
        width:400,
        backgroundColor:'yellow'
    }
});

export default styles;
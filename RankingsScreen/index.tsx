import  React  from 'react';
import { View,Text,Image, FlatList } from "react-native";
import styles  from "./styles";
const image = require("../../../assets/images/ranklistscreen2.png");
const icon = require("../../../assets/images/user.png");

import UserRankingItem from "../../components/UserRankingItem";

const users=[{
    id : '1',
    name:'User1',
    image:'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png',
    netWorth:15021.45,
},
{
    id : '2',
    name:'User2',
    image:'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png',
    netWorth:10456.45,
},
{
    id : '3',
    name:'User3',
    image:'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png',
    netWorth:8456.45,

},
{
    id : '4',
    name:'User4',
    image:'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png',
    netWorth:2511.1,
},


{
    id : '5',
    name:'User5',
    image:'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png',
    netWorth:1026.45,
},
]

const UserRanking   = () => {
    return(
        <View style={styles.root}>
            
            <FlatList style={styles.coins} data={users} 
            renderItem={({item,index})=><UserRankingItem user={item} place={index+1}/>}
            showsVerticalScrollIndicator={false}
            ListHeaderComponentStyle={{alignItems:'center'}}
            ListHeaderComponent={()=>(
                <>
                    <Image style={styles.image} source={image}/>
                    
                        <Text style={styles.label}>Rankings</Text>
                        
                    
                </>
            )}
            />
        </View>

    );
};

export default UserRanking;
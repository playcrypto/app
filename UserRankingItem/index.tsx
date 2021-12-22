import React from 'react';
import  {View,Text, Image} from 'react-native';
import styles from './styles';


export interface UserRankingItemProps{
    user:{
        image:string,
        name: string,
        netWorth:number,
    },
    place:number,
}

const UserRankingItem= (props: UserRankingItemProps) =>{
    const{
    user:{

            image,
            name,
            netWorth,
        },
        place
    }=props;
    return (
        <View style={styles.root}>
            {/* <Text>test portfolio coin</Text> */}
            <View style={styles.left}>
                <Text style={styles.place}>{place}</Text>
                <Image style={styles.image} source={{uri:image}}></Image>
                <View style={styles.textlabel}>
                    <Text style={styles.name}>
                        {name}
                    </Text>
                    <Text style={styles.symbol}>
                        
                    </Text>
                </View>
            </View>
            <View style={styles.prices}>
                <Text style={styles.value}>
                    &#8377;{netWorth.toFixed(2)}       
                </Text>
                
            </View>
            
        </View>
    );
};

export default UserRankingItem;
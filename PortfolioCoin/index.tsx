import { useNavigation } from '@react-navigation/native';
import React from 'react';
import  {View,Text, Image, Pressable} from 'react-native';
import styles from './styles';


export interface PortfolioCoinProps{
    portfolioCoin:{
        id:string,
        image:string,
        name: string,
        symbol:string,
        amount:number,
        valueINR:number,
    }
}

const PortfolioCoin= (props: PortfolioCoinProps) =>{
    const{
    portfolioCoin:{
            id,
            image,
            name,
            symbol,
            amount,
            valueINR,
        }
    }=props;
    const navigation=useNavigation();

    return (
        <Pressable style={styles.root} onPress={()=>navigation.navigate('CoinDetails',{id})}>
              {/* <Text>test portfolio coin</Text> */}
            <View style={styles.left}>
                <Image style={styles.image} source={{uri:image}}></Image>
                <View style={styles.textlabel}>
                    <Text style={styles.name}>
                        {name}
                    </Text>
                    <Text style={styles.symbol}>
                        {symbol}
                    </Text>
                </View>
            </View>
            <View style={styles.prices}>
                <Text style={styles.value}>
                    &#8377;{valueINR.toFixed(2)}       
                </Text>
                <Text style={styles.symbol}>
                    {symbol} {amount}
                </Text>
            </View>
            
        </Pressable>
    );
};

export default PortfolioCoin;
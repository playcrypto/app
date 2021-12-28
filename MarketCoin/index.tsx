import React from 'react';
import  {View,Text, Image, Pressable} from 'react-native';
import styles from './styles';
import PercentageChange from '../PercentageChange';
import { useNavigation } from '@react-navigation/native'; 

export interface MarketCoinProps{
    marketCoin:{
        id:string,
        image:string,
        name: string,
        symbol:string,
        valueChange24H:number,
        currentPrice:number,
    }
}

const MarketCoin= (props: MarketCoinProps) =>{
    const{
    marketCoin:{
            id,
            image,
            name,
            symbol,
            valueChange24H,
            currentPrice,
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
                    &#8377;{currentPrice.toFixed(2)}       
                </Text>
                <PercentageChange valueChange24H={valueChange24H}/>
                {/* <Text style={{color:valuechange24h>0? 'green' : 'red'}}>
                    {valuechange24h>0 && '+'}{valuechange24h}%
                </Text> */}
            </View>
            
        </Pressable>
    );
};

export default MarketCoin;
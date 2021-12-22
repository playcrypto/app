import React from 'react';
import  {View,Text, Image} from 'react-native';
import styles from './styles';


export interface MarketCoinProps{
    marketCoin:{
        image:string,
        name: string,
        symbol:string,
        valuechange24h:number,
        valueINR:number,
    }
}

const MarketCoin= (props: MarketCoinProps) =>{
    const{
    marketCoin:{

            image,
            name,
            symbol,
            valuechange24h,
            valueINR,
        }
    }=props;
    return (
        <View style={styles.root}>
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
                    &#8377;{valueINR}       
                </Text>
                <Text style={{color:valuechange24h>0? 'green' : 'red'}}>
                    {valuechange24h>0 && '+'}{valuechange24h}%
                </Text>
            </View>
            
        </View>
    );
};

export default MarketCoin;
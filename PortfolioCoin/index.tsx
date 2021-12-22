import React from 'react';
import  {View,Text, Image} from 'react-native';
import styles from './styles';


export interface PortfolioCoinProps{
    portfolioCoin:{
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

            image,
            name,
            symbol,
            amount,
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
                <Text style={styles.symbol}>
                    {symbol} {amount}
                </Text>
            </View>
            
        </View>
    );
};

export default PortfolioCoin;
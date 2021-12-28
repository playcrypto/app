import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { View,Text, Image, TextInput, Pressable, Alert } from "react-native";
import styles from "./styles";

import {API,graphqlOperation} from 'aws-amplify';
import {exchangeCoins} from  '../../graphql/mutations'
import AppContext from "../../utils/AppContext";

const image=require('../../../assets/images/buy-sell.png')

/* interface CoinExchangeProps{
    isBuy:boolean,
    coinData:object,
}  */

const INR_COIN_ID = 'inr';

const CoinExchangeScreen=(/* props:CoinExchangeProps */)=>{

    /* isBuy:Object; */

    const [coinAmount,setCoinAmount]=useState('')
    const [coinINRValue,setCoinINRValue]=useState('')
    const [inrPortfolioCoin, setInrPortfolioCoin] = useState(null);
    const maxINR=1000000;
    const minINR=100;

    
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const { userId } = useContext(AppContext);
    const route=useRoute();

    const isBuy = route?.params?.isBuy;
    const coinData=route?.params?.coinData;
    const portfolioCoin=route?.params?.portfolioCoin;

    

    useEffect(() => {
        const amount=parseFloat(coinAmount)
        if(coinAmount.length-coinAmount.indexOf('.')>9 
        || coinAmount.indexOf('..')>-1 
        || coinAmount.indexOf(',')>-1 
        || coinAmount.indexOf(' ')>-1
        || coinAmount.indexOf('-')>-1
        ||coinAmount.split(".").length - 1>1){
            setCoinAmount(coinAmount.slice(0, coinAmount.length - 1));
        }
        if(!amount && amount!=0 
            || amount===NaN  
            
            ){
            setCoinAmount('');
            setCoinINRValue('');
            return;
        }
        setCoinINRValue((amount*coinData?.currentPrice).toFixed(0).toString());
        /* return () => {
            cleanup
        } */
    }, [coinAmount]);

    useEffect(() => {
        const amount=parseFloat(coinINRValue)
        if(coinINRValue.indexOf('..')>-1 
        || coinINRValue.indexOf(',')>-1 
        || coinINRValue.indexOf(' ')>-1
        || coinINRValue.indexOf('-')>-1
        ||coinINRValue.split(".").length - 1>0){
            setCoinINRValue(coinINRValue.slice(0, coinINRValue.length - 1));
        }
        if(!amount && amount!=0 
            || amount===NaN  
            /* || coinINRValue.indexOf('..')>-1 
            || coinINRValue.indexOf(',')>-1 
            || coinINRValue.indexOf(' ')>-1
            || coinINRValue.indexOf('-')>-1 */

            ){
            /* (async () => { 
                // Do something before delay
                console.warn('before delay')
        
                await delay(1000);
        
                // Do something after
                console.warn('after delay')
            })(); */
            setCoinINRValue('');
            setCoinAmount('');
            
            return;
        }
        if(amount>10000000){
            setCoinINRValue('10000000');
            return;
        }
        /* (async () => { 
            // Do something before delay
            console.log('before delay')
    
            await delay(5000);
    
            // Do something after
            console.log('after delay')
        })(); */
        setCoinAmount((amount/coinData?.currentPrice).toFixed(8).toString());
        /* return () => {
            cleanup
        } */
    }, [coinINRValue]);

    const placeOrder = async () => {
        if (isLoading) {
          return;
        }
        setIsLoading(true);
        try {
          const variables = {
            coinId: coinData.id,
            isBuy,
            amount: parseFloat(coinAmount),
            inrPortfolioCoinId: inrPortfolioCoin?.id,
            coinPortfolioCoinId: portfolioCoin?.id,
          }
    
          const response = await API.graphql(
            graphqlOperation(exchangeCoins, variables)
          )
          if (response.data.exchangeCoins) {
            navigation.navigate('Portfolio');
          } else {
            Alert.alert('Error', 'There was an error exchanging coins');
          }
        } catch (e) {
          Alert.alert('Error', 'There was an error exchanging coins');
          console.error(e);
        }
        setIsLoading(false);
      }

    const onPlaceOrder = async () => {
        
        if(isBuy && parseFloat(coinINRValue)>maxINR){
            Alert.alert('Error',`More than given limit INR coins. Max : ${maxINR}`);
            return;
        }
        if(isBuy && parseFloat(coinINRValue)<minINR){
            Alert.alert('Error',`Not enough INR coins. Min : ${minINR}`);

            return;
        }
        if((coinINRValue)===''){
            Alert.alert('Error',`INR cannot be 0`);

            return;
        }


        if(!isBuy &&(!portfolioCoin || parseFloat(coinAmount)>portfolioCoin.amount)){
            Alert.alert('Error',`Not enough ${coinData.symbol} coins. Max : ${coinData.amount || 0} ${coinData.symbol} `);
            return;
        }
        
        console.warn("placed order");
        await placeOrder(); 
    }




    return(
        <View style={styles.root}>
            <View style={styles.maxwidth}>
                <Text style={styles.title}>
                    {isBuy?'Buy':'Sell'} {coinData?.name}
                </Text>
                <Image style={styles.image} source={image}/>
                
                <View style={styles.containerrow}>
                    <View style={styles.inputContainer}> 
                        <TextInput keyboardType="decimal-pad" 
                            placeholder="0" 
                            style={{padding:10,fontSize:20,minWidth:50,textAlign:'center',backgroundColor:'#fff',}} 
                            value={coinAmount}
                            onChangeText={/* (value:string)=> */setCoinAmount/* (value) */}
                        >

                        </TextInput>
                        <Text style={{paddingLeft:15,paddingTop:10,fontSize:20,fontWeight:'bold'}}>{coinData?.symbol}</Text>
                    </View>
                    <Text style={{fontSize:24,paddingTop:10}}>= &#8377;</Text>
                    <View style={styles.containercolumn}>
                        <View style={styles.inputContainer}> 
                            
                            <TextInput 
                                keyboardType="decimal-pad" 
                                placeholder="0" 
                                value={coinINRValue}
                                onChangeText={setCoinINRValue}
                                style={styles.input}
                            >
                                
                            </TextInput>
                            
                            
                        </View>
                        
                    </View>
                    
                </View>
                <View style={styles.end}>
                    <Text >Min = &#8377;0 , Max = &#8377;1,00,00,000</Text>
                </View>
                <View style={styles.color}>
                    <Text style={styles.subtitle}>
                        Current Price
                    </Text>
                    <Text style={styles.subtitle2}>
                        1 {coinData?.symbol} = &#8377; {coinData?.currentPrice.toFixed(2)}
                    </Text>
                </View>
                <View style={{marginTop:'auto'}}>
                    <Pressable style={styles.button} onPress={onPlaceOrder}>
                        <Text style={styles.buttontext}>Place Order</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default CoinExchangeScreen;

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
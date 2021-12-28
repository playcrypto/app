import  React, { useState,useEffect }  from 'react';
import { View,Text,Image, FlatList } from "react-native";
import styles  from "./styles";
import { API, graphqlOperation } from 'aws-amplify';
const image = require("../../../assets/images/market.jpg");
import MarketCoin from "../../components/MarketCoin";
import { listCoins } from '../../graphql/queries'

/* const marketCoins=[{
    id : '1',
    name:'Virtual Rupees',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'INR',
    valuechange24h:1.8,
    valueINR:1521.45,
},
{
    id : '2',
    name:'Bitcoin',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    valuechange24h:1.5,
    valueINR:1456.45,
},
{
    id : '3',
    name:'Bitcoin',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    valuechange24h:2.5,
    valueINR:1456.45,
},
{
    id : '4',
    name:'Bitcoin',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    valuechange24h:-1.2,
    valueINR:1456.45,
},
{
    id : '5',
    name:'Bitcoin',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    valuechange24h: 6.1,
    valueINR:1456.45,
},
{
    id : '6',
    name:'Bitcoin',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    valuechange24h:-5.1,
    valueINR:1456.45,
},
{
    id : '7',
    name:'Bitcoin',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    valuechange24h:4.1,
    valueINR:1456.45,
},
{
    id : '8',
    name:'Bitcoin',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    valuechange24h:-5.6,
    valueINR:1456.45,
},

{
    id : '9',
    name:'Ethereum',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'ETH',
    valuechange24h:1.5,
    valueINR:1026.4546,
},
] */

const MarketScreen   = () => {
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)

    

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await API.graphql(graphqlOperation(listCoins));
      setCoins(response.data.listCoins.items);
    } catch (e) {
      console.error(e); 
    } 
    setLoading(false);
    
  }

  useEffect(() => {
    fetchCoins();
  }, [])

    return(
        <View style={styles.root}>
            
            <FlatList style={styles.coins} data={coins}
            onRefresh={fetchCoins}
            refreshing={loading} 
            renderItem={({item})=><MarketCoin marketCoin={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponentStyle={{alignItems:'center'}}
            ListHeaderComponent={()=>(
                <>
                    <Image style={styles.image} source={image}/>
                    
                        <Text style={styles.label}>Market</Text>
                        
                    
                </>
            )}
            />
        </View>

    );
};

export default MarketScreen;
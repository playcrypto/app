import  React  from 'react';
import { View,Text,Image, FlatList } from "react-native";
import styles  from "./styles";
const image = require("../../../assets/images/portfolio4.png");
import PortfolioCoin from "../../components/PortfolioCoin";

const portfolioCoins=[{
    id : '1',
    name:'Virtual Rupees',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',

    //image:'https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png',
    /* image:'https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png', */
    symbol:'INR',
    amount:152.45,
    valueINR:1521.45,
},
{
    id : '2',
    name:'Bitcoin',
    /* image:'https://raw.githubusercontent.com/playcrypto/app/main/Bitcoin-Logo.png', */
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    amount:0.0001,
    valueINR:1456.45,
},
{
    id : '3',
    name:'Bitcoin',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    amount:0.0001,
    valueINR:1456.45,
},
{
    id : '4',
    name:'Bitcoin',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    amount:0.0001,
    valueINR:1456.45,
},
{
    id : '5',
    name:'Bitcoin',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    amount:0.0001,
    valueINR:1456.45,
},
{
    id : '6',
    name:'Bitcoin',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    amount:0.0001,
    valueINR:1456.45,
},
{
    id : '7',
    name:'Bitcoin',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    amount:0.0001,
    valueINR:1456.45,
},
{
    id : '8',
    name:'Bitcoin',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'BTC',
    amount:0.0001,
    valueINR:1456.45,
},

{
    id : '9',
    name:'Ethereum',
    image:'https://playcrypto.github.io/app/Bitcoin-Logo.png',
    symbol:'ETH',
    amount:0.015,
    valueINR:1026.45,
},
]

const PortfolioScreen   = () => {
    return(
        <View style={styles.root}>
            
            <FlatList style={styles.coins} data={portfolioCoins} 
            renderItem={({item})=><PortfolioCoin portfolioCoin={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponentStyle={{alignItems:'center'}}
            ListHeaderComponent={()=>(
                <>
                    <Image style={styles.image} source={image}/>
                    <View style={styles.balanceContainer}>
                        <Text style={styles.label}>Portfolio Balance</Text>
                        <Text style={styles.balance}>&#8377;51000.25</Text>
                    </View>
                </>
            )}
            />
        </View>

    );
};

export default PortfolioScreen;
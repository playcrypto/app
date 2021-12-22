import  React  from 'react';
import { View,Text,Image } from "react-native";
import styles  from "./styles";
const image = require("../../../assets/images/home3.png");

const HomeScreen    = () => {
    return(
        <View style={styles.root}>
            <Image style={styles.image} source={image}/>
            <Text  style={styles.header1} >Welcome to PlayCrypto</Text>
            <Text  style={styles.header2} >Play and Learn to Invest in CryptoCurrency</Text>
        </View>
    );
};

export default HomeScreen;
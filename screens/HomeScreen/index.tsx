import { useNavigation } from '@react-navigation/native';
import  React  from 'react';
import { View,Text,Image, Pressable } from "react-native";
import styles  from "./styles";
const image = require("../../../assets/images/home3.png");

/* const navigation=useNavigation(); */

const HomeScreen    = () => {
    return(
        <View style={styles.root}>
            <View style={styles.maxwidth}>
                <Image style={styles.image} source={image}/>
                <Text  style={styles.header1} >Welcome to PlayCrypto</Text>
                <Text  style={styles.header2} >Play and Learn to Invest in CryptoCurrency</Text>
            </View>
        </View>
    );
};

export default HomeScreen;
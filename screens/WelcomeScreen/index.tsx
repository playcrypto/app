import { CommonActions, useNavigation } from '@react-navigation/native';

import  React, { useContext, useEffect }  from 'react';
import { View,Text,Image, Pressable } from "react-native";
import styles  from "./styles";


import { Auth,Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import AppContext from '../../utils/AppContext';

const image = require("../../../assets/images/welcome.jpg");
const signin=require("../../../assets/images/s2.png")
/* const navigation=useNavigation(); */

const WelcomeScreen    = () => {

    const navigation=useNavigation();
    const { setUserId } = useContext(AppContext);

    useEffect(() => {
        const fetchUser = async () => {
          const user = await Auth.currentAuthenticatedUser();
          if (user) {
              //console.log('user data')
              console.log(user)


            setUserId(user.attributes.sub)
            //setUserId(user.attributes.sub)
            
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  { name: 'Root' },
                ],
              })
            );
          }
        }
    
        fetchUser();
      }, [])

    useEffect(() => {
        Hub.listen("auth", ({ payload: { event, data } }) => {
          if (event === "signIn") {
            //console.log(data);
            //setUserId(data.attributes.sub)
            setUserId(data.signInUserSession.accessToken.payload.sub)
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                routes: [
                  { name: 'Root' },
                ],
              })
            );
          }
        });
      }, [])

    const signInGoogle =async()=>{
        
        await Auth.federatedSignIn({provider:'Google'});
    };

    return(
        <View style={styles.root}>
            <View style={styles.maxwidth}>
                <Image style={styles.image} source={image}/>
                <Text  style={styles.header1} >Welcome to PlayCrypto</Text>
                <Text  style={styles.header2} >Play and Learn to Invest in CryptoCurrency</Text>
                
                <Pressable onPress={signInGoogle} style={styles.signin}>
                    <Image style={styles.signin} source={signin}/>
                </Pressable>
            </View>
        </View>
    );
};

export default WelcomeScreen;
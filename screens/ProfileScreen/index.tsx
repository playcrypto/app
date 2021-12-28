import { CommonActions, useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import  React, { useState }  from 'react';
import { View,Text,Image, FlatList, Pressable } from "react-native";
import Navigation from '../../navigation';
import styles  from "./styles";
const image = require("../../../assets/images/userprofile.png");



const ProfileScreen   = () => {

    const navigation=useNavigation();

    const[user,setUser]=useState({
        id:'1',
        name:'Test User',
        email:'test@mail.com',
        image:/* 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png' 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1200px-Crystal_Clear_kdm_user_female.svg.png'*/'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
        netWorth:50021,
    })

    const signOut = async () => {
        await Auth.signOut();
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              { name: 'Welcome' },
            ],
          })
        );
      }

    return(
        <View style={styles.root}>  
            <Image style={styles.image} source={image}/>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.label}>User Details</Text>
                <View style={styles.userContainer}>
                {/* <Text>test portfolio coin</Text> */}
                    <View style={styles.left}>
                        <Image style={styles.userimage} source={{uri:user.image}}></Image>
                        <View style={styles.textlabel}>
                            <Text style={styles.name}>
                                {user.name}
                            </Text>
                            <Text style={styles.email}>
                                {user.email}
                            </Text>
                            <Text style={styles.symbol}>
                                
                            </Text>
                        </View>
                    </View>
                    <View style={styles.prices}>
                        <Text style={styles.value}>
                            Total:    &#8377;{user.netWorth.toFixed(2)}       
                        </Text>
                    
                    </View>
            
                </View>
            </View>
            <Pressable onPress={signOut}>
                <Text style={styles.button}>
                    Sign out
                </Text>
            </Pressable>
        </View>
    );
};

export default ProfileScreen;
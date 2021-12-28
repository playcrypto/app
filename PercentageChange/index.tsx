import React from "react";
import {View,Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface PercentageChangeProps{
    valueChange24H:number,
    style? :object,

}


const PercentageChange = ({valueChange24H,style={}}:PercentageChangeProps)=>{
    return(
        <View>
            <Text style={[style,{color: valueChange24H>0? 'green' : valueChange24H<0?'red':'grey'}]}>
                {valueChange24H > 0 && '+'}{valueChange24H.toFixed(2)}%
                {valueChange24H > 0 && <AntDesign name="arrowup" size={14} color="green" />}
                {valueChange24H < 0 && <AntDesign name="arrowdown" size={14} color="red" />}
               {/*  {valueChange24H === 0 && <AntDesign name="arrowdown" size={14} color="grey" />}{<AntDesign name="arrowup" size={14} color="grey" />} */}
            </Text> 
        </View>
    );
};


export default PercentageChange;
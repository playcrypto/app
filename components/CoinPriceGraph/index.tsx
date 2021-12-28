import React from "react";
import {View,Text, Dimensions} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

interface CoinPriceGraphProps{
    dataString:string;
    style? :object,
}



const CoinPriceGraph = ({dataString}: CoinPriceGraphProps)=>{

    const data=JSON.parse(dataString);
    return(
        <View >
            {/* <Text>chart</Text>
            <Text  style={{alignItems:'center',justifyContent:'center'}} >Bezier Line Chart</Text> */}
            <LineChart
                data={{
                labels: ["-7d", "-6d", "-5d", "-4d", "-3d", "-2d",'-1d','now'],
                datasets: [
                    {
                    /* data: [
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100,
                        Math.random() * 100
                    ] */
                    data
                }
                ]
                }}
                width={/* Dimensions.get("window").width- */350} // from react-native
                height={220}
                yAxisLabel="&#8377;"
                horizontalLabelRotation={-40}
                /* style={{fontSize:5}} */
                verticalLabelRotation={0}
                /* yAxisSuffix="k" */
                withInnerLines={false}
                withDots={false}
                yAxisInterval={1} // optional, defaults to 1
                
                chartConfig={{
                backgroundColor: "white",
                backgroundGradientFrom: "#fff4ff",
                backgroundGradientTo: "#fff2ff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
                style: {
                    borderRadius: 5,
                    
                },
                propsForDots: {
                    r: "4",
                    strokeWidth: "1",
                    stroke: "blue"
                }
                }}
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16,
                
                }}
            />
        </View>
    );
};

export  default CoinPriceGraph;
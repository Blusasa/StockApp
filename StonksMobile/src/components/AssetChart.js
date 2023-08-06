import { View } from "react-native";
import { Grid, LineChart, XAxis, YAxis } from "react-native-svg-charts";
import AppStyles from "../theme/AppStyles";

const AssetChart = ({data, chartHeight}) => {

const data2 = [
  2.15,
  2.25,
  2.35,
  2.05,
  1.95,
  1.85,
  2.05,
  2.25,
  2.45,
  2.55,
  2.45,
  2.04,
  2.09,
  2.17,
  1.98,
  2.12,
  2.01,
  2.32,
  2.20,
  2.35,
  1.93,
  1.99,
  2.25,
  1.97,
  2.06,
  2.15,
  2.37,
  2.23,
  2.13,
  2.09,
  2.12,
];  

    const contentInset = { top: 25, left: 20, right: 20, bottom: 25}

    // const yAxis = () => {
    //     return (
    //         <YAxis
    //             data={data2}
    //             svg={{fill: "#fff", fontSize: 15}}
    //             formatLabel={(value) => `$${value}`}
    //             numberOfTicks={5}
    //             contentInset={contentInset}
    //         />
    //     )
    // };

    return (
        <View style={[AppStyles.flexContainer, {flexDirection:"row", maxHeight: "33%", maxWidth: "90%", borderColor: "#fff", borderWidth: 2}]}>
            <LineChart
                style={{width: "95%"}}
                data={data2}
                svg={{stroke: "#E91EAC", strokeWidth: 2}}
                contentInset={contentInset}
            >
                <Grid
                    svg={{fill: "#fff"}}
                />
            </LineChart>
        </View>
    );

}

export default AssetChart;

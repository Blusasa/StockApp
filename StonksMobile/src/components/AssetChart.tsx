import { View } from "react-native";
import { LineChart } from "react-native-svg-charts";
import AppStyles from "../theme/AppStyles";

const AssetChart = (): JSX.Element => {

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
  1.97,
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

    const contentInset = { top: 10, left: 10, right: 10, bottom: 10}

    return (
        <View style={[AppStyles.flexContainer, {flexDirection:"row", maxHeight: "100%", maxWidth: "95%", backgroundColor: "transparent"}]}>
            <LineChart 
                style={{width: "100%"}}
                data={data2}
                svg={{stroke: "#E91EAC", strokeWidth: 2}}
                contentInset={contentInset}
            />
        </View>
    );

}

export default AssetChart;

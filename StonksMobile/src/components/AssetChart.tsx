import { ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { LineChart } from "react-native-svg-charts";

import { Theme, commonStyles, useTheme } from "../theme";

const AssetChart = (): ReactElement => {

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

    const theme = useTheme();
    const componentStyles = styles(theme);
    const contentInset = { top: 15, left: 15, right: 15, bottom: 15}

    return (
        <View style={[componentStyles.chartContainer, commonStyles.devBorder]}>
            <LineChart 
                style={{width: "100%"}}
                data={data2}
                svg={{stroke: "#E91EAC", strokeWidth: 2}}
                contentInset={contentInset}
            />
        </View>
    );

}

const styles = (theme: Theme) => {
    return(
        StyleSheet.create({
            chartContainer: {
                flex: 1,
                ...commonStyles.flexRowCenter,
                backgroundColor: theme.colors.transparent,
            }
        })
    )
}

export default AssetChart;

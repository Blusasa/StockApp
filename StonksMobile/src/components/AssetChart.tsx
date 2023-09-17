import { ReactElement } from "react";
import { View, Pressable, Text } from "react-native";
import { LineChart } from "react-native-svg-charts";

import { Theme, commonStyles, useTheme} from "../theme";
import { ThemedStyles, useThemedStyles } from "../hooks/useThemedStyles";

type ChartProps = {
    showSelectors?: boolean,
}

const AssetChart = ({showSelectors}: ChartProps): ReactElement => {

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
    const componentStyles = useThemedStyles(styles);
    const contentInset = { top: 10, left: 10, right: 10, bottom: 10}

    const onPeriodSelect = (selectedPeriod: string) => console.log(`${selectedPeriod} clicked`);

    return (
        <View style={[componentStyles.chartContainer]}>
            <LineChart 
                style={[{flex: 1, height: 150}]}
                data={data2}
                svg={{stroke: theme.colors.primary, strokeWidth: 2}}
                contentInset={contentInset}
            />
            {showSelectors &&            
                <View style={[componentStyles.periodContainer]}>
                    {["1D", "1W", "1M", "3M", "1Y", "All"].map((period) => 
                        <Pressable
                            key={period}
                            style={[componentStyles.periodSelector]}
                            onPress={() => onPeriodSelect(period)}    
                        >
                            <Text style={[componentStyles.periodText]}>{period}</Text>
                        </Pressable>)
                    }
                </View>
            }
        </View>
    );

}

const styles = (theme: Theme): ThemedStyles => (
    {
        chartContainer: {
            flex: 1,
            ...commonStyles.flexColCenter,
            backgroundColor: theme.colors.transparent,
        },
        periodContainer: {
            flex: 1,
            ...commonStyles.flexRowSpaceAround,
            padding: 10,
        },
        periodSelector: {
            flex: 1,
            ...commonStyles.flexRowSpaceAround,
            marginBottom: 5,
        },
        periodText: {
            ...theme.fonts.regular,
            fontSize: 16,
            color: "white",
            includeFontPadding: false
        }   
    }
);

export default AssetChart;

import { View, Text, StyleSheet, Pressable, LayoutChangeEvent } from "react-native";

import ArrowIcon from "../../../assets/rneIcons/ArrowIcon";
import { useTheme, Theme, commonStyles } from "../../../theme";

import StockInfoProps from "../types/StockInfoProps";
import AssetChart from "../../../components/AssetChart";
import useContainerSize from "../../../hooks/useContainerSize";
import { ThemedStyles, useThemedStyles } from "../../../hooks/useThemedStyles";

const StockBox = ({stockInfo, showCharts}: StockInfoProps): JSX.Element => {

    const theme = useTheme();
    const componentStyles = useThemedStyles(stockBoxStyles);
    const {height: iconHeight, setter: setIconContSize} = useContainerSize();

    let stockIsPositive = stockInfo.percentChange > 0;

    function round(value: number, decimals: number = 2): string {
        const precision = Math.pow(10, decimals)
        const roundedNum = Math.round((value+Number.EPSILON) * precision ) / precision;
        return roundedNum.toFixed(decimals);
    }

    return (
        <Pressable
            style={({pressed}) => [{backgroundColor: pressed ? theme.colors.pressableIn : theme.colors.transparent}, componentStyles.pressable]}
        >
            <View style={componentStyles.boxContainer}>
                <View style={[componentStyles.infoContainer]}>
                    <Text style={[componentStyles.stockName]}>{stockInfo.name}</Text>
                    <Text style={[componentStyles.stockBoxSubText]}>{stockInfo.symbol}</Text>
                </View>
                {showCharts && <AssetChart/>}
                <View style={[componentStyles.pricingContainer]}>
                        <Text style={componentStyles.stockName}>${round(stockInfo.currentPrice)}</Text>
                        <View 
                            style={[componentStyles.percentContainer]}
                            onLayout={(e: LayoutChangeEvent) => setIconContSize(e.nativeEvent.layout)}
                        >
                            <ArrowIcon isPositive={stockIsPositive} size={iconHeight * 0.85} />
                            <Text 
                                style={[componentStyles.stockBoxSubText, 
                                {color: stockIsPositive ? theme.colors.deltaPositive : theme.colors.deltaNegative}]}>
                                    {round(stockInfo.percentChange)}%
                            </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const stockBoxStyles = (theme: Theme): ThemedStyles => ({
            pressable: {
                flex: 1,
                ...commonStyles.flexColCenter,
                borderRadius: 10,
                margin: 5
            },
            boxContainer: {
                flex: 1,
                ...commonStyles.flexRowSpaceBW,
                padding: 5,
                backgroundColor: theme.colors.transparent
            },
            infoContainer: {
                flex: 1,
                ...commonStyles.flexColCenter,
            },
            pricingContainer: {
                flex: 1,
                ...commonStyles.flexColCenterCrossEnd
            },
            percentContainer : {
                flexShrink: 1,
                ...commonStyles.flexRowEndCrossCenter,
            },
            stockName: {
                ...theme.fonts.regular,
                fontSize: 18,
                includeFontPadding: false,
            },
            stockBoxSubText: {
                ...theme.fonts.subtext,
                fontSize: 18, 
                includeFontPadding: false,
            },
            pressableIn: {
                backgroundColor: theme.colors.pressableIn
            }
});

export default StockBox;
import { View, Text, StyleSheet, Pressable } from "react-native";

import { commonStyles } from "../theme/CommonStyles";
import FeatherIcon from "../assets/rneIcons/FeatherIcon";
import { useTheme } from "../theme/useTheme";
import { Theme } from "../theme/types";

type Props = {
    name: string,
    symbol: string,
    currentPrice: number,
    percentChange: number
}

const StockBox = (stockInfo: Props): JSX.Element => {
    const theme = useTheme();
    const componentStyles = stockBoxStyles(theme);


    stockInfo = stockInfo.stockInfo;

    let stockIsNegative = stockInfo.percentChange < 0;

    function round(value: number, decimals: number = 2): string {
        const precision = Math.pow(10, decimals)
        const roundedNum = Math.round((value+Number.EPSILON) * precision ) / precision;
        return roundedNum.toFixed(decimals);
    }

    return (
        <Pressable
            style={({pressed}) => [{backgroundColor: pressed ? theme.colors.pressableIn : theme.colors.transparent}, 
                commonStyles.flexColumn, commonStyles.centerContainer, componentStyles.pressable]}
        >
            <View style={[commonStyles.flexRow, commonStyles.centerContainer, componentStyles.boxContainer]}>
                    <View style={[componentStyles.infoContainer]}>
                        <Text style={[theme.fonts.regular, componentStyles.stockName]}>{stockInfo.name}</Text>
                        <Text style={[theme.fonts.subtext, componentStyles.stockBoxSubText]}>{stockInfo.symbol}</Text>
                    </View>
                    <View style={componentStyles.pricingContainer}>
                        <Text style={[theme.fonts.regular, componentStyles.stockName]}>${round(stockInfo.currentPrice)}</Text>
                        <View style={[componentStyles.percentContainer]}>
                            {
                                stockIsNegative ?
                                    <FeatherIcon name={"arrow-down-left"} color={theme.colors.deltaNegative} size={30} />
                                    : <FeatherIcon name={"arrow-up-right"} color={theme.colors.deltaPositive} size={30} />
                            }
                            <Text 
                                style={[theme.fonts.subtext, componentStyles.stockBoxSubText, commonStyles.centerSelf,
                                {color: stockIsNegative ? theme.colors.deltaNegative : theme.colors.deltaPositive}]}>
                                    {round(stockInfo.percentChange)}%
                            </Text>
                        </View>
                    </View>
            </View>
        </Pressable>
    );
}

const stockBoxStyles = (theme: Theme) => {
    return(
        StyleSheet.create({
            pressable: {
                margin: 5
            },
            boxContainer: {
                width: 350,
                justifyContent: "space-between",
                padding: 5,
                backgroundColor: theme.colors.transparent
            },
            infoContainer: {
                flex: 1,
                alignItems: "flex-start",
                alignSelf: "flex-start",
            },
            pricingContainer: {
                flexShrink: 1,
                alignItems: "flex-end",
                justifyContent: "flex-end"
            },
            percentContainer : {
                flexShrink: 1,
                flexDirection: "row",
            },
            stockName: {
                fontSize: 24,
                color: theme.colors.text,
            },
            stockBoxSubText: {
                color: "grey", 
                fontSize: 18, 
                alignSelf: "flex-start" 
            },
            pressableIn: {
                backgroundColor: theme.colors.pressableIn
            }

        })
    );
};

export default StockBox;
import { View, Text, StyleSheet, Pressable, LayoutChangeEvent, LayoutRectangle } from "react-native";
import { ReactElement, useState } from "react";

import { Theme, commonStyles, useTheme } from "../../../theme";

import FeatherIcon from "../../../assets/rneIcons/FeatherIcon";
import StockInfoProps from "../types/StockInfoProps";


const DailyMover = ({stockInfo} : StockInfoProps) : ReactElement => {
    const [iconContainerSize, setIconContainerSize] = useState<LayoutRectangle>({
        width: 0,
        height: 0,
        x: 0,
        y: 0
      });

    const theme = useTheme();
    const componentStyles = styles(theme);

    let stockIsNegative = stockInfo.percentChange < 0;

    function round(value: number, decimals: number = 2): string {
        const precision = Math.pow(10, decimals)
        const roundedNum = Math.round((value+Number.EPSILON) * precision ) / precision;
        return roundedNum.toFixed(decimals);
    }

    return (
        <Pressable 
            onPress={(e) => console.log(`${stockInfo.symbol} pressed`)}
            style={({ pressed }) => [{ backgroundColor: pressed ? theme.colors.pressableIn : "#rgba(191, 191, 191, 0.15)"}, componentStyles.container]}
        >
                <Text style={[componentStyles.symbol]}>{stockInfo.symbol}</Text>
                <Text style={[componentStyles.price]}>${round(stockInfo.currentPrice, 2)}</Text>
                <View 
                    style={[componentStyles.percentContainer]}
                    onLayout={(e: LayoutChangeEvent) => setIconContainerSize(e.nativeEvent.layout)}
                >
                    {stockIsNegative 
                    ? <FeatherIcon name={"arrow-down-left"} color={"#ff0000"} size={iconContainerSize.height * 0.85} /> 
                    : <FeatherIcon name={"arrow-up-right"} color={"#00ff00"} size={iconContainerSize.height * 0.85} />}
                    <Text style={[componentStyles.percentText, {color: stockIsNegative ? theme.colors.deltaNegative : theme.colors.deltaPositive}]}>
                            {round(stockInfo.percentChange, 2)}%
                    </Text>
                </View>
        </Pressable>
    );
}

const styles = (theme: Theme) => StyleSheet.create({
    container: {
        flex: 1,
        ...commonStyles.flexColCenter,
        width: "10%",
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        borderRadius: 8,
    },
    symbol: {
        ...theme.fonts.regular,
        includeFontPadding: false,
        fontSize: 20,
        alignSelf: "flex-start"
    },
    price: {
        ...theme.fonts.subtext,
        includeFontPadding: false,
        fontSize: 14,
        alignSelf: "flex-start"
    },
    percentContainer: {
        flexShrink: 1,
        ...commonStyles.flexRowCenter,
        marginTop: 5
    },
    percentText: {
        ...theme.fonts.regular,
        textAlign: "center",
        textAlignVertical: "center",
        fontSize: 15,
        marginLeft: 3
    }
})

export default DailyMover;
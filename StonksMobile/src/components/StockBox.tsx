import { View, Text, StyleSheet, Pressable, LayoutRectangle, LayoutChangeEvent } from "react-native";
import { useState } from "react";

import FeatherIcon from "../assets/rneIcons/FeatherIcon";
import { useTheme, Theme, commonStyles } from "../theme";
import { IStockInfo } from "../types";
import AssetChart from "./AssetChart";

type StockBoxProps = {
    stockInfo: IStockInfo
}

const StockBox = ({stockInfo}: StockBoxProps): JSX.Element => {
    const [iconContainerSize, setIconContainerSize] = useState<LayoutRectangle>({
        width: 0,
        height: 0,
        x: 0,
        y: 0
      });

    const theme = useTheme();
    const componentStyles = stockBoxStyles(theme);

    let stockIsNegative = stockInfo.percentChange < 0;

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
                <AssetChart />
                <View style={[componentStyles.pricingContainer]}>
                        <Text style={componentStyles.stockName}>${round(stockInfo.currentPrice)}</Text>
                        <View 
                            style={[componentStyles.percentContainer]}
                            onLayout={(e: LayoutChangeEvent) => setIconContainerSize(e.nativeEvent.layout)}
                        >
                            {
                                stockIsNegative ?
                                    <FeatherIcon name={"arrow-down-left"} color={theme.colors.deltaNegative} size={iconContainerSize.height * 0.85} />
                                    : <FeatherIcon name={"arrow-up-right"} color={theme.colors.deltaPositive} size={iconContainerSize.height * 0.85} />
                            }
                            <Text 
                                style={[componentStyles.stockBoxSubText, 
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
        })
    );
};

export default StockBox;
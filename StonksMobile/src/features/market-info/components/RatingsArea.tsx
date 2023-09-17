import { ReactElement } from "react";
import { View, Text } from "react-native";
import { Circle, Rect, Svg, Text as SvgText } from "react-native-svg";

import { ThemedStyles, useThemedStyles } from "../../../hooks/useThemedStyles";
import { Theme, commonStyles, useTheme } from "../../../theme";
import useContainerSize from "../../../hooks/useContainerSize";

interface Ratings {
    buy: number,
    strongBuy: number,
    hold: number,
    sell: number,
    strongSell: number,
    period: string,
    symbol: string
}

const RatingsArea = (): ReactElement => {
    const theme = useTheme();
    const componentStyles = useThemedStyles(styles);
    const {width: barAreaWidth, height: barAreaHeight, setter: setBarArea} = useContainerSize();
    const {width: circleAreaWidth, height: circleAreaHeight, setter: setCircleArea} = useContainerSize();

    const rating: Ratings = {
        "buy": 24,
        "hold": 7,
        "period": "2020-03-01",
        "sell": 40,
        "strongBuy": 13,
        "strongSell": 0,
        "symbol": "AAPL"
    };

    const totalRatings = {
        totalBuy: rating.buy + rating.strongBuy,
        totalSell: rating.sell + rating.strongSell,
        hold: rating.hold,
        totalRatings: rating.buy + rating.strongBuy + rating.hold + rating.sell + rating.strongSell,
    };

    const ratingRatios = {
        buyRatio: roundRatios(totalRatings.totalBuy / totalRatings.totalRatings * 100),
        sellRatio: roundRatios(totalRatings.totalSell / totalRatings.totalRatings * 100),
        holdRatio: roundRatios(totalRatings.hold / totalRatings.totalRatings * 100),
    };

     //this is ugly but expression required, if BUY > SELL than BUY else if SELL > HOLD than SELL else HOLD
    const largestRatio = totalRatings.totalBuy > totalRatings.totalSell 
                            ? ratingRatios.buyRatio
                            : totalRatings.totalSell > totalRatings.hold 
                                ? ratingRatios.sellRatio
                                : ratingRatios.holdRatio;

    const themeFillColor = totalRatings.totalBuy > totalRatings.totalSell
                                ? theme.colors.deltaPositive
                                : totalRatings.totalSell > totalRatings.hold
                                        ? theme.colors.deltaNegative
                                        : "white";
                            
    const getFillColor = (ratio: number): string => {
        return ratio === largestRatio ? themeFillColor: "#fff";
    }

    function roundRatios (x: number): number{
        // x is always positive so we can use the below formula to get the decimal
        let decimal = x - Math.floor(x);
        // the values used in this function are pieces from the same ratio so using the tenth decimal to round up/down is close enough for use case, it'll add up to 100 in the end.
        return decimal >= 0.5 ? Math.ceil(x) : Math.floor(x);
    }

    return(
        <View style={[componentStyles.mainContainer]}>
            <Text style={[componentStyles.title]}>{`${totalRatings.totalRatings} Analyst ratings`}</Text>
            <View style={[componentStyles.infoContainer]}>
                <View 
                    onLayout={(e) => setCircleArea(e.nativeEvent.layout)}
                    style={[componentStyles.circleContainer]}
                >
                    <Svg>
                        <Circle 
                            cx={circleAreaWidth / 2}
                            cy={circleAreaHeight / 2}
                            r={circleAreaHeight / 2}
                            fill={themeFillColor}
                            fillOpacity={0.5}
                        />
                        <SvgText
                            x={circleAreaWidth / 2}
                            y={(circleAreaHeight / 2) + 11}
                            fontFamily={theme.fonts.regular.fontFamily}
                            fontSize={36}
                            textAnchor="middle"
                            fill={themeFillColor === "white" ? "black" : themeFillColor}
                        >
                            {`${largestRatio}%`}
                        </SvgText>
                    </Svg>
                </View>
                <View style={[componentStyles.barsContainer]}>
                    <View style={[componentStyles.barArea]}>
                        <View 
                            onLayout={(e) => setBarArea(e.nativeEvent.layout)}
                            style={[{flex: 2}]}
                        >
                            <Svg>
                                <Rect
                                    x={0}
                                    y={0}
                                    width={barAreaWidth}
                                    height={barAreaHeight}
                                    fill={"grey"}
                                    fillOpacity={0.5}
                                    rx={5}
                                    ry={5}
                                />
                                <Rect
                                    x={0}
                                    y={0}
                                    width={ratingRatios.buyRatio / 100 * barAreaWidth}
                                    height={barAreaHeight}
                                    fill={getFillColor(ratingRatios.buyRatio)}
                                    rx={5}
                                    ry={5}
                                />
                            </Svg>
                        </View>
                        <View style={[{flex: 1}]}>
                            <Text style={[componentStyles.ratioTxt, {color: getFillColor(ratingRatios.buyRatio)}]}>{`${ratingRatios.buyRatio}% Buy`}</Text>
                        </View>
                    </View>
                    <View style={[componentStyles.barArea]}>
                        <View style={[{flex: 2}]}>
                            <Svg>
                                <Rect
                                    x={0}
                                    y={0}
                                    width={barAreaWidth}
                                    height={barAreaHeight}
                                    fill={"grey"}
                                    fillOpacity={0.5}
                                    rx={5}
                                    ry={5}
                                />
                                <Rect
                                    x={0}
                                    y={0}
                                    width={ratingRatios.sellRatio / 100 * barAreaWidth}
                                    height={barAreaHeight}
                                    fill={getFillColor(ratingRatios.sellRatio)}
                                    rx={5}
                                    ry={5}
                                />
                            </Svg>
                        </View>
                        <View style={[{flex: 1}]}>
                            <Text style={[componentStyles.ratioTxt, {color: getFillColor(ratingRatios.sellRatio)}]}>{`${ratingRatios.sellRatio}% Sell`}</Text>
                        </View>
                    </View>
                    <View style={[componentStyles.barArea]}>
                        <View style={[{flex: 2}]}>
                            <Svg>
                                <Rect
                                    x={0}
                                    y={0}
                                    width={barAreaWidth}
                                    height={barAreaHeight}
                                    fill={"grey"}
                                    fillOpacity={0.5}
                                    rx={5}
                                    ry={5}
                                />
                                <Rect
                                    x={0}
                                    y={0}
                                    width={ratingRatios.holdRatio / 100 * barAreaWidth}
                                    height={barAreaHeight}
                                    fill={getFillColor(ratingRatios.holdRatio)}
                                    rx={5}
                                    ry={5}
                                />
                            </Svg>
                        </View>
                        <View style={[{flex: 1}]}>
                            <Text style={[componentStyles.ratioTxt, {color: getFillColor(ratingRatios.holdRatio)}]}>{`${ratingRatios.holdRatio}% Hold`}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = (theme: Theme): ThemedStyles => ({
    mainContainer: {
        flex: 1,
        ...commonStyles.flexColCenter,
        marginVertical: 10,
        padding: 5,
    },
    infoContainer: {
        flex: 1,
        ...commonStyles.flexRowCenter,
        marginVertical: 10,
    },
    circleContainer: {
        flex: 1,
        ...commonStyles.flexColCenter
    },
    barsContainer: {
        flex: 2,
        ...commonStyles.flexColCenter
    },
    barArea: {
        flex: 1,
        ...commonStyles.flexRowCenter,
        marginVertical: 3,
    },
    title: {
        ...theme.fonts.header,
        fontSize: 20,
    },
    ratioTxt: {
        ...theme.fonts.regular,
        fontSize: 16,
        textAlign: "right",
        textAlignVertical: "center",
        includeFontPadding: false,
    },
    circleText: {
        ...theme.fonts.regular,
        fontSize: 30,
        textAlign: "center",
        textAlignVertical: "center",
        bottom: -17
    }
});

export default RatingsArea;
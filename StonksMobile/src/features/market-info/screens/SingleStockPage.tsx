import { View, Text, ScrollView, Dimensions, LayoutChangeEvent} from "react-native";
import { useState } from "react";

import { Theme, commonStyles } from "../../../theme";
import { useThemedStyles, ThemedStyles } from "../../../hooks/useThemedStyles";
import useContainerSize from "../../../hooks/useContainerSize"

import AssetChart from "../../../components/AssetChart";
import CustomBtn from "../../../components/CustomButton";
import Underline from "../../../components/Underline";
import ArrowIcon from "../../../assets/rneIcons/ArrowIcon";
import StockBalance from "../components/StockBalance";
import NewsSection from "../components/NewsSection";
import Description from "../components/Description";
import Ratings from "../components/RatingsArea";

const SingleStockPage = () => {
    const componentStyles = useThemedStyles(styles);
    const {width: mainWidth, setter: setMainContainerSize} = useContainerSize();
    const {height: iconHeight, setter: setIconContainerSize} = useContainerSize();

    const fakeData = {
        "marketCap": 10.39,
        "averageVol": 1.234,
        "dayHigh": 40.56,
        "dayLow": 39.98,
        "todayVolume": 1.6,
        "open": 40.11,
        "yrHigh": 40.56,
        "yrLow": 24.52
    }

    return (
        <>
            <ScrollView 
                onLayout={(e: LayoutChangeEvent) => setMainContainerSize(e.nativeEvent.layout)}
                contentContainerStyle={[componentStyles.mainContainer, commonStyles.devBorder]}
            >
                <Text style={[componentStyles.title]}>Stock 1</Text>
                <View style={[componentStyles.headerContainer]}>
                    <Text style={[componentStyles.stockName]}>Stock 1 Price</Text>
                    <Text style={[componentStyles.stockPrice]}>$3.45</Text>
                    <View
                        style={[componentStyles.priceDeltaContainer]}
                        onLayout={(e: LayoutChangeEvent) => setIconContainerSize(e.nativeEvent.layout)}
                    >
                        <ArrowIcon isPositive size={iconHeight * 0.55} />
                        <Text style={[componentStyles.priceDelta, true ? componentStyles.positive : componentStyles.negative]}>$0.05 {`(2.1%)`}</Text>
                    </View>
                    <AssetChart showSelectors/>
                </View>
                <Underline />
                <StockBalance/>
                <Underline />
                <Description />
                <Underline />
                <View style={[componentStyles.balanceContainer]}>
                    <Text style={[componentStyles.stockName]}>Market Stats {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Market Stats {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Market Stats {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Market Stats {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Market Stats {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Market Stats {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Market Stats {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Market Stats {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Market Stats {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Market Stats {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Market Stats {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Market Stats {'>'}</Text>
                </View>
                <Underline />
                <NewsSection/>
                <Underline />
                <Ratings />
            </ScrollView>
            {/* <CustomBtn 
                text="Trade" 
                styles={[componentStyles.tradeButton, {width: mainWidth * 0.90, transform: [{translateX: (mainWidth * 0.9) * -0.5}]}]} 
                onPress={(e) => {console.log("trade clicked")}}
            /> */}
        </>
    );
};

const styles = (theme: Theme): ThemedStyles => ({
    mainContainer: {
        flexGrow: 1,
        padding: 15,
        ...commonStyles.flexColCenter,
        backgroundColor: theme.colors.background,
    },
    tradeButton: {
        position: "absolute",
        //essentially acting as marginBottom here 
        bottom: 10,
        //for alignment since position is absolute
        left: "50%",
    },
    newsContainer: {
        flex: 1,
        ...commonStyles.flexColCenter,
        marginVertical: 10,
    },
    balanceContainer: {
        flex: 1,
        ...commonStyles.flexColCenter,
        marginVertical: 10,
    },
    headerContainer: {
        flex: 1,
        ...commonStyles.flexColCenter,
        marginVertical: 10,
        padding: 10,
    },
    title: {
        ...theme.fonts.title,
        fontSize: 22,
        textAlign: "center",
    },
    stockName: {
        ...theme.fonts.subtext,
        includeFontPadding: false,
        textAlignVertical: "center",
        fontSize: 16,
    },
    stockPrice: {
        ...theme.fonts.regular,
        includeFontPadding: false,
        textAlignVertical: "center",
        fontSize: 25
    },
    priceDelta: {
        ...theme.fonts.subtext,
        includeFontPadding: false,
        textAlignVertical: "center",
        fontSize: 16
    },
    positive: {
        color: theme.colors.deltaPositive
    },
    negative: {
        color: theme.colors.deltaNegative
    },
    priceDeltaContainer: {
        flex: 1,
        ...commonStyles.flexRowStart
    },
    
});

export default SingleStockPage;
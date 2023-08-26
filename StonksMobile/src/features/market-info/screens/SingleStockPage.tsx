import { View, Text, ScrollView, LayoutChangeEvent} from "react-native";
import { Fragment} from "react";

import { Theme, commonStyles } from "../../../theme";
import { useThemedStyles, ThemedStyles } from "../../../hooks/useThemedStyles";
import useContainerSize from "../../../hooks/useContainerSize"

import AssetChart from "../../../components/AssetChart";
import CustomBtn from "../../../components/CustomButton";
import Underline from "../../../components/Underline";
import ArrowIcon from "../../../assets/rneIcons/ArrowIcon";

const SingleStockPage = () => {
    const componentStyles = useThemedStyles(styles);
    const [mainWidth, mainHeight, setMainContainerSize] = useContainerSize();
    const [iconWidth, iconHeight, setIconContainerSize] = useContainerSize();

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
        <View style={[{flex: 1,}]}>
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
                        <ArrowIcon isPositive size={iconHeight * 0.85} />
                        <Text style={[componentStyles.priceDelta, true ? componentStyles.positive : componentStyles.negative]}>$0.05 {`(2.1%)`}</Text>
                    </View>
                </View>
                <AssetChart/>
                <View style={[componentStyles.sectionContainer]}>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                    <Text style={[componentStyles.stockName]}>Your Balance {'>'}</Text>
                </View>
                <Underline />
                <View style={[componentStyles.sectionContainer]}>
                    <Text style={[componentStyles.stockPrice]}>News</Text>
                    <Text style={[componentStyles.stockPrice]}>News</Text>
                    <Text style={[componentStyles.stockPrice]}>News</Text>
                    <Text style={[componentStyles.stockPrice]}>News</Text>
                    <Text style={[componentStyles.stockPrice]}>News</Text>
                    <Text style={[componentStyles.stockPrice]}>News</Text>
                    <Text style={[componentStyles.stockPrice]}>News</Text>
                    <Text style={[componentStyles.stockPrice]}>News</Text>
                    <Text style={[componentStyles.stockPrice]}>News</Text>
                    <Text style={[componentStyles.stockPrice]}>News</Text>
                </View>
            </ScrollView>
            <CustomBtn 
                text="Trade" 
                styles={[componentStyles.tradeButton, {width: mainWidth * 0.90, transform: [{translateX: (mainWidth * 0.9) * -0.5}]}]} 
                onPress={(e) => {console.log("trade clicked")}}
            />
        </View>
    );
};

const styles = (theme: Theme): ThemedStyles => ({
    mainContainer: {
        flexGrow: 1,
        padding: 10,
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
    sectionContainer: {
        flex: 1,
        ...commonStyles.flexColCenter,
    },
    headerContainer: {
        flex: 1,
        ...commonStyles.flexColCenter,
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
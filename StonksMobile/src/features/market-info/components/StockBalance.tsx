import { View, Text } from "react-native"

import StockBox from "../../../features/home-overview/components/StockBox"

import { Theme, commonStyles } from "../../../theme";
import { ThemedStyles, useThemedStyles } from "../../../hooks/useThemedStyles";


const StockBalance = () => {

    const componentStyles = useThemedStyles(styles);

    return(
        <View style={[componentStyles.mainContainer]}>
            <View style={[componentStyles.titleContainer]}>
                <Text style={[componentStyles.titleMain]}>Your balance</Text>
                <Text style={[componentStyles.titlePrice]}>$3.45</Text>
            </View>
            <StockBox stockInfo={{symbol: "STK 1", name: "Stock 1", currentPrice: 320.22, percentChange: -1.23}}></StockBox>
        </View>
    )
};

const styles = (theme: Theme): ThemedStyles => ({
    mainContainer: {
        flex: 1,
        ...commonStyles.flexColCenter,
        padding: 10,
        marginVertical: 10,
    },
    titleContainer: {
        flex: 1,
        ...commonStyles.flexColCenter,
        left: 5
    },
    titleMain: {
        ...theme.fonts.subtext,
        fontSize: 16,
    },
    titlePrice: {
        ...theme.fonts.regular,
        fontSize: 22
    },
});

export default StockBalance;
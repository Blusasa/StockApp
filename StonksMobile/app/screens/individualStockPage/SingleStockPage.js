import { View, Text } from "react-native";
import StatsBox from "./StatsBox";
import AppStyles from "../../globals/styles/AppStyles";
import AssetChart from "./AssetChart";
import FavoritedStocks from "../homePage/FavoritedStocks";
import UserGroups from "../homePage/UserGroups";

const SingleStockPage = ({ data }) => {

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
        <View style={[AppStyles.flexContainer, AppStyles.mainApp]}>
            <AssetChart/>
        </View>
    );


};

export default SingleStockPage;
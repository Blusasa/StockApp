import { View, Text, StyleSheet } from "react-native";
import Underline from "../../components/Underline";
import AppStyles from "../../globals/styles/AppStyles";
import { SectionGrid } from "react-native-super-grid";

const StatsBox = ({ data }) => {

    const stats = [
        { label: "Market Cap", display: `${data.marketCap} B` },
        { label: "Average Volume", display: `${data.averageVol} M` },
        { label: "52 Week High", display: `$${data.yrHigh}` },
        { label: "52 Week Low", display: `$${data.yrLow}` },
        { label: "Open", display: `$${data.open}` },
        { label: "Volume", display: `${data.todayVolume} M` },
        { label: "High today", display: `$${data.dayHigh}` },
        { label: "Low today", display: `$${data.dayLow}` },
    ];

    return (
        <View style={{ flex: 1, margin: 20, padding: 5 }}>
            <Text style={[AppStyles.textSemiBold, style.title]}>Statistics</Text>
            <Underline />
            <SectionGrid
                itemDimension={150}
                style={{ flex: 1 }}
                sections={[
                    { title: '', data: stats.slice(0, 4) },
                    { title: '', data: stats.slice(4, 9) }
                ]}
                renderItem={({ item }) => {
                    return (
                        <View style={[style.statStyle]}>
                            <Text style={[AppStyles.textSemiBold, { fontSize: 16 }]}>{item.label}</Text>
                            <Text style={[AppStyles.text, { fontSize: 14 }]}>{item.display}</Text>
                        </View>
                    );
                }}
                renderSectionHeader={({}) => null}
            />
        </View>
    );

};

const style = StyleSheet.create({
    "statStyle": {
        flexShrink: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        padding: 5,
    },
    "title" : {
        fontSize: 20, 
        alignSelf: "flex-start", 
        marginLeft: 5, 
        paddingLeft: 5 
    }
});

export default StatsBox;
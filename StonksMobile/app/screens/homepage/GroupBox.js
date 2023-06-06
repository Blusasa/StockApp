import { View, Text, StyleSheet, Pressable } from "react-native";
import AppStyles from "../../globals/styles/AppStyles";

const GroupBox = ({ groupInfo }) => {

    return (
        <View style={styles.mainContainer}>
            <Pressable style={({ pressed }) => [
                { backgroundColor: pressed ? "rgba(255, 255, 255, 1)" : "transparent" },
                styles.pressable
            ]}>
                <View style={[styles.shadow]}>
                    <View style={[AppStyles.flexContainer, styles.container]}>
                        <View style={[styles.groupName]}>
                            <Text style={[AppStyles.textSemiBold, { fontSize: 20, }]}>{groupInfo.name}</Text>
                        </View>
                        <View style={[styles.ranking]}>
                            <Text style={[AppStyles.text, { fontSize: 18 }]}># {groupInfo.place} / </Text>
                            <Text style={[AppStyles.text, { fontSize: 18 }]}>{groupInfo.totalInGroup}</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        margin: 7,
    },
    shadow: {
        height: 50,
        backgroundColor: "#54EF46",
        borderRadius: 50,
        transform: [{ translateX: 4 }, { translateY: 4 }]
    },
    pressable: {
        borderRadius: 50,
    },
    container: {
        borderColor: "#E91EAC",
        borderWidth: 3,
        borderRadius: 50,
        flexDirection: "row",
        width: 350,
        backgroundColor: "#000",

        transform: [{ translateX: -4 }, { translateY: -4 }]
    },
    groupName: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginLeft: 15
    },
    ranking: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginRight: 15
    }
});


export default GroupBox;
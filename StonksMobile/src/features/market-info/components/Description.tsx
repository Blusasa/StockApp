import { ReactElement, useState } from "react";
import { View, Text, Pressable } from "react-native";

import { ThemedStyles, useThemedStyles } from "../../../hooks/useThemedStyles";
import { Theme, commonStyles } from "../../../theme";



const Description = (): ReactElement => {
    const [showFullDescription, setShowDescription] = useState(false);
    const componentStyles = useThemedStyles(styles);

    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    const handleOnPress = () => setShowDescription(!showFullDescription);

    return(
        <View style={[componentStyles.mainContainer]}>
            <Text style={[componentStyles.title]}>About Company</Text>

            {/* 0 is default numOfLines in RN, equivalent to show all text */}
            <Text numberOfLines={showFullDescription ? 0 : 5} style={[componentStyles.summary]}>{loremIpsum}</Text>

            <Pressable style={[componentStyles.pressable]} onPress={handleOnPress}>
                <Text style={[componentStyles.toggleTxt]}>{showFullDescription ? "Show less..." : "Show more..."}</Text>
            </Pressable>
        </View>
    );
};

const styles = (theme: Theme): ThemedStyles => ({
    mainContainer: {
        flex: 1,
        ...commonStyles.flexColCenter,
        marginVertical: 10,
        padding: 10,
    },
    title: {
        ...theme.fonts.header,
        fontSize: 20,
    },
    summary: {
        ...theme.fonts.regular,
        fontSize: 14,
    },
    toggleTxt: {
        ...theme.fonts.regular,
        fontSize: 14,
        color: theme.colors.action
    },
    pressable: {
        marginTop: 15
    }
});

export default Description;
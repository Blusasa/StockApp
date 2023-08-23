import { View, Text, StyleSheet } from "react-native";
import { ReactElement } from "react";

import { useTheme, commonStyles, Theme } from "../../../theme";

const Groups = () : ReactElement => {
    const theme = useTheme();
    const componentStyles = styles(theme);
    
    return(    
        <View style ={[componentStyles.mainContainer]}>
            <Text style={[componentStyles.title]}>My Groups</Text>    
        </View>
    );
};

const styles = (theme: Theme) => StyleSheet.create({
    mainContainer: {
        flex: 1,
        ...commonStyles.flexColFullCenter,
        backgroundColor: theme.colors.background,
    },
    title: {
        ...theme.fonts.header
    }
});

export default Groups;
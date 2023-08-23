import { StyleSheet, View } from "react-native";
import { Theme, useTheme } from "../theme";

const Underline = () => {

    const theme = useTheme();
    const componentStyles = UnderlineStyle(theme);

    return (
        <View style={componentStyles.underline}/>
    );
};

const UnderlineStyle = (theme: Theme) => StyleSheet.create({
    underline: {
        borderColor: theme.colors.highlights,
        borderBottomWidth: 3,
    }
});

export default Underline;
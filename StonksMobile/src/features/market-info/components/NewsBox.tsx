import { ReactElement } from "react";
import { Pressable, Text, View, Image, GestureResponderEvent, ImageStyle } from "react-native";
import * as WebBrowser from "expo-web-browser";

import { ThemedStyles, useThemedStyles } from "../../../hooks/useThemedStyles";
import { Theme, commonStyles, useTheme } from "../../../theme";
import { News } from "../types/News";
import useContainerSize from "../../../hooks/useContainerSize";

type NewsBoxProps = {
    news: News
}

const NewsBox = ({news}: NewsBoxProps): ReactElement => {
    const theme = useTheme();
    const componentStyles = useThemedStyles(styles);
    const {height: height, setter: setContainerSize} = useContainerSize();

    const formatUnixToDate = () => {
        const date = new Date(news.unixDateTime);
        const options: Intl.DateTimeFormatOptions = {
            month: "short",
            day: "2-digit",
            year: "numeric"
        }
        
        return date.toLocaleDateString("en-US", options)
    }

    return(
        <Pressable 
        style={({pressed}) => [{backgroundColor: pressed ? theme.colors.pressableIn : theme.colors.transparent}, componentStyles.mainContainer]}
        onPress={() => WebBrowser.openBrowserAsync(news.sourceUrl)}
        >
            <Text numberOfLines={1} style={[componentStyles.headline]}>{news.headline}</Text>
            <View 
            style={[componentStyles.bodyContainer]}
            onLayout={(e) => setContainerSize(e.nativeEvent.layout)}
            >
                <View style={[componentStyles.infoContainer]}>
                    <View style={[componentStyles.bylineContainer]}>
                        <Text style={[componentStyles.byline, {color: "white"}]}>{formatUnixToDate()} &#9679; </Text>
                        <Text style={[componentStyles.byline, {color: theme.colors.action}]}>{news.source}</Text>
                    </View>
                    <Text numberOfLines={2} style={[componentStyles.summary]}>{news.summary}</Text>
                </View>
                <Image source={{uri: news.imageUrl}} style={[imageStyle, {height: height * 0.9, width: height * 0.9}]}/>
            </View>
        </Pressable>
    )
};

//ThemedStyles type doesn't contain ImageStyle for now
const imageStyle: ImageStyle = {
    borderRadius: 8,
    alignSelf: "center",
}

const styles = (theme: Theme): ThemedStyles => ({
    mainContainer: {
        flex: 1,
        ...commonStyles.flexColCenter,
        marginVertical: 10,
        marginHorizontal: 5,
        borderRadius: 10,
        padding: 5,
    },
    bodyContainer: {
        flex: 1,
        ...commonStyles.flexRowCenter,
    },
    infoContainer: {
        flex: 1,
        ...commonStyles.flexColCenter,
        marginRight: 10,
    },
    bylineContainer: {
        flex: 1,
        ...commonStyles.flexRowStart,
        marginVertical: 2,
    },
    headline: {
        ...theme.fonts.header,
        fontSize: 16,
    },
    byline: {
        ...theme.fonts.subtext,
        fontSize: 13,
    },
    summary: {
        ...theme.fonts.regular,
        fontSize: 14,
        color: theme.fonts.subtext.color,

    },
});

export default NewsBox;
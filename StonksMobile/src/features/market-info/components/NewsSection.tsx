import { ReactElement } from "react";
import { View, Text } from "react-native"

import NewsBox from "./NewsBox";

import { Theme, commonStyles } from "../../../theme";
import { ThemedStyles, useThemedStyles } from "../../../hooks/useThemedStyles";
import { News } from "../types/News";


const NewsSection = (): ReactElement => {
    const componentStyles = useThemedStyles(styles);

    const fakeNews: News = {
        unixDateTime: 1569528720,
        headline: "How to disable comments on your YouTube videos in 2 different ways",
        imageUrl: "https://amp.businessinsider.com/images/5d8d16182e22af6ab66c09e9-1536-768.jpg",
        source: "Business Insider",
        summary: "You can disable comments on your own YouTube video if you don't want people to comment on it. It's easy to disable comments on YouTube by adjusting the settings for one of your videos in the beta or classic version of YouTube Studio. Visit Business Insider's homepage for more stories . The comments section has a somewhat complicated reputation for creators, especially for those making videos on YouTube . While it can be useful to get the unfiltered opinions of your YouTube viewers and possibly forge a closer connection with them, it can also open you up to quite a bit of negativity. So it makes sense that there may be times when you want to turn off the feature entirely. Just keep in mind that the action itself can spark conversation. If you decide that you don't want to let people leave comments on your YouTube video, here's how to turn off the feature, using either the classic or beta version of the creator studio: How to disable comments on YouTube in YouTube Studio (beta) 1. Go to youtube.com and log into your account, if necessary. 2.",
        sourceUrl: "https://www.businessinsider.com/how-to-disable-comments-on-youtube"
    }

    return(
        <View style={[componentStyles.mainContainer]}>
            <Text style={[componentStyles.titleMain]}>News</Text>
            <NewsBox news={fakeNews}/>
            <NewsBox news={fakeNews}/>
            <NewsBox news={fakeNews}/>
            <NewsBox news={fakeNews}/>
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
        ...theme.fonts.header,
        fontSize: 18,
        left: 5,                                
    },
    titlePrice: {
        ...theme.fonts.regular,
        fontSize: 22
    },
});

export default NewsSection;
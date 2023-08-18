import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

type Styles = ViewStyle | TextStyle | ImageStyle;


//The base common style sheet works on an atomic system where all the "const xxxStyle" are atomic styles that the stylesheet will then use to build 
//generic, common 'molecular' styles

const directions = ["Row", "Col"]
const AxisDirections = ["flex-start", "center", "flex-end"]

//naming conventions for container based styles:
// ALL start with 'flex'for responsiveness
// flex + 'direction of container' + position of main axis + Cross + optional postion of cross axis

const flexColumn : Styles = {
    flexDirection: "column"
};

const centerContainer : Styles = {
    justifyContent: "center",
    alignItems: "center"
}

const justifyEnd : Styles = {
    justifyContent: "flex-end"
}

const flexRow : Styles = {
    flexDirection: "row"
}

const justifyCenter : Styles = {
    justifyContent: "center"
}

const justifySpaceBW : Styles = {
    justifyContent: "space-between"
}

const alignCenter : Styles = {
    alignItems: "center"
}

const alignStart : Styles = {
    alignItems: "flex-start"
}

const alignEnd : Styles = {
    alignItems : "flex-end"
}

export const commonStyles = StyleSheet.create({
    flexColumn,
    centerContainer,


    //there is no flexColStart because flex-start is the default position of a column flex container
    flexColCenter: {
        ...flexColumn,
        ...centerContainer
    },
    flexColEnd: {
        ...flexColumn,
        ...justifyEnd
    },
    flexRowCenter: {
        ...flexRow,
        ...justifyCenter,
    },
    flexRowSpaceBW: {
        ...flexRow,
        ...justifySpaceBW,
    },
    flexRowStart: {
        //default justifyContent position is flex-start
        ...flexRow,
    },
    flexRowEnd: {
        ...flexRow,
        ...justifyEnd
    },
    flexColCenterCrossEnd: {
        ...flexColumn,
        ...alignEnd
    },

    devBorder: {
        borderColor: "#fff",
        borderWidth: 2
    }
});
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

//The base common style sheet works on an atomic system where all the "const xxxStyle" are atomic styles that the stylesheet will then use to build 
//generic, common 'molecular' styles

const directions = ["Row", "Col"]
const AxisDirections = ["flex-start", "center", "flex-end"]

//naming conventions for container based styles:
// ALL start with 'flex'for responsiveness
// flex + 'direction of container' + position of main axis + Cross + optional postion of cross axis

const flexColumn : ViewStyle = {
    flexDirection: "column"
};

const centerContainer : ViewStyle = {
    justifyContent: "center",
    alignItems: "center"
}

const justifyEnd : ViewStyle = {
    justifyContent: "flex-end"
}

const flexRow : ViewStyle = {
    flexDirection: "row"
}

const justifyCenter : ViewStyle = {
    justifyContent: "center"
}

const justifySpaceBW : ViewStyle = {
    justifyContent: "space-between"
}

const alignCenter : ViewStyle = {
    alignItems: "center"
}

const alignStart : ViewStyle = {
    alignItems: "flex-start"
}

const alignEnd : ViewStyle = {
    alignItems : "flex-end"
}

export const commonStyles = StyleSheet.create({
    flexColumn,
    centerContainer,


    //there is no flexColStart because flex-start is the default position of a column flex container
    flexColFullCenter: {
        ...flexColumn,
        ...centerContainer,
    },
    flexRowFullCenter: {
        ...flexRow,
        ...centerContainer,
    },
    flexColCenter: {
        ...flexColumn,
        ...justifyCenter,
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
        ...justifyCenter,
        ...alignEnd
    },
    flexRowEndCrossCenter: {
        ...flexRow,
        ...justifyEnd,
        ...alignCenter,
    },

    devBorder: {
        borderColor: "#fff",
        borderWidth: 2
    }
});
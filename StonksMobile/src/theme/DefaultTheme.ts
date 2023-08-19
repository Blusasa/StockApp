import type { Theme } from "./types"

export const DefaultTheme: Theme = {
    colors: {
        primary: "#E91EAC",
        background: "#160C33",
        highlights: "#B401FC",
        action: "#fecb61",
        transparent: "rgba(0,0,0,0)",
        text: "#ffffff",
        border: "",
        notification: "",
        pressableIn: "rgba(222, 222, 222, .3)",
        deltaPositive: "#00ff00",
        deltaNegative: "#ff0000",
    },
    fonts: {
        subtext: {
            fontFamily: "Poppins_300Light",
            fontWeight: "300",
            color: "#8e8D8D"
        },
        regular: {
            fontFamily: "Poppins_400Regular",
            fontWeight: "400",
            color: "#ffffff"
        },
        header: {
            fontFamily: "Poppins_600SemiBold",
            fontWeight: "normal",
            color: "#ffffff"
        },
        title: {
            fontFamily: "Poppins_400Regular",
            fontWeight: "normal",
            color: ""
        },
    }
}
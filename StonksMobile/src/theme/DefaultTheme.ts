import type { Theme } from "./types"

export const DefaultTheme: Theme = {
    colors: {
        primary: "#E91EAC",
        background: "#160C33",
        highlights: "",
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
            fontWeight: "300"
        },
        regular: {
            fontFamily: "Poppins_400Regular",
            fontWeight: "400"
        },
        header: {
            fontFamily: "Poppins_400Regular",
            fontWeight: "normal"
        },
        title: {
            fontFamily: "Poppins_400Regular",
            fontWeight: "normal"
        },
    }
}
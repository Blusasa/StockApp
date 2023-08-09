import { createContext, useContext } from "react";

import { Theme } from "./types";
import { DefaultTheme } from "./DefaultTheme";

const ThemeContext = createContext<Theme>(DefaultTheme);

export function useTheme(){
    const theme = useContext(ThemeContext);

    return theme;
}
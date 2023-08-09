type Colors = {
    primary: string,
    background: string,
    highlights: string,
    transparent: string,
    text: string,
    border: string,
    notification: string,
    pressableIn: string,
    deltaPositive: string,
    deltaNegative: string,
}

type FontStyles = {
    fontFamily: string,
    fontWeight: 
        | 'normal'
        | 'bold'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900'
}

export type Theme = {
    colors: Colors
    fonts: {
        subtext: FontStyles,
        regular: FontStyles,
        header: FontStyles,
        title: FontStyles
    }
}
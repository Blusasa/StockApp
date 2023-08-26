import { useState, Dispatch, SetStateAction } from "react";
import { LayoutRectangle } from "react-native";

function useContainerSize(): [number, number, Dispatch<SetStateAction<LayoutRectangle>>]
{
    const [iconContainerSize, setIconContainerSize] = useState<LayoutRectangle>({
        width: 0,
        height: 0,
        x: 0,
        y: 0
    });

    return [iconContainerSize.width, iconContainerSize.height, setIconContainerSize];
}

export default useContainerSize;
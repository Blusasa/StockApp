import { useState, Dispatch, SetStateAction } from "react";
import { LayoutRectangle } from "react-native";

function useContainerSize(): {width: number, height: number, setter: Dispatch<SetStateAction<LayoutRectangle>>}
{
    const [containerSize, setContainerSize] = useState<LayoutRectangle>({
        width: 0,
        height: 0,
        x: 0,
        y: 0
    });


    return {
        width: containerSize.width,
        height: containerSize.height,
        setter: setContainerSize
    };
}

export default useContainerSize;
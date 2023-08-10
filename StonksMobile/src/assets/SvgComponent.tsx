import { useState } from "react";
import { LayoutChangeEvent, LayoutRectangle, View } from "react-native";
import { SvgXml } from "react-native-svg"; 
import { commonStyles } from "../theme"

interface ISvgComponentProps{
  svgXml: string,
  dimensionMultipliers: {
    width: number,
    height: number
  }
}

const SvgComponent = (props: ISvgComponentProps): JSX.Element => {
  const [svgSize, setSvgSize] = useState<LayoutRectangle>({
    width: 0,
    height: 0,
    x: 0,
    y: 0
  });

  return(
    <View 
      style={[commonStyles.flexColumn, commonStyles.centerContainer]}
      onLayout={(e: LayoutChangeEvent) => setSvgSize(e.nativeEvent.layout)}
    >
      <SvgXml xml={props.svgXml} width={svgSize.width * props.dimensionMultipliers.width} height={svgSize.height * props.dimensionMultipliers.height}/>
    </View>
  )
}

export default SvgComponent;


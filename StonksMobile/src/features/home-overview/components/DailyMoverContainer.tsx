import { View, StyleSheet, FlatList, Text } from "react-native";
import { ReactElement } from "react";

import { Theme, commonStyles, useTheme } from "../../../theme";

import DailyMover from "./DailyMover";
import Movers from "../store/MoverConsts";

const DailyMoverContainer = () : ReactElement => {

  const theme = useTheme();
  const componentStyles = styles(theme);

  return (
    <View style={[componentStyles.container, commonStyles.devBorder]}>
      <Text style={[componentStyles.header]}>Daily Movers</Text>
      <FlatList
        data={Movers}
        renderItem={(mover) => <DailyMover key={mover.item.symbol} stockInfo={mover.item}/>}
        horizontal={true}
      />
    </View>
  );
};

const styles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    ...commonStyles.flexColCenter,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
  },
  header:{
    ...theme.fonts.header,
    fontSize: 22,
    left: 5,
    alignSelf: "flex-start",
  }
  
});

export default DailyMoverContainer;

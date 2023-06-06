import { View, StyleSheet, FlatList, Text } from "react-native";
import AppStyles from "../../globals/styles/AppStyles";

import DailyMover from "./DailyMover";
import Movers from "./Movers";

const DailyMoverContainer = () => {

  return (
    <View style={[AppStyles.flexContainer, AppStyles.mainApp, AppStyles.componentContainerBackground, styles.container]}>
      <Text style={[AppStyles.textSemiBold, AppStyles.componentHeader, styles.header]}>Daily Movers</Text>
      <FlatList
        data={Movers}
        renderItem={(mover) => <DailyMover key={mover.item.symbol} stockInfo={mover.item}/>}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    maxHeight: 175,
  },
  header:{
    left: 5
  }
  
});

export default DailyMoverContainer;

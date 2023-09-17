import { View, Text, StyleSheet } from "react-native";
import { ReactElement } from "react";

import GroupBox from "./GroupBox";
import { Theme, commonStyles, useTheme } from "../../../theme";
import { GroupInfo } from "../types/GroupInfoProps";

const UserGroups = () : ReactElement => {

    const theme = useTheme();
    const componentStyles = styles(theme);

    const DATA = [
        {
          "name": "Goofy Goobers",
          "place": 13,
          "totalInGroup": 30
        },
        {
          "name": "Jolly Jammers",
          "place": 9,
          "totalInGroup": 22
        },
        {
          "name": "Rockin' Rollers",
          "place": 1,
          "totalInGroup": 50
        },
        {
          "name": "Silly Swingers",
          "place": 2,
          "totalInGroup": 15
        },
        {
          "name": "Funky Fresh",
          "place": 3,
          "totalInGroup": 10
        },
        {
          "name": "Electric Eclectic",
          "place": 15,
          "totalInGroup": 35
        }
      ];

    return (
      <View style={[componentStyles.container]}>
          <Text style={[componentStyles.header]}>Group</Text>
          {DATA.map((value : GroupInfo, index : number) => (
            <GroupBox groupInfo={value} key={index}/>
          ))}
      </View>
    )
};

const styles = (theme : Theme) => StyleSheet.create({
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
    alignSelf: "flex-start"
  }
  
});

export default UserGroups;
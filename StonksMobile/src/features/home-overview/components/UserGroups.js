import { View, Text, StyleSheet } from "react-native";
import AppStyles from "../../../theme/AppStyles";
import GroupBox from "./GroupBox";

const UserGroups = () => {

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
        <View style={[AppStyles.flexContainer, AppStyles.componentContainerBackground, styles.container]}>
            <Text style={[AppStyles.text, AppStyles.componentHeader, styles.header]}>Group</Text>
            {DATA.map((value, index) => (
              <GroupBox groupInfo={value} key={index}/>
            ))}
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
  },
  header:{
    left: 5
  }
  
});

export default UserGroups;
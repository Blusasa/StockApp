import { LinearGradient } from "expo-linear-gradient";
import {View, Text, StyleSheet} from "react-native";
import { useState } from "react"

import { useTheme, commonStyles } from "../../../theme";

import CustomTextInput from "../../../components/CustomTextInput";
import CustomBtn from "../../../components/CustomButton";

const CreateAccount = ({navigation}) => {
  const [containerSize, setContainerSize] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0
  });

  const theme = useTheme();
  const componentStyles = styles(theme, containerSize.height);

  const submitInfo = () => {
      navigation.replace("MainAppPages");
  }

  return (
      <LinearGradient
        colors={['#B401FC', '#E91EAC']}
        locations={[0.65, 0.95]}
        style={[componentStyles.mainContainer]}
      >
        <Text style={[componentStyles.text]}>Create Account</Text>

        <View style={[componentStyles.fieldsContainer]}>
          <CustomTextInput placeholderText={"Username"} styles={{width: 300}} hideGradient={true}/>
          <CustomTextInput placeholderText={"Email"} styles={{width: 300}} hideGradient={true}/>
          <CustomTextInput placeholderText={"Phone Number"} styles={{width: 300}} hideGradient={true}/>
          <CustomTextInput placeholderText={"Password"} styles={{width: 300}} hideGradient={true}/>
          <CustomTextInput placeholderText={"Confirm Password"} styles={{width: 300}} hideGradient={true}/>
        </View>

        <CustomBtn text={"SUBMIT"} styles={{width: 150}} onPress={submitInfo}></CustomBtn>

      </LinearGradient>
  );
};

const styles = (theme) => StyleSheet.create({
  mainContainer: {
    flex: 1,
    ...commonStyles.flexColFullCenter,
  },
  fieldsContainer: {
    flex: 1,
    ...commonStyles.flexColCenter,
  },
  text: {
      ...theme.fonts.title,
      fontSize: 30,
  },
});

export default CreateAccount;
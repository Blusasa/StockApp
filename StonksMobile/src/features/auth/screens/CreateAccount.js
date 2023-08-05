import { LinearGradient } from "expo-linear-gradient";
import {Text, FlatList } from "react-native";

import CustomTextInput from "../../../components/CustomTextInput";
import AppStyles from "../../globals/styles/AppStyles";

import CustomBtn from "../../../components/CustomButton";
import PageStyles from "./FrontPageStyles";

const CreateAccount = ({navigation}) => {

  const submitInfo = () => {
      navigation.replace("MainAppPages");
  }

  const inputFields = [
    "Username",
    "Email",
    "Phone Number",
    "Password",
    "Confirm Password"
  ];

  return (
      <LinearGradient
        colors={['#B401FC', '#E91EAC']}
        locations={[0.65, 0.95]}
        style={AppStyles.flexContainer}
      >
        <Text style={[AppStyles.textSemiBold, PageStyles.text, {fontSize: 30}]}>Create Account</Text>

        {/* <FlatList
          data={inputFields}
          renderItem={({item}) => <CustomTextInput placeholderText={item} styles={{width: 350,}} hideGradient={true}/>}
          style={{flexShrink: 1, borderColor: "gold", borderWidth: 3}}
        ></FlatList> */}

        <CustomTextInput placeholderText={"Username"} styles={{width: 300}} hideGradient={true}/>
        <CustomTextInput placeholderText={"Email"} styles={{width: 300}} hideGradient={true}/>
        <CustomTextInput placeholderText={"Phone Number"} styles={{width: 300}} hideGradient={true}/>
        <CustomTextInput placeholderText={"Password"} styles={{width: 300}} hideGradient={true}/>
        <CustomTextInput placeholderText={"Confirm Password"} styles={{width: 300}} hideGradient={true}/>

        <CustomBtn text={"SUBMIT"} styles={{width: 150}} onPress={submitInfo}></CustomBtn>

      </LinearGradient>
  );
};

const pageStyles = StyleSheet.create({
  text: {
      fontSize: 70,
      textShadowColor: "#000000",
      textShadowOffset: { width: 5, height: 5},
      elevation: 5
  },
});

export default CreateAccount;
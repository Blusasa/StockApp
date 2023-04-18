import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TextInput, Button, FlatList } from "react-native";

import SplashStyles from "../frontPage/FrontPageStyles"
import AppStyles from "../../globals/styles/AppStyles";
import CustomTextInput from "../../components/CustomTextInput";
import CustomBtn from "../../components/CustomButton";
import FrontPageStyles from "../frontPage/FrontPageStyles";

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
        <Text style={[AppStyles.textSemiBold, FrontPageStyles.text, {fontSize: 30}]}>Create Account</Text>

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

export default CreateAccount;
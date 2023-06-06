import { View, Text, TextInput, Button,StyleSheet, TouchableOpacity,useState } from "react-native";
import AppStyles from "../../globals/styles/AppStyles";

const Profile = () => {
    const name = "John";
    const username = "johnDoe";
    const email = "johnDoe@gmail.com"
    return (
        <View style={[AppStyles.flexContainer, AppStyles.mainApp]}>
            <Text style={AppStyles.textSemiBold}>My Profile</Text>
            <View >
            <View style={styles.container}>
                <Text style={styles.header}>Personal Info</Text>
                <Text style={styles.label} >Name:{name}</Text>
                <Text style={styles.header2}>Account Info</Text>
                <Text style={styles.label}>Username: {username}</Text>
                <Text style = {styles.label}>Email: {email}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>RESET ACCOUNT FINANCIALS</Text>
                </TouchableOpacity>
                <Text style={styles.header2}>Security</Text>
                <Text style={styles.label}>Change Password</Text>
                <Text style={styles.label}>Hide Asset info</Text>
        </View>
         </View>
    </View>
        
  );

    
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontSize: 40,
      color: 'white',
      borderBottomWidth: 2,
      borderBottomColor: '#B401FC',
      paddingRight: 30, 
    },
    header2: {
        fontSize: 40,
        color: 'white',
        borderBottomWidth: 2,
        borderBottomColor: '#B401FC',
        paddingRight: 30, 
        paddingTop:120
      },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginRight: 10,
      color :"white"
    },
    button: {
        backgroundColor: '#EB2121',
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 14,
      },
  });

export default Profile;
import { View, Text, TextInput, Button } from "react-native";
import appStyles2 from "../../globals/styles/AppStyles2";
import AppStyles from "../../globals/styles/AppStyles";

const Profile = () => {
    return (
        <View style={[AppStyles.flexContainer, AppStyles.mainApp]}>
            <Text style={AppStyles.textSemiBold}>My Profile</Text>
        </View>

    );
};

export default Profile;
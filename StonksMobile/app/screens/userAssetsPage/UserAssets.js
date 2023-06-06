import { View, Text } from "react-native";
import AppStyles from "../../globals/styles/AppStyles";

const UserAssets = () => {
    return (
        <View style={[AppStyles.flexContainer, AppStyles.mainApp]}>
            <Text style={AppStyles.textSemiBold}>My Assets</Text>
        </View>

    );
}

export default UserAssets;
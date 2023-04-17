import AppStyles from "../../globals/styles/AppStyles";
import { View, Text} from "react-native";
const Groups = () =>{
    return(
        
        <View style ={[AppStyles.flexContainer, AppStyles.mainApp]}>
        <Text style={AppStyles.textSemiBold}>My Groups</Text>
        
    </View>
        
        );
};
export default Groups;
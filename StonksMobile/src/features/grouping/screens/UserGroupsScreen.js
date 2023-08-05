import { View, Text} from "react-native";

import AppStyles from "../../../theme/AppStyles";

const Groups = () =>{
    return(
        
        <View style ={[AppStyles.flexContainer, AppStyles.mainApp]}>
        <Text style={AppStyles.textSemiBold}>My Groups</Text>
        
    </View>
        
        );
};
export default Groups;
import { useState, useEffect } from "react";
import { View,Text} from "react-native";
import appStyles2 from "../../globals/styles/AppStyles";
import api from "../../api/Api";
import endpoints from "../../api/Endpoints";

const PricesComponent = ()=>{
 const [qouteData, setQouteData] = useState(undefined);
useEffect(()=>{
    api.get(endpoints.getQoute('AAPL'))
    .then((res) => {
        console.log(res.data);
        setQouteData(res.data);
    }).catch((err) => {});
}, []);


 return (
    <View style ={appStyles2.flexContainer}>

        <Text style = {appStyles2.text}>{qouteData}</Text>
    </View>
 );
};

export default PricesComponent;
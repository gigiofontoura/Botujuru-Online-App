import { View, Text } from "react-native";
import Header from "../../components/Header"
import BottomTab from "../../components/ButtonTab"

export default function HealthScreen({navigation}){
    return(
        <View style={{flex: 1}}>
            <Header title="Saúde" navigation={navigation}/>
            <BottomTab navigation={navigation}/>
        </View>
    )
};


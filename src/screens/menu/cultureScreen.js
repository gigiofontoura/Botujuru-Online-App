import { View, Text } from "react-native";
import Header from "../../components/Header"
import BottomTab from "../../components/ButtonTab"

export default function CultureScreen({navigation}){
    return(
        <View style={{flex: 1}}>
            <Header title="Cultura" navigation={navigation}/>
            <BottomTab navigation={navigation}/>
        </View>
    )
};


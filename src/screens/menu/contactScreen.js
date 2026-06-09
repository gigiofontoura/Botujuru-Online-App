import { View, Text } from "react-native";
import Header from "../../components/Header"
import BottomTab from "../../components/ButtonTab"

export default function CultureScreenScreen({navigation}){
    return(
        <View style={{flex: 1}}>
            <Header title="Contato" navigation={navigation}/>
            <BottomTab navigation={navigation}/>
        </View>
    )
};


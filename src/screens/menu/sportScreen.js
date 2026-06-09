import { View, Text } from "react-native";
import Header from "../../components/Header";
import BottomTab from "../../components/ButtonTab";

export default function SportScreen({navigation}){
    return(
        <View style={{flex:1}}>
            <Header title="Esportes" navigation={navigation}></Header>
            <BottomTab navigation={navigation}/>
        </View>
    )
};


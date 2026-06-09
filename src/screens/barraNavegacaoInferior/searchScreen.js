import { View, Text } from "react-native";
import Header from "../../components/Header";
import BottomTab from "../../components/ButtonTab"; 

export default function SearchScreen({navigation}){
    return(
        <View style={{flex: 1}}>
            <Header></Header>
            <BottomTab navigation={navigation}></BottomTab>
        </View>
    )
};


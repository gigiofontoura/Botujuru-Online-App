import { View, Text } from "react-native";
import BottomTab from "../../components/ButtonTab"; 

export default function ProfileScreen({navigation}){
    return(
        <View style={{flex: 1}}>
            <BottomTab navigation={navigation}></BottomTab>
        </View>
    )
};


import { View, Text, StyleSheet, Image} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Header from "../../components/Header"
import BottomTab from "../../components/ButtonTab"

export default function FormScreen({navigation}){
    return(
        <View style={{flex: 1}}>
            <Header title="Formulário" navigation={navigation}/>
            <BottomTab navigation={navigation}/>
        </View>
    )
};



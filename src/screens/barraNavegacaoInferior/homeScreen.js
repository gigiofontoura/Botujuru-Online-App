import { View, Text, StyleSheet} from "react-native"
import Header from "../../components/Header"
import BottomTab from "../../components/ButtonTab"

export default function HomeScreen({navigation}){
    return(
        <View style={{flex: 1}}>
           <Header title="Útimas Notícias" navigation={navigation}/>
            <BottomTab navigation={navigation}/>
        </View>
    )
}

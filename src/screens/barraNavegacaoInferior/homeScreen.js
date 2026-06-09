import { View, Text, StyleSheet} from "react-native"
import Header from "../../components/Header"

export default function HomeScreen({navigation}){
    return(
        <View>
           <Header title="Útimas Notícias" navigation={navigation}/>
            
        </View>
    )
}

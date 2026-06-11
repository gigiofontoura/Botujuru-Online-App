import { View, Text, StyleSheet, Image} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Header from "../../components/Header"
import BottomTab from "../../components/ButtonTab"
import { SafeAreaView } from "react-native-safe-area-context";

export default function SportScreen({navigation}){
    return(
        // View da página toda //
        <SafeAreaView style={{flex: 1}} edges={["bottom"]}>
           <Header title="Esportes" navigation={navigation}/>
            

            {/*View de todas as notícias*/}
            <View style={styles.container}>

                {/*View de uma única notícia*/}
                <View style={styles.containerNew}>
                    <Image source={require("../../../assets/esportes1.png")} style={styles.image}/>

                    {/*View dos textos da notícia*/}
                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 14, opacity: 0.60}}>Esportes</Text>
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>CAMPO LIMPO PAULISTA 2026: Futebol Amador e esportes em destaque na cidade.</Text>
                    </View>

                    {/*View do tempo de postagem*/}
                    <View style={styles.time}>
                        <Ionicons name="time-outline" size={12}/>
                        <Text style={{fontSize: 11}}>29 de maio</Text>
                    </View>
                </View>

                {/*View de uma única notícia*/}
                <View style={styles.containerNew}>
                    <Image source={require("../../../assets/esportes2.png")} style={styles.image}/>

                    {/*View dos textos da notícia*/}
                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 14, opacity: 0.60}}>Esportes</Text>
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>CAMPO LIMPO PAULISTA 2026: Cidade
                        abre inscrições para equipes de base de futsal feminino</Text>
                    </View>

                    {/*View do tempo de postagem*/}
                    <View style={styles.time}>
                        <Ionicons name="time-outline" size={12}/>
                        <Text style={{fontSize: 11}}>28 de maio</Text>
                    </View>
                </View>

            </View>

            <BottomTab navigation={navigation}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        gap: 20,
        marginTop: 30,
        
    },
    containerNew:{
        width:"75%",
        gap: 10,
    },

    image:{
        width: "100%",
        height: 210,

    },
    time:{
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "flex-end",
        opacity: 0.60,
    }
    
})
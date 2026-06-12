import { View, Text, StyleSheet, Image, ScrollView} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Header from "../../components/Header"
import BottomTab from "../../components/ButtonTab"
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PoliticScreen({navigation}){

    const insets = useSafeAreaInsets();

    return(
        // View da página toda //
        <SafeAreaView style={{flex: 1}} edges={["bottom"]}>
           <Header title="Política" navigation={navigation}/>
 
            <ScrollView contentContainerStyle={{ paddingBottom: 70 + insets.bottom }}>
            {/*View de todas as notícias*/}
            <View style={styles.container}>

                {/*View de uma única notícia*/}
                <View style={styles.containerNew}>
                    <Image source={require("../../../assets/politica1.png")} style={styles.image}/>

                    {/*View dos textos da notícia*/}
                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 14, opacity: 0.60}}>Política</Text>
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>Prefeito Adeildo Nogueira veta projeto que prevê aumento salarial para  cargos da câmara de vereadores.</Text>
                    </View>

                    {/*View do tempo de postagem*/}
                    <View style={styles.time}>
                        <Ionicons name="time-outline" size={12}/>
                        <Text style={{fontSize: 11}}>5h atrás</Text>
                    </View>
                </View>

                {/*View de uma única notícia*/}
                <View style={styles.containerNew}>
                    <Image source={require("../../../assets/politica2.png")} style={styles.image}/>

                    {/*View dos textos da notícia*/}
                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 14, opacity: 0.60}}>Política</Text>
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>Cidade recebe Gustavo Martinelli, prefeito de Jundiaí</Text>
                    </View>

                    {/*View do tempo de postagem*/}
                    <View style={styles.time}>
                        <Ionicons name="time-outline" size={12}/>
                        <Text style={{fontSize: 11}}>22 de maio</Text>
                    </View>
                </View>

                <View style={styles.containerNew}>
                    <Image source={require("../../../assets/politica3.png")} style={styles.image}/>

                    {/*View dos textos da notícia*/}
                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 14, opacity: 0.60}}>Política</Text>
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>Dika Xique - Xique a voz da inclusão e dos esportes.</Text>
                    </View>

                    {/*View do tempo de postagem*/}
                    <View style={styles.time}>
                        <Ionicons name="time-outline" size={12}/>
                        <Text style={{fontSize: 11}}>23 de abril</Text>
                    </View>
                </View>

            </View>

            </ScrollView>
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
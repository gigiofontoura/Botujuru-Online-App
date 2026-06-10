import { View, Text, StyleSheet, Image} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Header from "../../components/Header"
import BottomTab from "../../components/ButtonTab"

export default function HomeScreen({navigation}){
    return(
        // View da página toda //
        <View style={{flex: 1}}>
           <Header title="Útimas Notícias" navigation={navigation}/>
            <BottomTab navigation={navigation}/>

            {/*View de todas as notícias*/}
            <View style={styles.container}>

                {/*View de uma única notícia*/}
                <View style={styles.containerNew}>
                    <Image source={require("../../../assets/saude1.png")} style={styles.image}/>

                    {/*View dos textos da notícia*/}
                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 14, opacity: 0.60}}>Saúde</Text>
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>Campo Limpo Paulista recebe nova ambulância do governo estadual</Text>
                    </View>

                    {/*View do tempo de postagem*/}
                    <View style={styles.time}>
                        <Ionicons name="time-outline" size={12}/>
                        <Text style={{fontSize: 11}}>3h atrás</Text>
                    </View>
                </View>

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

            </View>


        </View>
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
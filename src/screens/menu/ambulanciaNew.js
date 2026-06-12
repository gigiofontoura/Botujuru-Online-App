import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Header from "../../components/Header"
import BottomTab from "../../components/ButtonTab"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../../components/Input";



export default function HomeScreen({navigation}){

    const insets = useSafeAreaInsets();

    return(
        // View da página toda //
        <SafeAreaView style={{flex: 1}} edges={["bottom"]}>
           <Header navigation={navigation}/>
            
            <ScrollView contentContainerStyle={{ paddingBottom: 70 + insets.bottom }}>
                
            <View style={styles.container}>
                
                
                <View style={styles.containerNew} onPress={() => navigation.navigate("AmbulanciaNew")}>
                    <Text style={{fontSize: 24, fontWeight: "bold"}}>Campo Limpo Paulista recebe nova ambulância do governo estadual.</Text>
                    <Image source={require("../../../assets/saude1.png")} style={styles.image}/>
                    <Text  style={{fontSize: 14, fontWeight: "bold"}}>Por Cleber Aguiar{"\n"}</Text>
                    <Text style={{fontSize: 16}}>
                        

                        Amigos do Botujuru Online, na segunda-feira (4), o prefeito de Campo Limpo Paulista, Adeildo Nogueira, e o secretário municipal de Saúde, receberam uma ambulância 0 km enviada pelo governo do Estado de São Paulo. “O governador Tarcísio entendeu a necessidade do município que apresentamos em reunião e contemplou a cidade”, pondera o prefeito.{"\n"}{"\n"}

                        deildo destaca, ainda, a disposição do deputado estadual André do Prado que fez a interlocução com o secretário estadual da Saúde, Eleuses Paiva. “Saber que podemos contar com esta articulação no âmbito estadual amplia as possibilidades e garante mais qualidade dos serviços prestados à população”, afirma.{"\n"}{"\n"}

                        ESTRUTURA – A nova ambulância tem motorização a diesel, sistemas de freios ABS e direção assistida, além de climatização completa tanto na cabine quanto no compartimento de passageiros. Também foi realizada uma adaptação para remoção eletiva de pacientes e possuem compartimento assistido com maca retrátil, sistema de oxigênio, iluminação em LED, mobiliário para apoio ao atendimento e sinalização visual e sonora de alta intensidade.{"\n"}{"\n"}

                        Departamento de Comunicação Social{"\n"}

                        Prefeitura de Campo Limpo Paulista
                    </Text>
                    
                    <View style={styles.icone}>
                        <Ionicons name="heart-outline" size={30} />
                        <Ionicons name="bookmark-outline" size={30}/>
                    </View>

                    <View>
                        <View style={styles.comentariosHeader}>
                            <Text style={{fontSize: 16, fontWeight: "bold"}}>Comentários</Text>
                        </View>
                        
                        <View style={styles.comentario}>
                            <View style={styles.comentarioNome}>
                                <Ionicons name="person-circle-outline" size={30} />
                                <Text style={{fontWeight: "bold"}}>Carlos </Text>
                            </View>
                            <Text style={{marginLeft: 40}}>Ótima iniciativa da prefeitura.</Text>
                        </View>
                        
                        <View style={styles.comentario}>
                            <View style={styles.comentarioNome}>
                                <Ionicons name="person-circle-outline" size={30} />
                                <Text style={{fontWeight: "bold"}}>Fernanda</Text>
                            </View>
                            <Text style={{marginLeft: 40, marginBottom: 20}}>Minha mãe precisou de ambulância ano passado e demorou muito. Tomara que melhore agora.</Text>
                        </View>
                        
                        <Input placeholder="Escreva um comentário..."/>

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
        alignItems: "center",
        gap: 30,
        
        
    },
    containerNew:{
        width:"75%",
        gap: 10,
    },

    image:{
        width: "100%",
        height: 210,

    },

    icone:{
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    comentariosHeader: {
        alignItems: "center"
    },

    comentarioNome: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },

    comentario:{
        marginTop: 20,
    },

})
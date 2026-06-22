import { View, Text, StyleSheet, Image, ScrollView} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Header from "../../components/Header"
import BottomTab from "../../components/ButtonTab"
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function CultureScreen({navigation}){

    const insets = useSafeAreaInsets();

    return(
        <SafeAreaView style={{flex: 1}} edges={["bottom"]}>
           <Header title="Cultura" navigation={navigation}/>
            
            <ScrollView contentContainerStyle={{ paddingBottom: 70 + insets.bottom }}>
        
            <View style={styles.container}>

                <View style={styles.containerNew}>
                    <Image source={require("../../../assets/cultura1.png")} style={styles.image}/>

                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 14, opacity: 0.60}}>Cultura</Text>
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>🌱 Que tal levar mais verde para a sua casa?</Text>
                    </View>

                    <View style={styles.time}>
                        <Ionicons name="time-outline" size={12}/>
                        <Text style={{fontSize: 11}}>29 de maio</Text>
                    </View>
                </View>

                <View style={styles.containerNew}>
                    <Image source={require("../../../assets/cultura2.png")} style={styles.image}/>

                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 14, opacity: 0.60}}>Cultura</Text>
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>Cidade recebe evento Federal Kids com foco na proteção das crianças.</Text>
                    </View>

                    <View style={styles.time}>
                        <Ionicons name="time-outline" size={12}/>
                        <Text style={{fontSize: 11}}>22 de maio</Text>
                    </View>
                </View>

                <View style={styles.containerNew}>
                    <Image source={require("../../../assets/cultura3.png")} style={styles.image}/>

                    <View style={styles.textContainer}>
                        <Text style={{fontSize: 14, opacity: 0.60}}>Cultura</Text>
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>Escola Governador André Franco Montoro recebe ação da Prefeitura voltada às famílias.</Text>
                    </View>

                    <View style={styles.time}>
                        <Ionicons name="time-outline" size={12}/>
                        <Text style={{fontSize: 11}}>14 de maio</Text>
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
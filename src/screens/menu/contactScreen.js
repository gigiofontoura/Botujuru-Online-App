import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../../components/Header"
import BottomTab from "../../components/ButtonTab"

export default function ContactScreen({navigation}){
    return(
        <View style={{flex: 1}}>

            <Header title="Contato" navigation={navigation}/>
            <BottomTab navigation={navigation}/>

            <View style={styles.container}>
                <TouchableOpacity style={styles.contact}>
                    <Text style={{fontSize: 16}} onPress={() => navigation.navigate("Form")}>Fale com a gente</Text>
                </TouchableOpacity>
                <View style={styles.contact}>
                    <Ionicons name="logo-whatsapp" size={24} color="green" />
                    <Text style={{fontSize: 16}}>(11) 96063-5762</Text>
                </View>
                
                 <View style={styles.contact}>
                    <Ionicons name="mail" size={24}/>
                    <Text style={{fontSize: 16}}>botujuruonline@gmail.com</Text>
                </View>
            </View>

            <View style={styles.socialMedia}>
                <Text style={{fontSize: 24}}>Redes Sociais</Text>
                <View style={styles.iconesSocial}> 
                    <Ionicons name="logo-facebook" size={30}/>
                    <Ionicons name="logo-instagram" size={30} />
                    <Ionicons name="logo-youtube" size={30}/>
                    <Ionicons name="logo-twitter" size={30}/>
                </View>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        
    },

    contact:{
        gap: 10,
        flexDirection: "row",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        padding: 20,
        marginHorizontal: 20,
    },

    socialMedia:{
        marginTop: 40,
        gap: 10,
        alignItems: "center",
    },

    iconesSocial:{
        flexDirection: "row",
        justifyContent: "space-around",
        width: 194,
    }

})


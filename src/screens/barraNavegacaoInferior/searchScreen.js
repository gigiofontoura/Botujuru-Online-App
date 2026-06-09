import {View, Text, TextInput, StyleSheet, TouchableOpacity, Image} from "react-native"
import { Input } from "../../components/Input"
import { Feather } from "@expo/vector-icons";
import { Title } from "react-native-paper";

export default function SearchScreen(){
    return(
        <View style={styles.container}>
           <View style={styles.header}>

        <View style={styles.searchContainer}>
            <Feather
                name="search"
                size={20}
                color="gray"
            />

            <TextInput placeholder="Pesquisar" style={styles.input}/>

        </View>

        <Text style={styles.Title}>
            Última Notícia

        </Text>

        <View style={styles.News}>
            <Image source={require("../../../assets/saude1.png")} style={styles.newsImage}/>
            <Text style={styles.Noticia}>Campo Paulista recebe nova ambulância do governo estadual.</Text>

        </View>


           </View>
        </View>
    )
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        paddingTop: 70, 
        paddingHorizontal: 25,
        alignItems: "center",
    },
        searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: 220,
        height: 45,
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: "white",
    },

    Title: {
        marginTop: 5,
        fontSize: 22,
        fontWeight: "bold",
        fontFamily: "inter",
        color: "#4D9F55"
    },

    header:{
        gap: 20,
    },

    Noticia:{
        fontFamily: "inter",
        fontSize: 15,
        gap: 10,
        paddingTop: 20,
        
    },

  
})
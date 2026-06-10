import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import BottomTab from "../../components/ButtonTab"; 
import {Input} from "../../components/Input";

export default function ProfileScreen({navigation}){
    return (
    <SafeAreaView style={styles.container}>

        <BottomTab navigation={navigation}/>

        <View style={styles.header}>
            <Ionicons name="arrow-back" size={24} />
            <Ionicons name="settings-outline" size={24} />
        </View>

        <View style={styles.perfil}>
            <Text style={{fontSize: 20}}>Perfil</Text>
            <Ionicons name="person-circle-outline" size={120} />
        </View>

        <View style={styles.inputs}>
            <View style={styles.input}>
                <Text style={{fontSize: 16, paddingHorizontal: 5}}>nome de usuário</Text>
                <Input placeholder="Lorem Ipsum"/>
            </View>

            <View style={styles.input}>
                <Text style={{fontSize: 16, paddingHorizontal: 5}}>email</Text>
                <Input placeholder="loremipsum@gmail.com"/>
            </View>

            <View style={styles.input}>
                <Text style={{fontSize: 16, paddingHorizontal: 5}}>celular</Text>
                <Input placeholder="(11) 99999-9999"/>
            </View>

            <View style={styles.containerBookmark}>
                <View style={styles.bookmark}>
                    <Ionicons name="bookmark-outline" size={24} />
                    <Text style={{fontSize: 16}}>Notícias salvas</Text>
                </View>
                <Ionicons name="chevron-forward-outline" size={24} />
            </View>
           
            
        

        </View>
        
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 50,
    },

    header:{
        flexDirection: "row",
        justifyContent: "space-between",
    },

    perfil:{
        alignItems: "center",
    },

    input:{
        gap: 10,
    },

    inputs:{
        gap: 20,
        marginTop: 30,
    },

    bookmark:{
        gap: 5,
        flexDirection: "row",
        alignItems: "center",
    },

    containerBookmark:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    }
})
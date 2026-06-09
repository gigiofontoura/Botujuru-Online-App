import {View, Text, TextInput, StyleSheet} from "react-native"
import {GreenButton} from "../../components/Button"
import { Input } from "../../components/Input"


export default function SignUpScreen({navigation}){
    return(
        <View style={styles.container}>

            <View style={styles.headerContainer}>
            <Text style={styles.textHeader}>Realize seu cadastro</Text>
            </View>

        <View style={styles.form}>
            <Input placeholder= "Digite seu email"></Input>
            <Input placeholder= "Crie uma senha"></Input>
            <Input placeholder= "Repita sua senha"></Input>


        </View>

        <GreenButton title="Completar Cadastro" onPress={() => navigation.replace("MainApp")}></GreenButton>

        </View>


    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        gap: 40,
        alignItems: "center",
        marginTop: 160,
    },

    form:{
        gap: 35,

    }
})
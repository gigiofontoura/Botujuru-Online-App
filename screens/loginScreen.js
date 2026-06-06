import {View, Text, TextInput, StyleSheet} from "react-native"
import Checkbox from "expo-checkbox"
import GreenButton from "../components/Button"


export default function LoginScreen(){
    return (
    <View style={styles.container}>

        <View style={styles.headerContainer}>
            <Text style={styles.textHeader}>Login</Text>
        </View>
        
        <View style={styles.form}>
            <TextInput style={styles.inputArea} placeholder="email"></TextInput>
            <TextInput style={styles.inputArea} placeholder="senha"></TextInput>
        </View>

        <View style={styles.passwordOptions}>
           <View style={styles.checkboxContainer}>
            <Checkbox/>
            <Text>lembrar de mim</Text>
           </View>
            <Text style={{color: "#4D9F55"}}>esqueci a senha</Text>
        </View>
        
        <GreenButton title="Fazer Login"></GreenButton>
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

    headerContainer: {
        width: 331,

    },

    textHeader: {
        fontSize: 32,
        fontFamily: "Inter",
    },

    form: {
        gap: 35,
    },

    inputArea: {
        width: 331,
        height: 52,
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 20,
    },

    passwordOptions: {
        flexDirection: "row",
        width: 331,
        justifyContent: "space-between",
        alignItems: "center",
    },

    checkboxContainer: {
        flexDirection: "row",
        gap: 8,
    }
}
)
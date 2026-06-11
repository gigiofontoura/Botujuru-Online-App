import { View, Text, StyleSheet, Image} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import Header from "../../components/Header"
import BottomTab from "../../components/ButtonTab"
import { Input } from "../../components/Input"
import {GreenButton} from "../../components/Button"


export default function Form({navigation}){
    return(
        <View style={{flex: 1}}>
            <Header title="Formulário" navigation={navigation}/>
            <BottomTab navigation={navigation}/>

         <View style={styles.container}>

                    <View style={styles.headerContainer}>
                    <Text style={styles.textHeader}></Text>
                    </View>

                <View style={styles.form}>

                    <View style={styles.row}>
                    <Input placeholder= "Nome"  width={160}></Input>
                    <Input placeholder= "Sobrenome"  width={160}></Input>

                    </View>

                    <View style={styles.row}>
                    <Input placeholder= "Email"  width={160}></Input>
                    <Input placeholder= "Telefone"  width={160}></Input>

                    </View>
                    <Input placeholder= "Endereço" ></Input>
                    <Input placeholder= "Digite sua mensagem aqui"></Input>

                </View>

                <GreenButton title="Enviar" onPress={() => navigation.replace("Home")}></GreenButton>
                </View>


                </View>


)
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        gap: 20,
        marginTop: 30,

    },

    form:{
        gap: 15,

    },

    row:{ 
    gap: 10,
    flexDirection: "row",
    }

})
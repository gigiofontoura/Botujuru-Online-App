import { Modal, View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MenuModal({visible, setVisible, navigation}){
    return(
        <Modal visible={visible}  animationType="slide">
            <View>

                <TouchableOpacity onPress={() => setVisible(false)} style={{marginBottom: 20}}>
                    <Ionicons name="arrow-back" size={20} color="black"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {setVisible(false); navigation.navigate("sportScreen")}}>
                    <Text>Esportes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("healthScreen")}>
                    <Text>Saúde</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("politicScreen")}>
                    <Text>Política</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("cultureScreen")}>
                    <Text>Cultura</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("contactScreen")}>
                    <Text>Contato</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
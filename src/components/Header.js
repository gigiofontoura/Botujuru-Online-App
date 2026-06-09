import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import MenuModal from "./MenuModal";


export default function Header({title, navigation}){
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={{fontSize: 24, fontWeight: "bold"}}>
                    {title}
                </Text>
                <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.menuIcon}>
                    <Ionicons name="menu" size={35}/>
                </TouchableOpacity>
            </View>

            <MenuModal visible={menuVisible} setVisible={setMenuVisible} navigation={navigation}/>
        </>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100,
        paddingBottom: 30,
    },

    menuIcon: {
        position: "absolute",
        right: 30,
        top: 100,
    }
})







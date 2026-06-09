import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import MenuModal from "./MenuModal";

export default function Header({title, navigation}){
    const [menuVisible, setMenuVisible] = useState(false);

    return (
        <>
            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center",
                paddingHorizontal: 20, paddingTop: 20,
            }}>
                <Text style={{fontSize: 24, fontWeight: "bold"}}>
                    {title}
                </Text>
                <TouchableOpacity onPress={() => setMenuVisible(true)}>
                    <Ionicons name="menu" size={30}/>
                </TouchableOpacity>
            </View>

            <MenuModal visible={menuVisible} setVisible={setMenuVisible} navigation={navigation}/>
        </>
    )
}


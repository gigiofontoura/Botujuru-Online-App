import { Modal, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function MenuModal({visible, setVisible, navigation}){
    return(
        <Modal visible={visible}  animationType="slide">
            <View style={styles.screen}>

                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => setVisible(false)} style={styles.icon}>
                        <Ionicons name="arrow-back" size={30} color="black"/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 24, fontWeight: "bold"}}>Menu</Text>
                </View>
                
                <View style={styles.containerButtons}>
                    <TouchableOpacity onPress={() => navigation.navigate("Health")} style={styles.Button}>
                        <Text style={styles.textMenu}>Saúde</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Politic")} style={styles.Button}>
                        <Text style={styles.textMenu}>Política</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Culture")} style={styles.Button}>
                        <Text style={styles.textMenu}>Cultura</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Contact")} style={styles.Button}>
                        <Text style={styles.textMenu}>Contato</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
  },
    
  headerContainer:{
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    marginBottom: 30,
  },

  icon: {
    position: "absolute",
    left: 30,
  },

  containerButtons:{
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    marginLeft: 30,
    marginRight: 30,
  },

  Button:{
    width: "100%",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  textMenu:{
    fontSize: 20,
  }
})


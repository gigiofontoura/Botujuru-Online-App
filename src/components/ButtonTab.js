import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BottomTab({ navigation }) {
const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { bottom: insets.bottom }]}>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Ionicons name="home" size={24} />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <Ionicons name="search" size={24} />
        <Text>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Sport")}>
        <Ionicons name="football" size={24} />
        <Text>Esportes</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Ionicons name="person" size={24} />
        <Text>Perfil</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "white",
  },
});

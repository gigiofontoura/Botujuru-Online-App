import { View, Text, StyleSheet} from "react-native"

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textHeader}> Últimas Notícias</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    header: {
        width: "100%",
        paddingHorizontal: 50,
        alignItems: "center",
        backgroundColor: "red",
    },

    textHeader: {
        fontFamily: "System",
        fontSize: 20,
    }
})
import { Text, TouchableOpacity, StyleSheet} from "react-native";

export default function GreenButton({title}){
    return(
        <TouchableOpacity style={styles.greenButton}>
            <Text style={styles.greenButtonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    greenButton: {
        borderWidth: 1,
        width: 271,
        height: 52,
        borderColor: "#000000",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4D9F55",
        
    },

    greenButtonText: {
        fontSize: 16,
        color: "#FFF",
        fontWeight:"bold",
    }
})
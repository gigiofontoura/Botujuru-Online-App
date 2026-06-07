import { Text, TouchableOpacity, StyleSheet} from "react-native";

export function GreenButton({title, onPress}){
    return(
        <TouchableOpacity style={styles.greenButton} onPress={onPress}>
            <Text style={styles.greenButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}

export function WhiteButton({title}){
    return(
        <TouchableOpacity style={styles.whiteButton}>
            <Text style={styles.whiteButtonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    greenButton: {
        width: 271,
        height: 52,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4D9F55",
        
    },

    greenButtonText: {
        fontSize: 16,
        color: "#FFF",
        fontWeight:"bold",
    },

    whiteButton: {
        width: 271,
        height: 52,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D9D9D9",
    },

    whiteButtonText:{
        fontSize: 16,
        color: "#4D9F55",
        fontWeight:"bold",
    }
})


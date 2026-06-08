import {Text, TextInput, StyleSheet} from "react-native"

export function Input({placeholder, width = 331}){
    return(
            <TextInput style={[styles.inputArea, {width}]} placeholder={placeholder}></TextInput>
    )
}

const styles = StyleSheet.create({
    inputArea: {
        paddingHorizontal: 20,
        height: 52,
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 20,
    },
    
})
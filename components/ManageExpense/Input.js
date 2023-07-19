import {TextInput, View, Text, StyleSheet} from "react-native";
import {GlobalStyles} from "../../constants/styles";

function Input({label, textInputConfig}) {
    return <View style={styles.inputContainer}>
        <Text style={styles.label}>{label}</Text>
        <TextInput stye={styles.input} {...textInputConfig}/>
    </View>
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 16,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
    }
});
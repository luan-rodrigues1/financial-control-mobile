import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Text, TouchableOpacity, View } from "react-native"
import styles from "./style"

const AddButton = () => {
    const {
        setFormVisibility, 
        setTransactionType, 
        setTransactionDescription, 
        setTransactionValue, 
        setErrorDescription, 
        setErrorValue,
        setErrorValueFormat
    } = useContext(UserContext)

    return (
        <View style={styles.addContainer}>
            <TouchableOpacity
            style={styles.buttonAdd}
                    onPress={() => {
                    setFormVisibility(true), 
                    setTransactionType("Entrada"),
                    setTransactionDescription(""), 
                    setTransactionValue(""),
                    setErrorDescription(""),
                    setErrorValue(""),
                    setErrorValueFormat("")}}>
                        <Text style={styles.textButtonAdd}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )
}


export default AddButton
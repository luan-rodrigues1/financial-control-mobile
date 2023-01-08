import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { Text, TouchableOpacity } from "react-native"
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
        <TouchableOpacity
                style={styles.ButtonAdd}
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
    )
}


export default AddButton
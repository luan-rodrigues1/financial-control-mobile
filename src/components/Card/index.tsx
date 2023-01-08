import { Image, Text, TouchableOpacity, View } from "react-native"
import { ReactNode, useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import styles from "./style"

const Card = ({cardItem}: any) => {

    const {
        setDeleteModalVisibility, 
        setdeleteId,
        formattingCurrency
    } = useContext(UserContext)

    return (
        <View style={styles.listContainer}>
            <View style={styles.cardBox}>
                <Image source={cardItem.type === "Despesa" ? require("../../../assets/arrowDown.png") : require("../../../assets/arrowGreen.png")}/>
                <View>
                    <Text style={styles.textCard}>{cardItem.description}</Text>
                    <Text style={cardItem.type === "Despesa" ? styles.textValueExpense : styles.textValue}>R$ {formattingCurrency(parseFloat(cardItem.value)) as ReactNode}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.trashButton}
                onPress={()=> {
                    setdeleteId(cardItem.id),
                    setDeleteModalVisibility(true)
                    }}>
                    <Image source={require("../../../assets/trash.png")}/>
            </TouchableOpacity>
        </View>
    )
}

export default Card
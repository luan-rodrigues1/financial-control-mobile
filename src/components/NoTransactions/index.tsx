import { Image, Text, View } from "react-native"
import styles from "./style"

const NoTransactions = () =>{
    return (
        <View style={styles.TransactionsContainer}>
            <Image source={require("../../../assets/searchoff.png")}/>
            <Text style={styles.textTransaction}>Sem Transações</Text>
        </View>
    )
}

export default NoTransactions
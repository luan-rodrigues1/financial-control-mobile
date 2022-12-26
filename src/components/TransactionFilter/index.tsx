import { Image, Text, TouchableOpacity, View } from "react-native"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import styles from "./style"

const TransactionFilter = () =>{

    const {typeFilterSwitch, setUsingFilter} = useContext(UserContext)

    return (
    <View style={styles.filterContainer}>
        <View style={styles.boxFilter}>
            <TouchableOpacity
                style={styles.buttonFilter}
                onPress={() => setUsingFilter(false)}>
                    <View>
                        <Image source={require("../../../assets/arrowGreen.png")}/>
                    </View>
            </TouchableOpacity>
            <Text>Todos</Text>
        </View>
        <View style={styles.boxFilter}>
            <TouchableOpacity
                style={styles.buttonFilter}
                onPress={() => {typeFilterSwitch("Entrada"), setUsingFilter(true)}}>
                    <View>
                        <Image source={require("../../../assets/arrowGreen.png")}/>
                    </View>
            </TouchableOpacity>
            <Text>Entradas</Text>
        </View>
        <View style={styles.boxFilter}>
            <TouchableOpacity
                style={styles.buttonFilter}
                onPress={() => {typeFilterSwitch("Despesa"), setUsingFilter(true)}}>
                    <View>
                        <Image source={require("../../../assets/arrowDown.png")}/>
                    </View>
            </TouchableOpacity>
            <Text>Saídas</Text>
        </View>
    </View>  
    )
}

export default TransactionFilter
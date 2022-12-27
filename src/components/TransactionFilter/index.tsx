import { Image, Text, TouchableOpacity, View } from "react-native"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import styles from "./style"

const TransactionFilter = () =>{

    const {typeFilterSwitch, setUsingFilter, filterActivated, setFilterActivated} = useContext(UserContext)

    return (
        <View style={styles.filterContainer}>
            <View style={styles.boxFilter}>
                <TouchableOpacity
                    style={filterActivated === "Todos" ? styles.buttonFilterActivated : styles.buttonFilter}
                    onPress={() => {setUsingFilter(false), setFilterActivated("Todos")}}>
                        <View>
                            <Image source={require("../../../assets/twoarrow1.png")}/>
                        </View>
                </TouchableOpacity>
                <Text style={filterActivated === "Todos" ? styles.textFilterActivated : styles.textFilter}>Todos</Text>
            </View>
            <View style={styles.boxFilter}>
                <TouchableOpacity
                    style={filterActivated === "Entradas" ? styles.buttonFilterActivated : styles.buttonFilter}
                    onPress={() => {typeFilterSwitch("Entrada"), setUsingFilter(true), setFilterActivated("Entradas")}}>
                        <View>
                            <Image source={require("../../../assets/arrowGreen.png")}/>
                        </View>
                </TouchableOpacity>
                <Text style={filterActivated === "Entradas" ? styles.textFilterActivated : styles.textFilter}>Entradas</Text>
            </View>
            <View style={styles.boxFilter}>
                <TouchableOpacity
                    style={filterActivated === "Saídas" ? styles.buttonFilterActivated : styles.buttonFilter}
                    onPress={() => {typeFilterSwitch("Despesa"), setUsingFilter(true), setFilterActivated("Saídas")}}>
                        <View>
                            <Image source={require("../../../assets/arrowDown.png")}/>
                        </View>
                </TouchableOpacity>
                <Text style={filterActivated === "Saídas" ? styles.textFilterActivated : styles.textFilter}>Saídas</Text>
            </View>
        </View>  
    )
}

export default TransactionFilter
import { Image, Text, TouchableOpacity, View } from "react-native"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

const TransactionFilter = () =>{

    const {typeFilterSwitch, setUsingFilter} = useContext(UserContext)

    return (
    <View>
        <TouchableOpacity
            onPress={() => setUsingFilter(false)}>
            <Image source={require("../../../assets/arrowGreen.png")}/>
        </TouchableOpacity>
        <Text>Todos</Text>
        <TouchableOpacity
            onPress={() => {typeFilterSwitch("Entrada"), setUsingFilter(true)}}>
            <Image source={require("../../../assets/arrowGreen.png")}/>
        </TouchableOpacity>
        <Text>Entradas</Text>
        <TouchableOpacity
            onPress={() => {typeFilterSwitch("Despesa"), setUsingFilter(true)}}>
            <Image source={require("../../../assets/arrowDown.png")}/>
        </TouchableOpacity>
        <Text>Saídas</Text>
    </View>  
    )
}

export default TransactionFilter
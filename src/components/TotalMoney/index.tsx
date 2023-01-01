import { Image, Text, View, TouchableOpacity } from "react-native"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import styles from "./style"
const TotalMoney = () =>{
    const {balanceVisibility, 
        visibilitySwitch,
        balanceValueTotal
    } = useContext(UserContext)
    
    return (
        <View style={styles.balanceBox}> 
            <Text style={styles.balanceTotal}>Saldo Atual</Text>
            <Text style={styles.balanceValue}>R$ {balanceVisibility ? "...." : balanceValueTotal}</Text>
            <TouchableOpacity
                onPress={() => visibilitySwitch()}>
                    <Image  source={balanceVisibility ? require("../../../assets/visibility.png") : require("../../../assets/visibilityoff.png")}/>
            </TouchableOpacity>
        </View>
    )
}


export default TotalMoney
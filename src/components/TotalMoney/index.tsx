import { Image, Text, View, StyleSheet, Button, TouchableOpacity } from "react-native"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
const TotalMoney = () =>{
    const {balanceVisibility, 
        visibilitySwitch, 
        setTransactionType, 
        setTransactionDescription, 
        setTransactionValue,
        setFormVisibility
    } = useContext(UserContext)
        
    return (
        <View> 
            <Text>Saldo Atual</Text>
            <Text >R$ {balanceVisibility ? "...." : "2.000,00"}</Text>
            <TouchableOpacity
                onPress={() => visibilitySwitch()}>
                <Image  source={require("../../../assets/visibilityoff.png")}/>
            </TouchableOpacity>
            <Button 
                onPress={() => {
                    setFormVisibility(true), 
                    setTransactionType("Entrada"),
                    setTransactionDescription(""), 
                    setTransactionValue("")}} 
                    title="Adicionar"
            />
        </View>
    )
}


export default TotalMoney
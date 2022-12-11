import { Image, Text, View, StyleSheet, Button } from "react-native"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
const TotalMoney = () =>{
    const {balanceVisibility, visibilitySwitch} = useContext(UserContext)
    return <View> 
        <Text>Saldo Atual</Text>
        <Text >R$ {balanceVisibility ? "..." : "2.000,00"}</Text>
        <Button onPress={() => visibilitySwitch()} title="trocar"/>
        
    </View>
}

const styles = StyleSheet.create({
    imagem:{
        backgroundColor: "black",
        color: "blue",
        width: 30,
        height: 30,
    }
})

export default TotalMoney
import { Button, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

const Landing = () =>{
    const navigation = useNavigation()

    const OpenHome = () => {
        navigation.navigate("Home")
    }
    return <View>
        <Text >landing</Text>
        <Button onPress={() => OpenHome()} title="Entrar"/>
    </View>
}

export default Landing
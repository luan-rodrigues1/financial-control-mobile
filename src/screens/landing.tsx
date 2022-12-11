import { Button, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

const Landing = () =>{
    const navigation = useNavigation()

    return <View>
        <Text >landing</Text>
        <Button onPress={() => navigation.navigate("Home")} title="Entrar"/>
    </View>
}

export default Landing
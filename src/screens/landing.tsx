import { Button, Image, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

const Landing = () =>{
    const navigation = useNavigation()

    return( 
        <View>
            <View>
                <Text>Controle Financeiro</Text>
                <Text>Aplicativo com foco em auxiliar na sua organização financeira</Text>
                <Text>De forma rápida e segura!</Text>
                <Text >landing</Text>
                <TouchableOpacity 
                onPress={() => navigation.navigate("Home")}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
            {/* <Button onPress={() => navigation.navigate("Home")} title="Entrar"/> */}
            <Image source={require("../../assets/imglanding.png")}/>
        </View>
    )
}

export default Landing
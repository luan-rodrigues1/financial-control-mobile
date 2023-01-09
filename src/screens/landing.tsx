import { Button, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import styles from "./style"

const Landing = () =>{
    const navigation = useNavigation()

    return( 
        <SafeAreaView style={styles.landingContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.textTitle}>Controle Financeiro</Text>
                <Text style={styles.textDescription}>Aplicativo com foco em auxiliar na sua organização financeira</Text>
                <Text style={styles.textSpan}>De forma rápida e segura!</Text>
                <TouchableOpacity 
                style={styles.accessButton}
                onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.textAccessButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <Image source={require("../../assets/imglanding.png")}/>
        </SafeAreaView>
    )
}

export default Landing
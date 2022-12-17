import { useContext } from "react"
import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { UserContext } from "../../contexts/UserContext"
import { ITransaction } from "../../contexts/UserContext"
const CardList = () =>{
    const {listTransaction, setListTransaction} = useContext(UserContext)

   return <FlatList
    data={listTransaction}
    renderItem={({item}) =>{
        return <View>
            <Image source={item.Type === "Despesa" ? require("../../../assets/arrowDown.png") : require("../../../assets/arrowGreen.png")}/>
            <Text>{item.description}</Text>
            <Text>{item.value}</Text>
            <Text>{item.Type}</Text>
            <Image source={require("../../../assets/trash.png")}/>
        </View>
    }}
    >

    </FlatList>

}



export default CardList
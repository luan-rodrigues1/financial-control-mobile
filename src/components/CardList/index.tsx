import { useContext } from "react"
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { UserContext } from "../../contexts/UserContext"
import NoTransactions from "../NoTransactions"

const CardList = () =>{
    const {listTransaction, setDeleteModalVisibility, setdeleteId, usingFilter, listFiltred} = useContext(UserContext)

   return (
        <View>
            {!usingFilter && listTransaction[0] === undefined || usingFilter === true && listFiltred[0] === undefined ? <NoTransactions/> : 
            <FlatList
            data={!usingFilter ? listTransaction : listFiltred}
            renderItem={({item}) =>{
                    return (
                    <View>
                        <Image source={item.type === "Despesa" ? require("../../../assets/arrowDown.png") : require("../../../assets/arrowGreen.png")}/>
                        <Text>{item.description}</Text>
                        <Text>{item.value}</Text>
                        <Text>{item.type}</Text>
                        <TouchableOpacity
                        onPress={()=> {
                            setdeleteId(item.id),
                            setDeleteModalVisibility(true)
                        }}
                        >
                            <Image source={require("../../../assets/trash.png")}/>
                        </TouchableOpacity>
                    </View>
                )
                
            }}
            >
            </FlatList>}
        </View>
    )

}



export default CardList
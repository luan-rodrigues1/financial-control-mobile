import { useContext } from "react"
import { FlatList, View } from "react-native"
import { UserContext } from "../../contexts/UserContext"
import NoTransactions from "../NoTransactions"
import Card from "../Card"
import styles from "./style"

const CardList = () =>{
    const {listTransaction,
        usingFilter, 
        listFiltred
    } = useContext(UserContext)

   return (
        <View style={styles.cardListContainer}>
            {!usingFilter && listTransaction[0] === undefined || usingFilter === true && listFiltred[0] === undefined ? <NoTransactions/> : 
            <FlatList
            data={!usingFilter ? listTransaction.slice().reverse() : listFiltred.slice().reverse()}
            renderItem={({item}) => <Card cardItem={item}/>
            }>
            </FlatList>}
        </View>
    )

}



export default CardList
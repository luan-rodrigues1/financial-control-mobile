import { useContext, useState } from "react"
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { UserContext } from "../../contexts/UserContext"
import NoTransactions from "../NoTransactions"
import styles from "./style"

const CardList = () =>{
    const {listTransaction, 
        setDeleteModalVisibility, 
        setdeleteId, 
        usingFilter, 
        listFiltred, 
        setFormVisibility, 
        setTransactionType, 
        setTransactionDescription, 
        setTransactionValue, 
        setErrorDescription, 
        setErrorValue
    } = useContext(UserContext)

   return (
        <View style={styles.cardListContainer}>
            {!usingFilter && listTransaction[0] === undefined || usingFilter === true && listFiltred[0] === undefined ? <NoTransactions/> : 
            <FlatList
            data={!usingFilter ? listTransaction.slice().reverse() : listFiltred.slice().reverse()}
            renderItem={({item}) =>{
                    return (
                    <View style={styles.listContainer}>
                        <View style={styles.cardBox}>
                            <Image source={item.type === "Despesa" ? require("../../../assets/arrowDown.png") : require("../../../assets/arrowGreen.png")}/>
                            <View>
                                <Text style={styles.textCard}>{item.description}</Text>
                                <Text style={item.type === "Despesa" ? styles.textValueExpense : styles.textValue}>R$ {item.value}</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                        style={styles.trashButton}
                            onPress={()=> {
                                setdeleteId(item.id),
                                setDeleteModalVisibility(true)
                            }}>
                            <Image source={require("../../../assets/trash.png")}/>
                        </TouchableOpacity>
                    </View>
                )
            }}
            >
            </FlatList>}
            <TouchableOpacity
                style={[styles.ButtonAdd, styles.shadowProp]}
                onPress={() => {
                setFormVisibility(true), 
                setTransactionType("Entrada"),
                setTransactionDescription(""), 
                setTransactionValue(""),
                setErrorDescription(false),
                setErrorValue(false)}}>
                    <Text style={styles.textButtonAdd}>Adicionar</Text>
            </TouchableOpacity>
        </View>
    )

}



export default CardList
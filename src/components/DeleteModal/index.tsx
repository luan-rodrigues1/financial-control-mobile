import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { UserContext } from "../../contexts/UserContext"
import { useContext } from "react"

const DeleteModal = () =>{
    const {deleteModalVisibility, setDeleteModalVisibility, deleteId, deleteTransaction} = useContext(UserContext)

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={deleteModalVisibility}
            >
                <Text>Remover Transação</Text>
                <Button onPress={() => {
                    deleteTransaction(deleteId), 
                    setDeleteModalVisibility(false)}} 
                    title="Confirmar"/>
                <Button onPress={() => setDeleteModalVisibility(false)} title="Cancelar"/>
            </Modal>
        </View>
    )
}

export default DeleteModal
import { Modal, Text, TouchableOpacity, View } from "react-native"
import { UserContext } from "../../contexts/UserContext"
import { useContext } from "react"
import styles from "./style"

const DeleteModal = () =>{
    const {deleteModalVisibility, setDeleteModalVisibility, deleteId, deleteTransaction} = useContext(UserContext)

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={deleteModalVisibility}
            >
                <View style={styles.modalDelete}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.textTitle}>Remover Transação</Text>
                        <TouchableOpacity 
                            style={styles.buttonConfirm}
                            onPress={() => {
                                deleteTransaction(deleteId), 
                                setDeleteModalVisibility(false)
                            }}>
                            <Text style={styles.textConfirm}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonCancel} 
                            onPress={() => {
                                setDeleteModalVisibility(false)
                            }}>
                            <Text style={styles.textCancel}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default DeleteModal
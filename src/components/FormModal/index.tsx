import { Button, Modal, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import styles from "./style"


const FormModal = () => {
    const {listTransaction, 
        setListTransaction,
        transactionType, 
        setTransactionType,
        transactionDescription,
        setTransactionDescription,
        transactionvalue,
        setTransactionValue,
        formVisibility,
        setFormVisibility
    } = useContext(UserContext)
    
    
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={formVisibility}
            >
                <View style={styles.modalForm}>
                    <View style={styles.headerForm}>
                        <Text style={styles.headerText}>Adicione sua transação</Text>
                        <TouchableOpacity style={styles.buttonExit} onPress={() => setFormVisibility(false)}><Text style={styles.buttonExitText}>X</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.LabelText}>Descrição</Text>
                    <TextInput style={styles.inputBox} value={transactionDescription} onChangeText={setTransactionDescription} placeholder="Digite aqui..."/>
                    <Text style={styles.LabelText}>Valor</Text>
                    <TextInput style={styles.inputBox} value={transactionvalue} onChangeText={setTransactionValue} placeholder="Ex: 100,00" keyboardType="numeric"/>
                    <View style={styles.TypeBox}>
                        <Text style={styles.LabelText}>Tipo</Text>
                    </View>
                    <View style={styles.typeBoxButton}>
                        <TouchableOpacity style={transactionType === "Entrada" ? styles.inputTypeActivated : styles.inputType} onPress={() => setTransactionType("Entrada")}>
                            <Text style={transactionType === "Entrada" ? styles.LabelTextTypeActivated : styles.LabelTextType}>Entrada</Text>
                            <View style={transactionType === "Entrada" ? styles.typeBallActivated : styles.typeBall}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={transactionType !== "Entrada" ? styles.inputTypeActivated : styles.inputType} onPress={() => setTransactionType("Despesa")}>
                            <Text style={transactionType !== "Entrada" ? styles.LabelTextTypeActivated : styles.LabelTextType}>Despesa</Text>
                            <View style={transactionType !== "Entrada" ? styles.typeBallActivated : styles.typeBall}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.ButtonAddForm} onPress={() => {setListTransaction([...listTransaction, {
                        description: transactionDescription,
                        value: transactionvalue,
                        type: transactionType,
                        id: new Date().getTime()
                        }]), 
                        setFormVisibility(false)}}>
                            <Text style={styles.textButtonAdd}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}


export default FormModal
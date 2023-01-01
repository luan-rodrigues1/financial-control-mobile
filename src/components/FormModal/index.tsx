import { Keyboard, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import styles from "./style"


const FormModal = () => {
    const {
        transactionType, 
        setTransactionType,
        transactionDescription,
        setTransactionDescription,
        transactionvalue,
        setTransactionValue,
        formVisibility,
        setFormVisibility,
        transactionValidation,
        errorDescription,
        errorValue,
        errorValueFormat
    } = useContext(UserContext)
    
    
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={formVisibility}
            >
                <Pressable onPress={Keyboard.dismiss} style={styles.modalForm}>
                    <View style={styles.headerForm}>
                        <Text style={styles.headerText}>Adicione sua transação</Text>
                        <TouchableOpacity style={styles.buttonExit} onPress={() => setFormVisibility(false)}><Text style={styles.buttonExitText}>X</Text></TouchableOpacity>
                    </View>
                    <Text style={styles.LabelText}>Descrição</Text>
                    <TextInput maxLength={38} style={errorDescription !== "" ? styles.inputBoxError : styles.inputBox} value={transactionDescription} onChangeText={setTransactionDescription} placeholder="Digite aqui..."/>
                    <Text style={errorDescription !== "" ? styles.errorMessage : styles.invisible}>{errorDescription}</Text>
                    <Text style={styles.LabelText}>Valor</Text>
                    <TextInput style={errorValue !== "" || errorValueFormat !== "" ? styles.inputBoxError : styles.inputBox} value={transactionvalue} onChangeText={setTransactionValue} placeholder="Ex: 100,00" keyboardType="numeric"/>
                    <Text style={errorValue !== "" || errorValueFormat !== ""? styles.errorMessage : styles.invisible}>{errorValue !== ""? errorValue : errorValueFormat}</Text>
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
                    <TouchableOpacity style={styles.ButtonAddForm} onPress={() => {transactionValidation({
                        description: transactionDescription,
                        value: transactionvalue,
                        type: transactionType,
                        id: new Date().getTime()
                        })}}>
                            <Text style={styles.textButtonAdd}>Adicionar</Text>
                    </TouchableOpacity>
                </Pressable>
            </Modal>
        </View>
    )
}


export default FormModal
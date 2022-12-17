import { Button, Modal, Text, TextInput, View } from "react-native"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"


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
                <Text>Adicione sua transação</Text>
                <Button onPress={() => setFormVisibility(false)} title="X"/>
                <Text>Descrição</Text>
                <TextInput value={transactionDescription} onChangeText={setTransactionDescription} placeholder="Digite aqui..."/>
                <TextInput value={transactionvalue} onChangeText={setTransactionValue} placeholder="Ex: 100,00" keyboardType="numeric"/>
                <Text>Tipo</Text>
                <Button onPress={() => setTransactionType("Entrada")} title="Entrada"/>
                <Button onPress={() => setTransactionType("Despesa")} title="Despesa"/>
                <Button  onPress={() => {setListTransaction([...listTransaction, {
                    description: transactionDescription,
                    value: transactionvalue,
                    type: transactionType,
                    id: new Date().getTime()
                    }]), 
                    setFormVisibility(false)}} title="Adicionar"/>
            </Modal>
        </View>
    )
}


export default FormModal
import { useState } from "react"
import { Button, Text, TextInput, View } from "react-native"
import { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"


const Form = () => {
    const {listTransaction, setListTransaction} = useContext(UserContext)

    const [transactionDescription, setTransactionDescription] = useState<string>("")
    const [transactionvalue, setTransactionValue] = useState<string>("")
    const [transactionType, setTransactionType] = useState<string>("Entrada")
    
    
    return <View>
                <Text>Adicione sua transação</Text>
                <Button title="X"/>
                <Text>Descrição</Text>
                <TextInput value={transactionDescription} onChangeText={setTransactionDescription} placeholder="Digite aqui..."/>
                <TextInput value={transactionvalue} onChangeText={setTransactionValue} placeholder="Ex: 100,00" keyboardType="numeric"/>
                <Text>Tipo</Text>
                <Button onPress={() => setTransactionType("Entrada")} title="Entrada"/>
                <Button onPress={() => setTransactionType("Despesa")} title="Despesa"/>
                <Button  onPress={() => setListTransaction([...listTransaction, {
                    description: transactionDescription,
                    value: transactionvalue,
                    Type: transactionType
                }])} title="Adicionar"/>
            </View>
}


export default Form
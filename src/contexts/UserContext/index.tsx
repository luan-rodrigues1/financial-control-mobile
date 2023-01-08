import { createContext, useEffect, useState } from "react";
import { Vibration } from "react-native";
import Toast from 'react-native-toast-message'
interface IProfileContextProps {
    children: React.ReactNode;
}
export interface ITransaction {
    description: string;
    value: string;
    type: string;
    id: number
}
export interface IProfileContext {
    balanceVisibility: boolean;
    setBalanceVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    visibilitySwitch: () => void;
    listTransaction: ITransaction[];
    setListTransaction: React.Dispatch<React.SetStateAction<ITransaction[]>>;
    deleteTransaction: (id: number | null) => void
    deleteId: null | number
    setdeleteId: React.Dispatch<React.SetStateAction<null | number>>
    deleteModalVisibility: boolean
    setDeleteModalVisibility: React.Dispatch<React.SetStateAction<boolean>>
    transactionType: string
    setTransactionType: React.Dispatch<React.SetStateAction<string>>
    transactionDescription: string
    setTransactionDescription: React.Dispatch<React.SetStateAction<string>>
    transactionvalue: string
    setTransactionValue: React.Dispatch<React.SetStateAction<string>>
    formVisibility: boolean
    setFormVisibility: React.Dispatch<React.SetStateAction<boolean>>
    listFiltred: ITransaction[] | []
    setListFiltred: React.Dispatch<React.SetStateAction<ITransaction[] | []>>
    usingFilter: boolean
    setUsingFilter: React.Dispatch<React.SetStateAction<boolean>>
    typeFilterSwitch: (id: string) => void
    balanceValueTotal: number | string
    filterActivated: string
    setFilterActivated: React.Dispatch<React.SetStateAction<string>>
    transactionValidation: (newTransaction: ITransaction) => void
    errorDescription: string
    setErrorDescription: React.Dispatch<React.SetStateAction<string>>
    errorValue: string
    setErrorValue: React.Dispatch<React.SetStateAction<string>>
    formattingCurrency: (value: number) => void
    errorValueFormat: string
    setErrorValueFormat: React.Dispatch<React.SetStateAction<string>>
}

export const UserContext = createContext<IProfileContext>({} as IProfileContext)

const UserProvider = ({children}:IProfileContextProps) => {
    const [balanceVisibility, setBalanceVisibility] = useState<boolean>(false)
    const [formVisibility, setFormVisibility] = useState<boolean>(false)
    const [listTransaction, setListTransaction] = useState<ITransaction[] | []>([])
    const [deleteId, setdeleteId] = useState<null | number>(null)
    const [deleteModalVisibility, setDeleteModalVisibility] = useState<boolean>(false)
    const [transactionType, setTransactionType] = useState<string>("Entrada")
    const [transactionDescription, setTransactionDescription] = useState<string>("")
    const [transactionvalue, setTransactionValue] = useState<string>("")
    const [listFiltred, setListFiltred] = useState<ITransaction[] | []>([])
    const [usingFilter, setUsingFilter] = useState<boolean>(false)
    const [balanceValueTotal, setBalanceValueTotal] = useState<number | string>(0)
    const [filterActivated, setFilterActivated] = useState<string>("Todos")
    const [errorDescription, setErrorDescription] = useState<string>("")
    const [errorValue, setErrorValue] = useState<string>("")
    const [errorValueFormat, setErrorValueFormat ] = useState<string>("")

    const visibilitySwitch = () =>{
        if(balanceVisibility){
            return setBalanceVisibility(false)
        }

        return setBalanceVisibility(true)
    }

    const transactionValidation = (newTransaction: ITransaction) => {
        setErrorValue("")
        setErrorDescription("")
        setErrorValueFormat("")

        const regex = /[A-Za-z]/.test(newTransaction.value)

        const filterPoint = newTransaction.value.split("").filter(el => el === ",")

        if(newTransaction.value.trim() === "" && newTransaction.description.trim() === ""){
            return (setErrorDescription("Campo obrigatório"), setErrorValue("Campo obrigatório"), Vibration.vibrate())
        }
        
        if(newTransaction.description.trim() === "" && regex){
            return (setErrorDescription("Campo obrigatório"), setErrorValueFormat(`Formato incorreto Ex: 1000,50`), Vibration.vibrate())
        }

        if(newTransaction.value.trim() === "" && regex){
            return (setErrorValue("Campo obrigatório"), setErrorValueFormat(`Formato incorreto Ex: 1000,50`), Vibration.vibrate())
        }

        if(newTransaction.description.trim() === "" && newTransaction.value.includes(".") || filterPoint.length > 1){
            return (setErrorDescription("Campo obrigatório"), setErrorValueFormat("Formato incorreto Ex: 1000,50"), Vibration.vibrate())
        }

        if(newTransaction.value.trim() === "" && newTransaction.value.includes(".") || filterPoint.length > 1){
            return (setErrorValue("Campo obrigatório"), setErrorValueFormat("Formato incorreto Ex: 1000,50"), Vibration.vibrate())
        }

        if(newTransaction.description.trim() === ""){
            return (setErrorDescription("Campo obrigatório"), Vibration.vibrate())
        }

        if(newTransaction.value.trim() === ""){
            return (setErrorValue("Campo obrigatório"), Vibration.vibrate())
        }

        if(regex){
            return setErrorValueFormat(`Formato incorreto Ex: 1000,50`)
        }

        if(newTransaction.value.includes(".") || filterPoint.length > 1){
            return (setErrorValueFormat("Formato incorreto Ex: 1000,50"), Vibration.vibrate())
        }

        const shiftPoint = newTransaction.value.replace(",", ".")

        newTransaction.value = shiftPoint
        Toast.show({
            type: 'success',
            text1: 'Transação criada com sucesso!',
            visibilityTime: 1500
        });
        return (setListTransaction(
            [...listTransaction, newTransaction]), 
            setFormVisibility(false)
        )
    }

    const deleteTransaction = (id: number | null) => {
        if(usingFilter){
            const listFiltredDeleteItem = listFiltred.filter(element => element.id !== id)

            setListFiltred(listFiltredDeleteItem)
        }
        const deleteItem = listTransaction.filter(element => element.id !== id)

        Toast.show({
            type: 'success',
            text1: 'Transação deletada com sucesso!',
            visibilityTime: 1500
        });
        
        return setListTransaction(deleteItem)
    }

    const typeFilterSwitch = (type: string) =>{
        const listFiltred = listTransaction.filter(element => element.type === type)
        return setListFiltred(listFiltred)
    }

    const formattingCurrency = (value: number ): string => {

        const [currency, cents] = value.toFixed(2).toString().split('.');

        return `${currency.replace(/\B(?=(\d{3})+(?!\d))/g, '.')},${cents}`
    }

    useEffect(() => {
        const expenseFilter = listTransaction.filter(element => element.type === "Despesa").reduce((previous, later) => {
            return parseFloat(later.value) + previous
        }, 0)

        const EntriesFilter = listTransaction.filter(element => element.type === "Entrada").reduce((previous, later) => {
            return parseFloat(later.value) + previous
        }, 0)

        const totalBalance = EntriesFilter - expenseFilter

        const fullyFormatted = formattingCurrency(totalBalance)
        
        return setBalanceValueTotal(fullyFormatted)

    }, [listTransaction])


    return <UserContext.Provider 
    value={{balanceVisibility, 
        setBalanceVisibility, 
        visibilitySwitch, 
        listTransaction, 
        setListTransaction, 
        deleteTransaction,
        deleteId, 
        setdeleteId, 
        deleteModalVisibility, 
        setDeleteModalVisibility,
        transactionType,
        setTransactionType,
        transactionDescription,
        setTransactionDescription,
        transactionvalue,
        setTransactionValue,
        formVisibility,
        setFormVisibility,
        listFiltred,
        setListFiltred,
        usingFilter,
        setUsingFilter,
        typeFilterSwitch,
        balanceValueTotal,
        filterActivated,
        setFilterActivated,
        transactionValidation,
        errorDescription,
        setErrorDescription,
        errorValue,
        setErrorValue,
        formattingCurrency,
        errorValueFormat,
        setErrorValueFormat
    }}>{children}</UserContext.Provider>

}

export default UserProvider
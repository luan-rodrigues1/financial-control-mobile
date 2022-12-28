import { createContext, useEffect, useState } from "react";
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
    balanceValueTotal: number
    filterActivated: string
    setFilterActivated: React.Dispatch<React.SetStateAction<string>>
    transactionValidation: (newTransaction: ITransaction) => void
    errorDescription: boolean
    setErrorDescription: React.Dispatch<React.SetStateAction<boolean>>
    errorValue: boolean
    setErrorValue: React.Dispatch<React.SetStateAction<boolean>>

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
    const [balanceValueTotal, setBalanceValueTotal] = useState<number>(0)
    const [filterActivated, setFilterActivated] = useState<string>("Todos")
    const [errorDescription, setErrorDescription] = useState<boolean>(false)
    const [errorValue, setErrorValue] = useState<boolean>(false)

    const visibilitySwitch = () =>{
        if(balanceVisibility){
            return setBalanceVisibility(false)
        }

        return setBalanceVisibility(true)
    }

    const transactionValidation = (newTransaction: ITransaction) => {

        if(newTransaction.value.trim() === "" && newTransaction.description.trim() === ""){
            return (setErrorValue(true), setErrorDescription(true))
        }

        if(newTransaction.description.trim() === ""){
            return setErrorDescription(true)
        }

        if(newTransaction.value.trim() === ""){
            return setErrorValue(true)
        }

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
        
        return setListTransaction(deleteItem)
    }

    const typeFilterSwitch = (type: string) =>{
        const listFiltred = listTransaction.filter(element => element.type === type)
        return setListFiltred(listFiltred)
    }

    useEffect(() => {
        const expenseFilter = listTransaction.filter(element => element.type === "Despesa").reduce((previous, later) => {
            return parseFloat(later.value) + previous
        }, 0)

        const EntriesFilter = listTransaction.filter(element => element.type === "Entrada").reduce((previous, later) => {
            return parseFloat(later.value) + previous
        }, 0)

        const totalBalance = EntriesFilter - expenseFilter
        
        return setBalanceValueTotal(totalBalance)

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
        setErrorValue
    }}>{children}</UserContext.Provider>

}

export default UserProvider
import { createContext, useState } from "react";
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

    const visibilitySwitch = () =>{
        if(balanceVisibility){
            return setBalanceVisibility(false)
        }

        return setBalanceVisibility(true)
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
        typeFilterSwitch
    }}>{children}</UserContext.Provider>

}

export default UserProvider
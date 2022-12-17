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

    const visibilitySwitch = () =>{
        if(balanceVisibility){
            return setBalanceVisibility(false)
        }

        return setBalanceVisibility(true)
    }

    const deleteTransaction = (id: number | null) => {
        const deleteItem = listTransaction.filter(element => element.id !== id)

        return setListTransaction(deleteItem)
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
        setFormVisibility
    }}>{children}</UserContext.Provider>

}

export default UserProvider
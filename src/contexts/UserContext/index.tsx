import { createContext, useState } from "react";
interface IProfileContextProps {
    children: React.ReactNode;
}
export interface ITransaction {
    description: string;
    value: string;
    Type: string;
    id: number
}
export interface IProfileContext {
    balanceVisibility: boolean;
    setBalanceVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    visibilitySwitch: () => void;
    listTransaction: ITransaction[];
    setListTransaction: React.Dispatch<React.SetStateAction<ITransaction[]>>;
}

export const UserContext = createContext<IProfileContext>({} as IProfileContext)

const UserProvider = ({children}:IProfileContextProps) => {
    const [balanceVisibility, setBalanceVisibility] = useState<boolean>(false)
    const [listTransaction, setListTransaction] = useState<ITransaction[] | []>([])

    const visibilitySwitch = () =>{
        if(balanceVisibility){
            return setBalanceVisibility(false)
        }

        return setBalanceVisibility(true)
    }

    return <UserContext.Provider value={{balanceVisibility, setBalanceVisibility, visibilitySwitch, listTransaction, setListTransaction}}>{children}</UserContext.Provider>

}

export default UserProvider
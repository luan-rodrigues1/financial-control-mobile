import { createContext, useState } from "react";
interface IProfileContextProps {
    children: React.ReactNode;
}

export interface IProfileContext {
    balanceVisibility: boolean;
    setBalanceVisibility: React.Dispatch<React.SetStateAction<boolean>>
    visibilitySwitch: () => void
}

export const UserContext = createContext<IProfileContext>({} as IProfileContext)

const UserProvider = ({children}:IProfileContextProps) => {
    const [balanceVisibility, setBalanceVisibility] = useState<boolean>(false)

    const visibilitySwitch = () =>{
        if(balanceVisibility){
            return setBalanceVisibility(false)
        }

        return setBalanceVisibility(true)
    }

    return <UserContext.Provider value={{balanceVisibility, setBalanceVisibility, visibilitySwitch}}>{children}</UserContext.Provider>

}

export default UserProvider
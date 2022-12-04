import { NavigationContainer } from "@react-navigation/native";

import { UserRoutes } from "./stack.routes";

const Routes = () =>{
    return <NavigationContainer>
            <UserRoutes/>
    </NavigationContainer>
}

export default Routes
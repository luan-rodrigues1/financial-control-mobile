import { createNativeStackNavigator } from "@react-navigation/native-stack";
import landing from "../screens/landing";
import home from "../screens/home";

const {Screen, Navigator} = createNativeStackNavigator();

export const UserRoutes = () =>{
    return <Navigator>
    <Screen
        name="Landing"
        component={landing}
    />
    <Screen
        name="Home"
        component={home}
    />
<Navigator/>
    
}




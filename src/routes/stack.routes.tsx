import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../screens/landing";
import Home from "../screens/home";

const {Screen, Navigator} = createNativeStackNavigator();

export const UserRoutes = () =>{
    return <Navigator screenOptions={{
        headerShown: false
    }}>
        <Screen name="Landing" component={Landing}/>
        <Screen name="Home" component={Home} />
    </Navigator>
    
}

export default UserRoutes




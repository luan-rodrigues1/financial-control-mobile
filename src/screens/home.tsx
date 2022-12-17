import { Text, View } from "react-native"
import TotalMoney from "../components/TotalMoney"
import Form from "../components/Form"
import CardList from "../components/List"

const Home = () =>{
    return <View>
        <TotalMoney/>
        <Form/>
        <CardList/>
    </View>
}

export default Home
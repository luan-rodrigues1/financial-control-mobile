import {View } from "react-native"
import TotalMoney from "../components/TotalMoney"
import FormModal from "../components/FormModal"
import CardList from "../components/CardList"
import DeleteModal from "../components/DeleteModal"

const Home = () =>{
    return (
        <View>
            <TotalMoney/>
            <FormModal/>
            <CardList/>
            <DeleteModal/>
        </View>
    )

}

export default Home
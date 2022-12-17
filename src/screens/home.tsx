import {View } from "react-native"
import TotalMoney from "../components/TotalMoney"
import FormModal from "../components/FormModal"
import CardList from "../components/CardList"
import DeleteModal from "../components/DeleteModal"
import TransactionFilter from "../components/TransactionFilter"
import NoTransactions from "../components/NoTransactions"

const Home = () =>{
    return (
        <View>
            <TotalMoney/>
            <TransactionFilter/>
            <FormModal/>
            <CardList/>
            <DeleteModal/>
        </View>
    )

}

export default Home
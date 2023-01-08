import {SafeAreaView, View } from "react-native"
import TotalMoney from "../components/TotalMoney"
import FormModal from "../components/FormModal"
import CardList from "../components/CardList"
import DeleteModal from "../components/DeleteModal"
import TransactionFilter from "../components/TransactionFilter"
import AddButton from "../components/AddButton"

const Home = () =>{
    return (
        <SafeAreaView style={{flex: 1}}>
            <TotalMoney/>
            <TransactionFilter/>
            <FormModal/>
            <CardList/>
            <AddButton/>
            <DeleteModal/>
        </SafeAreaView>
    )

}

export default Home
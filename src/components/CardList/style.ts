import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    cardListContainer: {
        width: "100%",
        // height: "65%"
        height: 560

    },

    listContainer: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#2C8CF4",
        borderRadius: 20,
        marginLeft: "7%",
        marginRight: "7%",
        height: 80,
        paddingLeft: 15,
        paddingRight: 20,
        backgroundColor: "#ffffff",
        marginBottom: 15,
    },

    cardBox: {
        flexDirection: "row",
        alignItems: "center",
    },

    textCard: {
        fontSize: 15,
        marginLeft: 10,
        width: 200
    },

    textValue: {
        fontSize: 17,
        marginLeft: 10,
        color: "#54C17F"
    },

    textValueExpense: {
        fontSize: 17,
        marginLeft: 10,
        color: "#DD1E91"
    },

    trashButton: {
        backgroundColor: "#2C8CF4",
        width: 40,
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    }
})

export default styles


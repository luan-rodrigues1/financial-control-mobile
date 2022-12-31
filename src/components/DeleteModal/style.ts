import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalDelete: {
        backgroundColor: "#ffffff",
        elevation: 10,
        marginHorizontal: 15,
        marginVertical: "60%",
        borderRadius: 15,
    },

    modalContainer: {
        width: "100%",
        alignItems: "center"
    },

    textTitle: {
        marginVertical: 10,
        fontSize: 20,
        fontWeight: "bold"
    },

    buttonConfirm: {
        height: 50,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#FD0140",
        marginTop: 10,
        marginBottom: 12,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonCancel: {
        height: 50,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#ffffff",
        borderWidth: 1,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center"
    },

    textConfirm: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#ffffff"
    },

    textCancel: {
        fontSize: 18,
        fontWeight: "bold",
    }
})

export default styles
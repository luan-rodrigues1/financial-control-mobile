import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: "15%",
        marginRight: "15%",
        marginTop: 20,
        marginBottom: 25,

    },

    boxFilter: {
        alignItems: "center",
    },

    buttonFilter: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#000000",
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: "#ffffff"
    }


})

export default styles
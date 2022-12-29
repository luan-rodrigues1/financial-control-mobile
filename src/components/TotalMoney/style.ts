import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    balanceBox: {
        display: "flex",
        width: "100%",
        height: 175,
        backgroundColor: "#2C8CF4",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        alignItems: "center",
        paddingTop: 40,
    },

    balanceTotal: {
        fontSize: 18,
        color: "#ffffff"
    },

    balanceValue: {
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 20,
        color: "#ffffff"
    },

    ButtonAdd: {
        borderRadius: 40,
        position: "absolute",
        // top: "587%",
        backgroundColor: "#2C8CF4",
        textAlign: "center",
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 11,
        paddingTop: 11,

    },

    textButtonAdd: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold"
    }

})

export default styles
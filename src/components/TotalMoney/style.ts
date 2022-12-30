import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    balanceBox: {
        display: "flex",
        width: "100%",
        height: "21%",
        justifyContent:"space-between",
        backgroundColor: "#2C8CF4",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        alignItems: "center",
        paddingTop: 40,
        paddingBottom: 10
    },

    balanceTotal: {
        fontSize: 18,
        color: "#ffffff"
    },

    balanceValue: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#ffffff"
    },

})

export default styles
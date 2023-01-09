import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    landingContainer: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "orange"
    },
    
    headerContainer: {
        backgroundColor: "#2C8CF4",
        height: "68%",
        width: "100%",
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        paddingTop: 40,
        alignItems: "center",
        justifyContent: "space-around",
    },

    textTitle: {
        fontSize: 45,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center"
    },

    textDescription: {
        fontSize: 20,
        color: "#ffffff",
        fontWeight: "bold",
        textAlign: "center"
    },

    textSpan: {
        color: "#ffffff"
    },

    accessButton: {
        width: 150,
        height: 42,
        borderRadius: 40,
        backgroundColor: "#ffffff",
        elevation: 20,
        justifyContent: "center",
        alignItems: "center"
    },

    textAccessButton: {
        color: "#2C8CF4",
        fontWeight: "bold",
        fontSize: 18
    }

})

export default styles
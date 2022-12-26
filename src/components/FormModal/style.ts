import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    modalForm: {
        backgroundColor: "#ffffff",
        elevation: 10,
        marginHorizontal: 15,
        marginVertical: "25%",
        padding: 12,
        borderRadius: 15
    },

    headerForm: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
    },

    headerText: {
        fontSize: 20,
        fontWeight: "bold"
    },

    buttonExit: {
        backgroundColor: "#2C8CF4",
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 50
    },

    buttonExitText: {
        color: "#ffffff"
    },

    LabelText: {
        fontSize: 16,
        marginBottom: 3
    },

    inputBox: {
        width: "100%",
        height: 45,
        borderWidth: 1,
        borderRadius: 13,
        marginBottom: 10,
        paddingLeft: 8 
    },

    TypeBox: {
        marginTop: 5,
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    typeBoxButton: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 25
    },

    inputType: {
        width: 140,
        height: 60,
        borderWidth: 1,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },

    ButtonAddForm: {
        borderRadius: 40,
        backgroundColor: "#2C8CF4",
        textAlign: "center",
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 11,
        paddingTop: 11,
        alignItems: "center"
    },

    textButtonAdd: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold"
    },

    typeBall: {
        width: 8,
        height: 8,
        borderRadius: 50,
        borderWidth:2,
        position: "absolute",
        left: "85%",
        top: "15%"
    }

})

export default styles
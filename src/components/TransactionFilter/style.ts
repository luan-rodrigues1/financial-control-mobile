import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "70%",
        marginTop: 12,
        marginRight: 'auto',
        marginBottom: 12,
        marginLeft: 'auto',
    },

    boxFilter: {
        alignItems: "center",
    },

    buttonFilter: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1.5,
        borderColor: "#b0b1b3",
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: "#ffffff"
    },

    buttonFilterActivated: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1.5,
        borderColor: "#2C8CF4",
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: "#ffffff"
    },

    textFilter: {
        fontSize: 12,
    },

    textFilterActivated: {
        fontSize: 12,
        color: "#2C8CF4"
    }

})

export default styles
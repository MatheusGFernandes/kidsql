import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 12,
        paddingTop: 40,
        justifyContent: "space-evenly",
    },

    centeredContent: {
        borderRadius: 10,   
    },

    receivingZone: {
        height: (Dimensions.get("window").width / 6) - 12,
        borderRadius: 10,
        width: (Dimensions.get("window").width / 4) - 12,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5
    },

    receiving: {
        borderColor: "#00b34c",
        borderWidth: 2,
    },

    receiving2: {
        backgroundColor: "#00b34c",
        borderColor: "#00b34c",
        height: (Dimensions.get("window").width / 6) - 12,
        width: (Dimensions.get("window").width / 4) - 12,
        borderRadius: 10,
        borderWidth: 2,
        marginRight: 6
        
    },

    receivingListStyle: {
        borderColor: "#000",
        borderWidth: 1 
    },

    draggableBox: {
        width: (Dimensions.get("window").width / 4) - 12,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 5
    },

    dragging: {
        opacity: 0.2,
    },

    hoverDragging: {
        borderColor: "#5b1d99",
        borderWidth: 2
    },

    receivingContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        borderBottomWidth: 1,
        paddingBottom: 15,
        borderColor: '#000'
    },

    itemSeparator: {
        height: 15
    },

    draxListContainer: {
        marginTop: 50,
        padding: 5,
        height: 300
    },

    receivingZoneContainer: {
        padding: 5,
        height: 100
    },

    textStyle: {
        fontSize: 18,
        color: "#FFF",
    },

    headerStyle: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20
    },

    gestureRootViewStyle: {
        backgroundColor: "#fffcf7",
        flex: 1
    },

    receiveStyle: {
        borderColor: "#000",
        borderWidth: 1
    }
});

export default styles;
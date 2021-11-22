import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const vw = Dimensions.get("screen").width;

export default function Header() {
    return (
        <View style={styles.container}>
            <Ionicons
                style={styles.seta}
                name="arrow-back-outline"
                size={30}
                color="#fff"
            />
            <View style={styles.nameContainer}>
                <Text style={styles.user}>_lucdassilva</Text>
            </View>
            <Ionicons
                style={styles.notification}
                name="ios-notifications-outline"
                size={28}
                color="#fff"
            />
            <SimpleLineIcons
                style={styles.options}
                name="options-vertical"
                size={24}
                color="#fff"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: vw,
        height: 80,
        paddingTop: 30,
        backgroundColor: "#1a1a1a",
        alignItems: "center",
    },

    seta: {
        marginLeft: 10,
        fontSize: 35,
    },

    nameContainer: {
        flex: 1,
    },

    user: {
        fontFamily: "Roboto",
        fontSize: 18,
        fontWeight: "700",
        color: "#fff",
        paddingLeft: 20,
    },

    notification: {
        paddingRight: 10,
    },

    options: {
        paddingRight: 10,
    },
});

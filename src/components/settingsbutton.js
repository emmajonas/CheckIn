import React from "react";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text, StyleSheet } from "react-native";

const SettingsButton = ({ navigation }) => {
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate("settings")}>
            <Text style={styles.textStyle}>Settings</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 15,
        fontWeight: "500",
    }
});

export default SettingsButton;
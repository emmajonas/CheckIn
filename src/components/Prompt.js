import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Prompt = ({ title }) => {

    return (
        <Text style={styles.bodyText}>{title}</Text>
    );

};

const styles = StyleSheet.create({
    bodyText: {
        fontSize: 45,
        textAlign: "center",
        marginBottom: 30,
    }
});
  
export default Prompt;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TitleHeader = ({ color }) => {

    return (
      <View style={styles.viewStyle}>
          <Text style={[styles.titleText, {color: color}]}>CheckIn</Text>
      </View>
    );

};

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
    },
    titleText: {
        fontSize: 85,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 5
    }
});
  
export default TitleHeader;

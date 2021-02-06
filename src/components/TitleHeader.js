import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from "./colors";

const TitleHeader = ({ color }) => {

    return (
      <View style={styles.viewStyle}>
          <Text style={{color: color, fontSize: 85,
            fontWeight: "bold", marginBottom: 20, marginTop: 70}}>CheckIn</Text>
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
        marginBottom: 20,
        marginTop: 70,
    }
});
  
export default TitleHeader;

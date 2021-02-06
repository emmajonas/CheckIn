import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function RadioButtons({ options, selectedOption, onSelect, color }) {
  return (
    <View style={{marginBottom: 5}}>
      {options.map((item) => {
        return (
          <View key={item.key} style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.circle, {borderColor: color}]}
              onPress={() => {
                onSelect(item);
              }}>
                <View style={selectedOption && selectedOption.key === item.key ? [styles.checkedCircle, {backgroundColor: color}] : styles.uncheckCircle}>
                    <Text style={selectedOption && selectedOption.key === item.key ? {fontSize: 25, color: "white"} : {fontSize: 25, color: "black"}}>{item.text}</Text>
                </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  circle: {
    height: 55,
    width: "100%",
    borderRadius: 10,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedCircle: {
    width: "98%",
    height: "80%",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center"
  },
  uncheckCircle: {

  }
});

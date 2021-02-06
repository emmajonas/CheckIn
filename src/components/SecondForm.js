import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import RadioButton from './Radio';
import * as opts from './options';

export default function SecondForm({ navigation, titleOption, color}) {
  const [selectedOption, setSelectedOption] = React.useState(null);

  let options; 
  if (titleOption == "happy") {
      options = opts.happyOptions;
  } else if (titleOption == "surprised") {
      options = opts.surprisedOptions;
  } else if (titleOption == "fearful") {
    options = opts.fearfulOptions;
  } else if (titleOption == "sad") {
    options = opts.sadOptions;
  } else if (titleOption == "angry") {
    options = opts.angryOptions;
  } 

  const onSelect = (item) => {
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  };

  const onSubmit = () => {
    if (selectedOption == null) {
        Alert.alert("Please select an option.");
    }
  }

  const onBack = () => {
    navigation.navigate("start");
  }

  return (
    <View>
      <RadioButton
        selectedOption={selectedOption}
        onSelect={onSelect}
        options={options}
        color={color}
      />
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={onBack}
        color={"black"}>
            <View style={[styles.nextText, {backgroundColor: color}]}>
                <Text style={styles.nextText}>Back</Text>
            </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={onSubmit}
        color={"black"}>
            <View style={[styles.nextText, {backgroundColor: color}]}>
                <Text style={styles.nextText}>Finished</Text>
            </View>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 20
  },
  nextButton: {
      alignItems: "center",
  },
  nextText: {
    padding: 5,
    borderRadius: 10,
    fontSize: 25,
    color: "white"
  }
});

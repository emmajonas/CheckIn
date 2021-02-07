import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import RadioButton from './Radio';
import * as opts from './options';
import global from "./global";

export default function SecondForm({ navigation, titleOption, color }) {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const date = Date.now();
  const dateFormat = new Intl.DateTimeFormat('en-US', 
    {year: 'numeric', month: '2-digit',day: '2-digit', 
    hour: '2-digit', minute: '2-digit'}).format(date);

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
    } else {
      fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          patientName: global.name,
          patientID: global.id,
          patientFeeling: selectedOption.key,
          timeStamp: dateFormat
        }),
      }).catch(function(error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
      });
      navigation.navigate("end");
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
                <Text style={styles.nextText}>Done</Text>
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
  },
  nextButton: {
      alignItems: "center",
  },
  nextText: {
    padding: 4,
    borderRadius: 7,
    fontSize: 25,
    color: "white"
  }
});

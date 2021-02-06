import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { colors } from './colors';
import RadioButton from './Radio';

const options = [
  {
    key: 'happy',
    text: 'Happy',
  },
  {
    key: 'surprised',
    text: 'Surprised',
  },
  {
    key: 'fearful',
    text: 'Fearful',
  },
  {
    key: 'sad',
    text: 'Sad',
  },
  {
      key: 'angry',
      text: 'Angry'
  }
];

export default function MainForm({ navigation }) {
  const [selectedOption, setSelectedOption] = React.useState(null);

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
        navigation.navigate(selectedOption.key);
    }
  }

  return (
    <View>
      <RadioButton
        selectedOption={selectedOption}
        onSelect={onSelect}
        options={options}
        color={colors.blue}
      />
      <TouchableOpacity
        style={styles.nextButton}
        onPress={onSubmit}
        color={"black"}>
            <View style={styles.nextText}>
                <Text style={styles.nextText}>Continue</Text>
            </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  nextButton: {
      alignItems: "center",
  },
  nextText: {
    backgroundColor: colors.blue,
    padding: 5,
    borderRadius: 10,
    fontSize: 25,
    color: "white"
  }
});

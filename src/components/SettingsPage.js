import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from "react-native-gesture-handler";
import global from "./global"


class SettingsPage extends Component {

    state = {
        nameInput: '',
        idInput: ''
    }

    componentDidMount() {
        AsyncStorage.getItem('patientName').then((value) => {
          if (value !== null){
          // saved input is available
          this.setState({ nameInput: value }); // Note: update state with last entered value
          global.name = value;
        }
        }).done();
        AsyncStorage.getItem('patientID').then((value) => {
            if (value !== null){
            // saved input is available
            this.setState({ idInput: value }); // Note: update state with last entered value
            global.id = value;
          }
          }).done();
    }

    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style = {styles.viewStyle}>
                    <Text style={styles.textStyle}>Settings</Text>
                <View style={{borderWidth: 1, width: "100%"}}></View>
                <View style={{width: "90%"}}>
                    <Text style={styles.patientText}>Patient name</Text>
                </View>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(userInput) => {
                        this.setState({ nameInput: userInput});
                        AsyncStorage.setItem('patientName', userInput); // Note: persist input
                        global.name = userInput;
                    }}
                    placeholder="Patient Name"
                    value={this.state.nameInput}
                />
                <View style={{width: "90%"}}>
                    <Text style={styles.patientID}>Patient ID</Text>
                </View>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(userInput) => {
                        this.setState({ idInput: userInput});
                        AsyncStorage.setItem('patientID', userInput); // Note: persist input
                        global.id = userInput;
                    }}
                    placeholder="Patient ID"
                    value={this.state.idInput}
                />
                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={() => this.props.navigation.goBack()}
                    color={"black"}>
                        <View style={styles.nextText}>
                            <Text style={styles.nextText}>Done</Text>
                        </View>
                </TouchableOpacity>
            </SafeAreaView>
        );
    };
};

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    },
    textStyle: {
        fontSize: 40,
        padding: 10
    },
    nextButton: {
        alignItems: "center",
    },
    nextText: {
        backgroundColor: "black",
        padding: 4,
        borderRadius: 7,
        fontSize: 25,
        color: "white"
    },
    patientText: {
        fontSize: 20,
        paddingTop: 30
    },
    patientID: {
        fontSize: 20
    },
    textInputStyle: { 
        height: 40,
        width: "90%",
        borderColor: 'gray',
        borderWidth: 2,
        marginTop: 10,
        marginBottom: 30,
        padding: 10
    }
});
  
export default SettingsPage;

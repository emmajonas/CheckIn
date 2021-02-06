import React from 'react';
import TitleHeader from './TitleHeader';
import { View, StyleSheet } from "react-native";
import { colors } from './colors';
import Prompt from './Prompt';
import SecondForm from './SecondForm';

const SadPage = ({ navigation }) => {

    return (
        <View style = {styles.viewStyle}>
            <TitleHeader color="black"/>
            < Prompt title="Which describes you best?"/>
            <SecondForm navigation={navigation} titleOption="sad" color="black"/>
        </View>
    );

};

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    }
});
  
export default SadPage;

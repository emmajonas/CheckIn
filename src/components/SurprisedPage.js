import React from 'react';
import TitleHeader from './TitleHeader';
import { View, StyleSheet } from "react-native";
import { colors } from './colors';
import Prompt from './Prompt';
import SecondForm from './SecondForm';

const SurprisedPage = ({ navigation }) => {

    return (
        <View style = {styles.viewStyle}>
            <TitleHeader color={colors.orange}/>
            < Prompt title="Which describes you best?"/>
            <SecondForm navigation={navigation} titleOption="surprised" color={colors.orange}/>
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
  
export default SurprisedPage;

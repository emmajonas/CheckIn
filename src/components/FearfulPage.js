import React from 'react';
import TitleHeader from './TitleHeader';
import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from './colors';
import Prompt from './Prompt';
import SecondForm from './SecondForm';
import SettingsButton from './settingsbutton';

const FearfulPage = ({ navigation }) => {

    return (
        <SafeAreaView style = {styles.viewStyle}>
            <SettingsButton navigation={navigation}/>
            <TitleHeader color={colors.green}/>
            < Prompt title="Which describes you best?"/>
            <SecondForm navigation={navigation} titleOption="fearful" color={colors.green}/>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 25
    }
});
  
export default FearfulPage;

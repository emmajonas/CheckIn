import React from 'react';
import TitleHeader from './TitleHeader';
import { SafeAreaView, StyleSheet } from "react-native";
import { colors } from './colors';
import Prompt from './Prompt';
import SecondForm from './SecondForm';
import SettingsButton from './settingsbutton';

const SurprisedPage = ({ navigation }) => {

    return (
        <SafeAreaView style = {styles.viewStyle}>
            <SettingsButton navigation={navigation}/>
            <TitleHeader color={colors.darkblue}/>
            <Prompt title="Which describes you best?"/>
            <SecondForm navigation={navigation} titleOption="surprised" color={colors.darkblue}/>
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
  
export default SurprisedPage;

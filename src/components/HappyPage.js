import React from 'react';
import TitleHeader from './TitleHeader';
import { SafeAreaView, StyleSheet } from "react-native";
import SecondForm from './SecondForm';
import { colors } from './colors';
import Prompt from './Prompt';
import SettingsButton from './settingsbutton';

const HappyPage = ({ navigation, route }) => {

    return (
        <SafeAreaView style = {styles.viewStyle}>
            <SettingsButton navigation={navigation}/>
            <TitleHeader color={colors.purple}/>
            < Prompt title="Which describes you best?"/>
            <SecondForm navigation={navigation} titleOption="happy" color={colors.purple} />
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
  
export default HappyPage;

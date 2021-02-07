import React from 'react';
import TitleHeader from './TitleHeader';
import { SafeAreaView, StyleSheet } from "react-native";
import MainForm from './MainForm';
import { colors } from './colors';
import Prompt from './Prompt';
import SettingsButton from './settingsbutton';

const MainPage = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.viewStyle}>
            <SettingsButton navigation={navigation}/>
            <TitleHeader color={colors.blue} main={true}/>
            <Prompt title="How are you feeling today?"/>
            <MainForm navigation={navigation} />
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 25
    },
});
  
export default MainPage;

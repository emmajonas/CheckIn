import React from 'react';
import TitleHeader from './TitleHeader';
import { View, StyleSheet } from "react-native";
import MainForm from './MainForm';
import { colors } from './colors';
import Prompt from './Prompt';

const MainPage = ({ navigation }) => {

    return (
        <View style = {styles.viewStyle}>
            <TitleHeader color={colors.blue}/>
            < Prompt title="How are you feeling today?"/>
            <MainForm navigation={navigation}/>
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
  
export default MainPage;

import React from 'react';
import TitleHeader from './TitleHeader';
import { View, StyleSheet } from "react-native";
import SecondForm from './SecondForm';
import { colors } from './colors';
import Prompt from './Prompt';

const HappyPage = ({ navigation }) => {

    return (
        <View style = {styles.viewStyle}>
            <TitleHeader color={colors.purple}/>
            < Prompt title="Which describes you best?"/>
            <SecondForm navigation={navigation} titleOption="happy" color={colors.purple}/>
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
  
export default HappyPage;

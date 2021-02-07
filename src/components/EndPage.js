import React from 'react';
import TitleHeader from './TitleHeader';
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { colors } from './colors';
import Prompt from './Prompt';
import { TouchableOpacity } from "react-native-gesture-handler";

const EndPage = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.viewStyle}>
            <TitleHeader color={colors.blue} main={true}/>
            <Prompt title="Thanks for your response!"/>
            <TouchableOpacity
                style={styles.nextButton}
                onPress={() => navigation.navigate("start")}
                color={"black"}>
                    <View style={styles.nextText}>
                        <Text style={styles.nextText}>Back</Text>
                    </View>
            </TouchableOpacity>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
        height: "90%"
    },
    nextText: {
        backgroundColor: colors.blue,
        padding: 4,
        borderRadius: 7,
        fontSize: 25,
        color: "white"
      }
});
  
export default EndPage;

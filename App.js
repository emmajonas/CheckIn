/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from "./src/components/MainPage";
import HappyPage from "./src/components/HappyPage";
import SurprisedPage from "./src/components/SurprisedPage";
import FearfulPage from "./src/components/FearfulPage";
import SadPage from "./src/components/SadPage";
import AngryPage from "./src/components/AngryPage";
import SettingsPage from "./src/components/SettingsPage";
import EndPage from "./src/components/EndPage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="start" component={MainPage} />
        <Stack.Screen name="happy" component={HappyPage} />
        <Stack.Screen name="surprised" component={SurprisedPage} />
        <Stack.Screen name="fearful" component={FearfulPage} />
        <Stack.Screen name="sad" component={SadPage} />
        <Stack.Screen name="angry" component={AngryPage} />
        <Stack.Screen name="end" component={EndPage} />
        <Stack.Screen name="settings" component={SettingsPage} options={{gestureDirection: 'horizontal-inverted'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

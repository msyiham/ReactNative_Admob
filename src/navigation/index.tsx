import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import * as screen from "../pages";

const Navigation = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={screen.SplashScreen} />
        <Stack.Screen name="Main" component={screen.Main} />
        <Stack.Screen name="Menu" component={screen.Menu} />
        <Stack.Screen name="Snap Office" component={screen.SnapOffice} />
        <Stack.Screen name="Snap Office Detail" component={screen.SnapOfficeDetail} />
        <Stack.Screen name="News" component={screen.News} />
        <Stack.Screen name="News Detail" component={screen.NewsDetail} />
        <Stack.Screen name="States Info" component={screen.StatesInfo} />
        <Stack.Screen name="More Info" component={screen.MoreInfo} />
        <Stack.Screen name="Check Ballance" component={screen.CheckBallance} />
        <Stack.Screen name="Check Ballance Detail" component={screen.CheckBallanceDetail} />
      </Stack.Navigator>
  );
};

export default Navigation;
import React from 'react';
import {Text, View} from 'react-native';
import MainScreen from './screens/MainScreen';

const App = () => {
  return (
    // <NavigationContainer>
    //   <AuthStack.Navigator>
    //     <AuthStack.screen name="Main Screen" component={MainScreen} />
    //   </AuthStack.Navigator>
    // </NavigationContainer>
    <MainScreen />
  );
};

export default App;

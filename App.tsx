import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Splashscreen from './Screens/Splashscreen';
import LoginScreen from './Screens/LoginScreen';

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  setTimeout(() => {
    setShowSplashScreen(false);
  }, 5000);
  return (
    <View style={{ flex: 1 }}>
      {showSplashScreen ? (
        <Splashscreen />
      ) : (
        <View style={{ flex: 1 }}>
          <LoginScreen />
        </View>
      )}
    </View>
  );
};

export default App;
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Splashscreen from './Screens/Splashscreen';
import LoginScreen from './Screens/LoginScreen';
import VidMail from './Screens/VidMail';

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  setTimeout(() => {
    setShowSplashScreen(false);
  }, 5000);
  return (
    <View style={{ flex: 1 }}>
      {/* {showSplashScreen ? (
        <Splashscreen />
      ) : (
        <View style={{ flex: 1 }}>
          <LoginScreen />
        </View>
      )} */}
      <VidMail />
    </View>
  );
};

export default App;
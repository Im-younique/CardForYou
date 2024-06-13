import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainRoute, AuthRoute } from './routes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainRoute /> : <AuthRoute />}
    </NavigationContainer>
  );
}

export default App;

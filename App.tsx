import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MainRoute, AuthRoute } from './routes';

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? <MainRoute /> : <AuthRoute />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

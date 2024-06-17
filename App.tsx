import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { MainRoute, AuthRoute } from './routes';
import { Initializer } from './components';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      <Initializer>{isLoggedIn ? <MainRoute /> : <AuthRoute />}</Initializer>
    </NavigationContainer>
  );
}

export default App;

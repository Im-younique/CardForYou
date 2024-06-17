import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot } from 'recoil';

import { Router } from './routes';
import { Initializer } from './components';

function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Initializer>
          <Router />
        </Initializer>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;

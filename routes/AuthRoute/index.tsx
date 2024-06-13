import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthMain from '../../screens/AuthMain';

const Stack = createNativeStackNavigator();

export default function AuthRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="AuthMain" component={AuthMain} />
    </Stack.Navigator>
  );
}

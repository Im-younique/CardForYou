import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../../screens';

const Stack = createNativeStackNavigator();

export default function MainRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

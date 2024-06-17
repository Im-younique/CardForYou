import { SafeAreaView, View, StyleSheet, Text } from 'react-native';

// naverLogin
import { NaverLoginButton } from '../../components';

export default function AuthMain() {
  return (
    <SafeAreaView style={{ height: '100%' }}>
      <View style={styles.container}>
        <Text style={styles.logoText}>CardForYou</Text>
        <NaverLoginButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  logoText: {
    fontSize: 52,
    fontWeight: 'bold',
  },
});

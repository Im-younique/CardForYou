import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

import NaverLogin from '@react-native-seoul/naver-login';

import NaverLogo from '../../assets/icons/naver_logo.png';

export default function NaverLoginButton() {
  const login = async (): Promise<void> => {
    const { failureResponse, successResponse } = await NaverLogin.login();
    const { accessToken } = successResponse;

    console.log(accessToken);
  };

  return (
    <TouchableOpacity style={styles.naverLoginButton} onPress={login}>
      <Image source={NaverLogo} style={styles.naverLogo} />
      <Text style={styles.naverLoginText}>네이버 로그인</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  naverLoginButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#03C75A',
    marginTop: 50,
    minWidth: '70%',
    justifyContent: 'center',
  },
  naverLogo: {
    width: 40,
    height: 40,
    padding: 16,
  },
  naverLoginText: {
    fontSize: 18,
    padding: 16,
    color: 'white',
  },
});

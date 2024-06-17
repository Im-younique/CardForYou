import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

import NaverLogin from '@react-native-seoul/naver-login';

import NaverLogo from '../../assets/icons/naver_logo.png';

import { useSetRecoilState } from 'recoil';
import { authState } from '../../lib/recoil/atoms/AuthState';

export default function NaverLoginButton() {
  const setLogin = useSetRecoilState(authState);

  const login = async (): Promise<void> => {
    try {
      const { failureResponse, successResponse } = await NaverLogin.login();
      getProfile(successResponse!.accessToken);
    } catch (e) {
      console.error(e);
    }
  };

  const getProfile = async (accessToken: string): Promise<void> => {
    try {
      const profileResult = await NaverLogin.getProfile(accessToken);
      const { response } = profileResult;
      setLogin({
        isLogin: true,
        userId: response.id,
        userName: response.name,
        userEmail: response.email,
        accessToken: accessToken,
      });
    } catch (e) {
      console.error(e);
    }
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
    borderRadius: 8,
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

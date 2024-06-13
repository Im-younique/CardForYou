import { useEffect, useState, ReactElement } from 'react';
import { SafeAreaView, ScrollView, Button, View, Text } from 'react-native';

// naverLogin
import type {
  GetProfileResponse,
  NaverLoginResponse,
} from '@react-native-seoul/naver-login';
import NaverLogin from '@react-native-seoul/naver-login';

const consumerKey = process.env.NAVER_CLIENT_ID as string;
const consumerSecret = process.env.NAVER_SECRET_ID as string;
const appName = 'CardForYou';

const serviceUrlScheme = 'cardforyouTest';

// temp
const Gap = (): ReactElement => <View style={{ marginTop: 24 }} />;
const ResponseJsonText = ({
  json = {},
  name,
}: {
  json?: object;
  name: string;
}): ReactElement => (
  <View
    style={{
      padding: 12,
      borderRadius: 16,
      borderWidth: 1,
      backgroundColor: '#242c3d',
    }}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
      {name}
    </Text>
    <Text style={{ color: 'white', fontSize: 13, lineHeight: 20 }}>
      {JSON.stringify(json, null, 4)}
    </Text>
  </View>
);

export default function AuthMain() {
  useEffect(() => {
    NaverLogin.initialize({
      appName,
      consumerKey,
      consumerSecret,
      serviceUrlSchemeIOS: serviceUrlScheme,
      disableNaverAppAuthIOS: false,
    });
  }, []);

  const [success, setSuccessResponse] =
    useState<NaverLoginResponse['successResponse']>();

  const [failure, setFailureResponse] =
    useState<NaverLoginResponse['failureResponse']>();
  const [getProfileRes, setGetProfileRes] = useState<GetProfileResponse>();

  const login = async (): Promise<void> => {
    console.log('login');
    const { failureResponse, successResponse } = await NaverLogin.login();
    console.log(successResponse);
    console.log(failureResponse);
    setSuccessResponse(successResponse);
    setFailureResponse(failureResponse);
  };

  const logout = async (): Promise<void> => {
    try {
      await NaverLogin.logout();
      setSuccessResponse(undefined);
      setFailureResponse(undefined);
      setGetProfileRes(undefined);
    } catch (e) {
      console.error(e);
    }
  };

  const getProfile = async (): Promise<void> => {
    try {
      const profileResult = await NaverLogin.getProfile(success!.accessToken);
      setGetProfileRes(profileResult);
    } catch (e) {
      setGetProfileRes(undefined);
    }
  };

  const deleteToken = async (): Promise<void> => {
    try {
      await NaverLogin.deleteToken();
      setSuccessResponse(undefined);
      setFailureResponse(undefined);
      setGetProfileRes(undefined);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Button title={'Login'} onPress={login} />
        <Gap />
        <Button title={'Logout'} onPress={logout} />
        <Gap />
        {success ? (
          <>
            <Button title="Get Profile" onPress={getProfile} />
            <Gap />
          </>
        ) : null}
        {success ? (
          <View>
            <Button title="Delete Token" onPress={deleteToken} />
            <Gap />
            <ResponseJsonText name={'Success'} json={success} />
          </View>
        ) : null}
        <Gap />
        {failure ? <ResponseJsonText name={'Failure'} json={failure} /> : null}
        <Gap />
        {getProfileRes ? (
          <ResponseJsonText name={'GetProfile'} json={getProfileRes} />
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

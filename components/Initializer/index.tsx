import { useEffect, PropsWithChildren } from 'react';

import NaverLogin from '@react-native-seoul/naver-login';

const consumerKey = process.env.NAVER_CLIENT_ID as string;
const consumerSecret = process.env.NAVER_SECRET_ID as string;
const appName = 'CardForYou';
const serviceUrlScheme = 'cardforyouTest';

export default function Initializer({ children }: PropsWithChildren) {
  useEffect(() => {
    NaverLogin.initialize({
      appName,
      consumerKey,
      consumerSecret,
      serviceUrlSchemeIOS: serviceUrlScheme,
      disableNaverAppAuthIOS: false,
    });
  }, []);

  return <>{children}</>;
}

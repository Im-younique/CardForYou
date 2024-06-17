import { MainRoute, AuthRoute } from '../';

import { useRecoilValue } from 'recoil';
import { authState } from '../../lib/recoil/atoms/AuthState';

export default function Router() {
  const auth = useRecoilValue(authState);

  return auth.isLogin ? <MainRoute /> : <AuthRoute />;
}

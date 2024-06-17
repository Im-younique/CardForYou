import { atom } from 'recoil';

// types
import { IAuthState } from '../../../types';

export const authState = atom<IAuthState>({
  key: 'authState',
  default: {
    isLogin: false,
    userId: '',
    userName: '',
    userEmail: '',
    accessToken: '',
  },
});

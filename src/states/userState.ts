import { UserInterface } from '@interfaces/userInterface';
import { atom } from 'recoil';

const userState = atom<UserInterface>({
  key: 'userState',
  default: {
    userId: '',
    name: '',
  },
});

export { userState };

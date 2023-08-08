import { atom } from 'recoil';

const currentUrlState = atom({
	key: 'currentUrlState', // unique ID (with respect to other atoms/selectors)
	default: "", // default value (aka initial value)
  });

export default currentUrlState;
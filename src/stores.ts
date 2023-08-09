import { atom, deepMap } from 'nanostores';

export const isLoggedIn: true | false = atom(false);

export const userProfile = deepMap({
  record: null,
  token: null
});

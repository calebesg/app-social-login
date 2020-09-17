export const initialState = {
  user: {
    avatar: '',
    name: '',
    email: ''
  },
  auth: false
};

export function reducer(state, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        user: action.payload.user,
        auth: action.payload.auth
      };
    case 'SIGN_OUT':
      return {
        user: {},
        auth: false
      };
    default:
      return state;
  }
}

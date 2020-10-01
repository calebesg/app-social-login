import auth from '@react-native-firebase/auth';

function authentication(credential, userDispatch, navigation) {

  auth()
    .signInWithCredential(credential)
    .then(({ user }) => {
      userDispatch({
        type: 'SIGN_IN',
        payload: {
          user: {
            avatar: user.photoURL,
            name: user.displayName,
            email: user.email,
          },
          auth: true,
        },
      });

      navigation.reset({
        routes: [{ name: 'Main' }]
      });
    })
    .catch(error => console.log(error));
}

export default authentication;

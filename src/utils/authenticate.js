import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';

export async function saveCredential(credential) {
  await AsyncStorage.setItem('@auth', JSON.stringify(credential));
}

export default function authenticate(credential, userDispatch, navigation) {
  auth()
    .signInWithCredential(credential)
    .then(({ user }) => {
      
      saveCredential(credential);
      
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

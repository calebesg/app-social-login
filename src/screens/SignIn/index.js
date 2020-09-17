import React, { useState, useContext } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

import { 
  Container, 
  Title, 
  ContentDescription, 
  Content, 
  SignInButton, 
  SignInButtonText,
  SocialSignIn,
  SocialSignInText,
  SocialButtons,
  Footer,
  FooterText,
  FooterTextBold
} from './styles';

import { UserContext } from '../../contexts/userContext';

import InputSign from '../../components/InputSign';
import GoogleSignIn from '../../components/GoogleSignIn';
import FacebookSignIn from '../../components/FacebookSignIn';
import TwitterSignIn from '../../components/TwitterSignIn';
import LoadingIcon from '../../components/LoadingIcon';

function SignIn() {
  const { dispatch: useDispatch } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmitLogin() {
    if (!email || !password) {
      return Alert.alert('Fill in all fields');
    }

    setIsLoading(true);

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        useDispatch({
          type: 'SIGN_IN',
          payload: {
            user: {
              avatar: user.photoURL,
              name: user.displayName,
              email: user.email
            },
            auth: true
          }
        });

        navigation.reset({
          routes: [{ name: 'Main' }]
        });
      })
      .catch(error => {
        Alert.alert('Email or password invalid');

        setIsLoading(false);
      });
  }

  return (
    <Container>
 
      <Title>Sign in</Title>

      <Content>
        <ContentDescription>Login to you Account</ContentDescription>

        <InputSign 
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
        />
        <InputSign 
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          Icon={!isPasswordVisible 
            ? <Icon name="eye" size={18} color="#b1b1b8" /> 
            : <Icon name="eye-slash" size={18} color="#4f4f5e" />
          }
          visibility={isPasswordVisible}
          toggleVisibility={setIsPasswordVisible}
          autoCorrect={false}
          secureTextEntry={!isPasswordVisible}
        />

        <SignInButton onPress={handleSubmitLogin}>
          {isLoading 
            ? <LoadingIcon />
            : <SignInButtonText>Sign In</SignInButtonText>
          }
        </SignInButton>
      </Content>

      <SocialSignIn>
        <SocialSignInText>Or sign in with</SocialSignInText>

        <SocialButtons>
          <GoogleSignIn />
          <FacebookSignIn />
          <TwitterSignIn />
        </SocialButtons>
      </SocialSignIn>

      <Footer onPress={() => {}}>
        <FooterText>Not have an account yet?</FooterText>
        <FooterTextBold> Sign up</FooterTextBold>
      </Footer>
    </Container>
  );
}

export default SignIn;

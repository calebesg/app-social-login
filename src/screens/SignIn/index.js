import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { 
  Container, 
  Title, 
  ContentDescription, 
  Content, 
  SignInButton, 
  SignInButtonText,
  SocialSignIn,
  SocialSignInText,
  SocialButtons
} from './styles';

import InputSign from '../../components/InputSign';
import SocialButton from '../../components/SocialButton';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Container>
 
      <Title>Sign In</Title>

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
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={!isPasswordVisible}
        />

        <SignInButton>
          <SignInButtonText>Sign In</SignInButtonText>
        </SignInButton>
      </Content>

      <SocialSignIn>
        <SocialSignInText>Or sign in with</SocialSignInText>
        <SocialButtons>
          <SocialButton />
          <SocialButton />
          <SocialButton />
        </SocialButtons>
      </SocialSignIn>
    </Container>
  );
}

export default SignIn;

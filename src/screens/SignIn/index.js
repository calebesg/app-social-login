import React, { useState } from 'react';
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
          <SocialButton>
            <Icon name="google" size={32} color="#CF2C1F" />
          </SocialButton>
          <SocialButton>
            <Icon name="facebook" size={32} color="#395693" />
          </SocialButton>
          <SocialButton>
            <Icon name="twitter" size={32} color="#1C9CEB" />
          </SocialButton>
        </SocialButtons>
      </SocialSignIn>
    </Container>
  );
}

export default SignIn;

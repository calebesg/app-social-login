import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-family: Lobster-Regular;
  color: #1E319D;
  margin: 80px 0 40px;
`;

export const Content = styled.View`
  width: 100%;
  margin-bottom: 40px;
`;

export const ContentDescription = styled.Text`
  font-size: 13px;
  color: #606073;
  margin-bottom: 16px;
`;

export const SignInButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  background-color: #1E319D;
  height: 60px;
  border-radius: 8px;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
`;

export const SignInButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const SocialSignIn = styled.View`
  flex: 1;
  align-items: center;
  width: 100%;
`;

export const SocialSignInText = styled.Text`
  font-size: 13px;
  color: #606073;
  margin-bottom: 32px;
`;

export const SocialButtons = styled.View`
  width: 100%;
  padding: 0 8px;
`;

export const Footer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;
`;

export const FooterText = styled.Text`
  color: #606073;
  font-size: 13px;
`;

export const FooterTextBold = styled.Text`
  font-weight: bold;
  font-size: 13px;
  color: #1E319D;
`;

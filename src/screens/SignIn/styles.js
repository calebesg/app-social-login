import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #1E319D;
  margin: 60px 0;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
`;

export const ContentDescription = styled.Text`
  font-size: 14px;
  color: #444;
  margin-bottom: 24px;
`;

export const SignInButton = styled.TouchableOpacity`
  background-color: #1E319D;
  height: 60px;
  border-radius: 8px;
  margin-top: 24px;
  justify-content: center;
  align-items: center;
`;

export const SignInButtonText = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const SocialSignIn = styled.View`
  align-items: center;
  width: 100%;
`;

export const SocialSignInText = styled.Text`
  font-size: 12px;
  color: #666;
  margin-bottom: 16px;
`;

export const SocialButtons = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-around
`;

import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const Avatar = styled.Image`
  width: 200px;
  height: 200px;
  margin-bottom: 16px;
  border-radius: 100px;
`;

export const UserName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const UserEmail = styled.Text`
  color: #606073;
`;

export const SignOutButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  align-self: stretch;
  background-color: #1E319D;
  height: 60px;
  border-radius: 8px;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
`;

export const SignOutButtonText  = styled.Text`
  font-weight: bold;
  color: #fff;
`;

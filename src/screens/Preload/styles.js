import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1E319D;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Text`
  font-size: 32px;
  color: #FFF;
`;

export const LoadingIcon = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#fff'
})`
  margin-top: 50px;
`;

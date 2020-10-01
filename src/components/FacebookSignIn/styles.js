import styled from 'styled-components/native';

const FacebookButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 50px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border-bottom-width: 2px;
  border-color: #3b5998;
  background: #fff;
  padding: 0 16px;
`;

export const FacebookButtonText = styled.Text`
  flex: 1;
  color: #606073;
  text-align: center;
`;

export default FacebookButton;

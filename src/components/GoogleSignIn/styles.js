import styled from 'styled-components/native';

const GoogleButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border-bottom-width: 2px;
  border-color: #ea4335;
  background: #fff;
  padding: 0 16px;

  margin-bottom: 16px;
`;

export const GoogleButtonText = styled.Text`
  flex: 1;
  color: #606073;
  text-align: center;
`;

export default GoogleButton;

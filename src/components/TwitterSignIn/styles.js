import styled from 'styled-components/native';

const TwitterButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border-bottom-width: 2px;
  border-color: #1C9CEB;
  background: #fafafc;
  padding: 0 16px;
`;

export const TwitterButtonText = styled.Text`
  flex: 1;
  font-weight: bold;
  color: #1C9CEB;
  text-align: center;
`;

export default TwitterButton;

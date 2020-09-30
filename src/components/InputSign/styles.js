import styled from 'styled-components/native';

export const Container = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #b1b1b855;
  margin: 0 8px 8px;
  padding: 8px 8px;

  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#b1b1b8'
})`
  font-size: 12px;
  flex: 1;
`;

export const ButtonHidden = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})``;

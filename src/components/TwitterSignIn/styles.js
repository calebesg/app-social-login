import styled from 'styled-components/native';

const TwitterButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
`;

export default TwitterButton;

import React from 'react';
import styled from 'styled-components/native';

const LoadingIcon = () => <Container />;

const Container = styled.ActivityIndicator.attrs({
  size: 'large',
  color: '#fff'
})``;

export default LoadingIcon;

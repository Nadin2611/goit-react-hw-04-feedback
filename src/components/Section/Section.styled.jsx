import styled from 'styled-components';

export const SectionContainer = styled.section`
padding: ${props => props.theme.spacing(2)};
margin-bottom: ${props => props.theme.spacing(10)};
`;

export const SectionTitle = styled.h2`
  color: ${props => props.theme.colors.orange};
  font-size: ${props => props.theme.fontSizes.big};
  margin-bottom: ${props => props.theme.spacing(8)};

`;
import styled from 'styled-components';

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(2)};
  margin-top: ${props => props.theme.spacing(4)};`;


export const StatisticsItem = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  text-transform: capitalize;
  text-align: left;

  &.good {
     color: ${props => props.theme.colors.green};
  }

  &.neutral {
    color: ${props => props.theme.colors.violet};
  }

  &.bad {
    color: ${props => props.theme.colors.red};
  }

  &.total {
    color: ${props => props.theme.colors.pink};
    font-weight: bold;
  }

  &.positivePercentage {
    color: ${props => props.theme.colors.green};
    font-weight: bold;
  }
`;

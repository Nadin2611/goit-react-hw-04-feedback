  import styled from 'styled-components';

  export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: ${props => props.theme.spacing(4)}
  `;


  export const ButtonItem = styled.button`
    font-size: ${props => props.theme.fontSizes.large};
    cursor: pointer;
    min-width: 250px;
    min-height: 70px;
    border-radius: ${props => props.theme.spacing(2)};
    text-transform: capitalize;
    transition: 0.25s;
    
    &.good {
      color: ${props => props.theme.colors.green};
    
    }

    &.neutral {
      color: ${props => props.theme.colors.violet};
    }

    &.bad {
      color: ${props => props.theme.colors.red};
    }

    &:hover,
    &:focus { 
      box-shadow: 0 0.8em 0.8em -0.8em;
      transform: translateY(-0.25em);
    }
  `;

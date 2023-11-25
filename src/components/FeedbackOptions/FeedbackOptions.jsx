import { ButtonContainer, ButtonItem } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonContainer>
      {options.map(option => (
        <ButtonItem
          key={option}
          type="button"
          className={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </ButtonItem>
      ))}
    </ButtonContainer>
  );
};

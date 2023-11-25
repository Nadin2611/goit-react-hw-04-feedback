import { StatisticsContainer, StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsContainer>
      <StatisticsItem className="good">Good: {good}</StatisticsItem>
      <StatisticsItem className="neutral">Neutral: {neutral}</StatisticsItem>
      <StatisticsItem className="bad">Bad: {bad}</StatisticsItem>
      <StatisticsItem className="total">Total: {total}</StatisticsItem>
      <StatisticsItem className="positivePercentage">
        Positive feedback: {positivePercentage}%
      </StatisticsItem>
    </StatisticsContainer>
  );
};

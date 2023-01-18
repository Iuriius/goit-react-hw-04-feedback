import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const statList = [
    { statItem: good, title: 'Good' },
    { statItem: neutral, title: 'Neutral' },
    { statItem: bad, title: 'Bad' },
    { statItem: total, title: 'Total feedbacks' },
    { statItem: positivePercentage, title: 'Positive feedbacks' },
  ];
  return (
    <StatisticsList>
      {statList.map(({ statItem, title }) => (
        <StatisticsItem key={title}>
          <p>
            {title}: <span>{statItem}</span>
          </p>
        </StatisticsItem>
      ))}
    </StatisticsList>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

import PropTypes from 'prop-types';
import { Button, OptionsList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <li key={option}>
          <Button name={option} type="button" onClick={onLeaveFeedback}>
            {option[0].toUpperCase() + option.substring(1)}
          </Button>
        </li>
      ))}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

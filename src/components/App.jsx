import React, { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';

export default function App() {
  const [good, setCounterGood] = useState(0);
  const [neutral, setCounterNeutral] = useState(0);
  const [bad, setCounterBad] = useState(0);

  const stateMap = {
    good: setCounterGood,
    neutral: setCounterNeutral,
    bad: setCounterBad,
  };

  const onUpdateFeedback = event => {
    const { name } = event.target;
    stateMap[name](prevState => prevState + 1);
  };

  const total = good + neutral + bad;
  const emptyList = !(good + neutral + bad);
  const positivePercentage = Math.round((good * 100) / total) + '%';

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(stateMap)}
          onLeaveFeedback={onUpdateFeedback}
        />
      </Section>

      <Section title="Statistics">
        {emptyList ? (
          <Notification message="There is no feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </div>
  );
}
